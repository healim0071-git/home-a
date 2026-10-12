/**
 * scripts/build_community_static.js
 * AI 검색(GEO) & 답변(AEO), 네이버(Yeti), 구글(Googlebot)을 위한 정적 마크다운 사전 렌더링.
 * (YAML 들여쓰기 8칸 규칙 준수)
 */

const fs = require('fs');
const path = require('path');

const HUB_FILE = path.join(__dirname, '../data/healim_community_hub.json');
const COMMUNITY_MD = path.join(__dirname, '../content/community/_index.md');

const hubData = JSON.parse(fs.readFileSync(HUB_FILE, 'utf8'));

function indent(str, spaces = 8) {
  const pad = ' '.repeat(spaces);
  return str.split('\n').map(line => line.trim() ? pad + line : line).join('\n');
}

// 1. FAQ 정적 HTML 생성
let faqStaticRows = '';
hubData.faq.forEach((item) => {
  const cat = item.category || '자율신경FAQ';
  const title = item.title;
  const content = item.content || '';
  const date = item.date || '2026.09.09';
  const author = item.author || '해아림한의원';

  const formattedContent = content
    .split('\n\n')
    .map(p => `<p class="mb-3 text-[#333333] leading-relaxed text-sm md:text-base">${p.replace(/\n/g, '<br>')}</p>`)
    .join('\n');

  const block = `
<details class="group bg-white border border-[#badfe3] rounded-xl overflow-hidden shadow-2xs transition-all hover:border-[#1c6e78] mb-3" id="faq-item-${item.id}">
  <summary class="flex justify-between items-center p-4 md:p-5 cursor-pointer bg-[#fbfdfd] group-open:bg-[#f0f7f8] transition-colors select-none">
    <div class="flex items-start gap-3">
      <span class="inline-block px-2.5 py-0.5 text-xs font-bold bg-[#eaf3f4] text-[#1c6e78] rounded-full shrink-0 mt-0.5">${cat}</span>
      <h3 class="text-base md:text-lg font-bold text-[#0d3a42] leading-snug">${title}</h3>
    </div>
    <span class="text-[#1c6e78] text-lg font-bold transform group-open:rotate-180 transition-transform shrink-0 ml-2">▼</span>
  </summary>
  <div class="p-5 md:p-6 border-t border-[#badfe3] bg-white">
    <div class="flex items-center gap-3 text-xs text-[#888888] mb-4 pb-2 border-b border-gray-100">
      <span>작성: <strong>${author}</strong></span>
      <span>•</span>
      <span>발행일: ${date}</span>
      <span>•</span>
      <span>진료과: 한방신경정신과</span>
    </div>
    <div class="prose max-w-none text-[#333333]">
      ${formattedContent}
    </div>
  </div>
</details>
`;
  faqStaticRows += indent(block.trim(), 8) + '\n';
});

// 2. 칼럼 테이블 행(tr) 및 전문 시맨틱 HTML 생성
let colStaticTableRows = '';
let colFullSemanticArticles = '';

hubData.columns.forEach((col, idx) => {
  const num = hubData.columns.length - idx;
  const title = col.title;
  const summary = col.summary || '';
  const date = col.date || '2026.09.09';
  const author = col.author || '해아림한의원';
  const views = col.views || (150 + idx * 7);
  const content = col.content || '';

  const trBlock = `
<tr class="hover:bg-[#f9fcfe] transition-colors border-b border-gray-100" id="col-row-${col.id}">
  <td class="col-td-num py-3.5 px-3 text-center text-xs text-[#888888]">${num}</td>
  <td class="col-td-title py-3.5 px-4 font-semibold text-[#0d3a42]">
    <a href="#col-detail-${col.id}" onclick="openColumnDetailModal('${col.id}'); return false;" class="hover:text-[#1c6e78] hover:underline">${title}</a>
  </td>
  <td class="col-desktop-only py-3.5 px-3 text-center text-xs text-[#666666]">${author}</td>
  <td class="col-desktop-only py-3.5 px-3 text-center text-xs text-[#888888]">${date}</td>
  <td class="col-desktop-only py-3.5 px-3 text-center text-xs text-[#888888]">${views}</td>
</tr>
`;
  colStaticTableRows += indent(trBlock.trim(), 8) + '\n';

  const formattedContent = content
    .split('\n\n')
    .map(p => `<p class="mb-3 text-[#333333] leading-relaxed text-sm md:text-base">${p.replace(/\n/g, '<br>')}</p>`)
    .join('\n');

  const articleBlock = `
<article class="p-6 bg-white border border-[#badfe3] rounded-2xl mb-6 shadow-2xs" id="col-detail-${col.id}">
  <div class="mb-3 flex items-center gap-2 text-xs text-[#1c6e78] font-bold">
    <span>임상 칼럼 제${num}편</span>
    <span>•</span>
    <span>${date}</span>
    <span>•</span>
    <span>${author} (한방신경정신과 전문의 자문)</span>
  </div>
  <h3 class="text-xl md:text-2xl font-extrabold text-[#0d3a42] mb-3 leading-tight">${title}</h3>
  <p class="text-sm text-[#555555] bg-[#f0f7f8] p-3 rounded-lg border border-[#badfe3] mb-4">${summary}</p>
  <div class="prose max-w-none text-[#333333]">
    ${formattedContent}
  </div>
</article>
`;
  colFullSemanticArticles += indent(articleBlock.trim(), 10) + '\n';
});

let communityMd = fs.readFileSync(COMMUNITY_MD, 'utf8');

// FAQ 컨테이너 주입
const faqStartTag = '        <div id="faqListContainer" class="space-y-3 mb-6">';
const faqEndTag = '        </div>\n        <div class="healim-pagination-wrapper mb-10" id="faqPaginationContainer"></div>';
const faqContainerRegex = /<div id="faqListContainer" class="space-y-3 mb-6">[\s\S]*?<\/div>[\s\r\n]*<div class="healim-pagination-wrapper mb-10" id="faqPaginationContainer"><\/div>/;

if (faqContainerRegex.test(communityMd)) {
  communityMd = communityMd.replace(faqContainerRegex, `${faqStartTag}\n${faqStaticRows}${faqEndTag}`);
}

// 칼럼 테이블 컨테이너 주입
const colBodyRegex = /<tbody id="columnListContainer">[\s\S]*?<\/tbody>/;
if (colBodyRegex.test(communityMd)) {
  communityMd = communityMd.replace(colBodyRegex, `        <tbody id="columnListContainer">\n${colStaticTableRows}        </tbody>`);
}

// 크롤러용 칼럼 전문 시맨틱 섹션 주입
const semanticSection = `
        <!-- ══════════════════════════════════════════════════════════════
        SEO / AEO / GEO Search Engine Crawler Full Column Articles Vault
        ══════════════════════════════════════════════════════════════ -->
        <section id="seo-crawler-columns-vault" class="mt-8 border-t border-[#badfe3] pt-8" aria-label="해아림한의원 자율신경실조증 전체 임상 치료칼럼 전문">
          <div class="mb-6">
            <h2 class="text-xl md:text-2xl font-bold text-[#0d3a42] mb-2">자율신경실조증 심층 임상 치료 칼럼 아카이브</h2>
            <p class="text-xs md:text-sm text-[#666666]">전국 16개 네트워크 해아림한의원 의료진이 직접 집필한 자율신경계 질환의 신경학적 기전, 증상별 감별 진단, 치료 로드맵 전문입니다.</p>
          </div>
          <div class="space-y-6">
${colFullSemanticArticles}          </div>
        </section>
`;

const vaultRegex = /<!-- ══════════════════════════════════════════════════════════════[\s\r\n]*SEO \/ AEO \/ GEO Search Engine Crawler Full Column Articles Vault[\s\S]*?<\/section>/;
if (vaultRegex.test(communityMd)) {
  communityMd = communityMd.replace(vaultRegex, semanticSection.trim());
} else {
  const tabColEndRegex = /(<div class="healim-pagination-wrapper mb-10" id="columnsPaginationContainer"><\/div>[\s\r\n]*<\/div>)/;
  if (tabColEndRegex.test(communityMd)) {
    communityMd = communityMd.replace(tabColEndRegex, `$1\n${semanticSection}`);
  }
}

fs.writeFileSync(COMMUNITY_MD, communityMd, 'utf8');
console.log(`[SUCCESS] Pre-rendered HTML with 8-space indentation successfully!`);