const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const contentDir = path.join(rootDir, 'content');

const p1 = require('./part1.js');
const p2 = require('./part2.js');
const p3 = require('./part3.js');
const p4 = require('./part4.js');

const allPages = [...p1, ...p2, ...p3, ...p4];
console.log(`Starting generation of ${allPages.length} secret landing pages...`);

allPages.forEach((p, idx) => {
  const pageDir = path.join(contentDir, p.slug);
  if (!fs.existsSync(pageDir)) {
    fs.mkdirSync(pageDir, { recursive: true });
  }

  const itemsHtml = p.items.map(it => `
        <div class="bg-white p-5 rounded-xl border border-[#badfe3] shadow-xs hover:border-[#1c6e78] transition-colors">
          <h3 class="font-bold text-[#0d3a42] text-base mb-2 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#1c6e78]"></span>
            <span>${it.title}</span>
          </h3>
          <p class="text-xs sm:text-sm text-[#555555] leading-relaxed">${it.desc}</p>
        </div>`).join('\n');

  const symptomsHtml = p.symptoms.map(s => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
          <span class="text-[#1c6e78] font-bold mt-0.5">✔</span>
          <span>${s}</span>
        </li>`).join('\n');

  const content = `---
title: "${p.keyword}ㅣ해아림한의원"
seo:
  title: "${p.keyword}ㅣ해아림한의원"
description: "${p.description}"
keywords: ["${p.keyword}", "해아림한의원", "자율신경실조증", "자율신경검사", "HRV검사", "교감신경", "부교감신경"]
canonical: "https://healim-autonomic.com/${p.slug}/"
type: landing
sections:
  - block: markdown
    content:
      title: ""
      text: |
        <!-- Header Section -->
        <div class="mb-10 text-center md:text-left">
          <span class="inline-block px-3 py-1 bg-[#eaf3f4] text-[#1c6e78] font-bold text-xs rounded-full uppercase tracking-wider mb-2">${p.badge}</span>
          <h1 class="text-3xl md:text-4xl font-extrabold text-[#0d3a42] leading-tight mb-4">
            ${p.keyword}ㅣ해아림한의원
          </h1>
          <p class="text-[#444444] text-base md:text-lg leading-relaxed max-w-4xl">
            ${p.description}
          </p>
        </div>

        <!-- AEO Snippet & Core Q&A Box -->
        <div class="bg-gradient-to-br from-[#f2f7f7] to-[#eaf3f4] p-6 md:p-8 rounded-2xl border border-[#badfe3] mb-12 shadow-xs">
          <div class="flex items-start gap-2.5 mb-3">
            <span class="w-3 h-3 rounded-full bg-[#1c6e78] mt-1.5 flex-shrink-0"></span>
            <h2 class="text-xl md:text-2xl font-bold text-[#0d3a42]">${p.summaryQ}</h2>
          </div>
          <p class="text-[#333333] leading-relaxed text-sm md:text-base mb-4 font-medium">
            ${p.summaryA}
          </p>
          <div class="bg-white/80 p-4 rounded-xl border border-[#cce5e8] text-xs sm:text-sm text-[#1c6e78] font-semibold">
            💡 핵심 요약: 16년 임상 노하우의 해아림한의원은 HRV 심박변이도 자율신경 검사와 뇌기능 스트레스 검사, 체질 맞춤 1:1 진단을 통해 원인을 명확히 규명하고 신체 부담을 최소화한 안전한 회복 치료를 제공합니다.
          </div>
        </div>

        <!-- Clinical Mechanism & Background Section -->
        <div class="bg-white p-6 md:p-10 rounded-2xl border border-[#e2e8ea] shadow-sm mb-12">
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2.5 h-2.5 rounded-full bg-[#1c6e78] flex-shrink-0"></span>
            <h2 class="text-xl md:text-2xl font-bold text-[#0d3a42]">
              ${p.whyTitle}
            </h2>
          </div>
          <p class="text-[#444444] text-sm md:text-base leading-relaxed mb-6">
            ${p.whyContent}
          </p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
${itemsHtml}
          </div>

          <div class="bg-[#fafcfc] p-5 rounded-xl border border-[#e0eaec]">
            <h3 class="font-bold text-[#0d3a42] text-sm sm:text-base mb-3 flex items-center gap-2">
              <span class="text-[#1c6e78]">📋</span>
              <span>${p.keyword} 관련 대표 증상 체크리스트</span>
            </h3>
            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
${symptomsHtml}
            </ul>
          </div>
        </div>

        <!-- Integrated Solution Section -->
        <div class="bg-gradient-to-r from-[#0d3a42] to-[#1c6e78] text-white p-6 md:p-10 rounded-2xl shadow-md mb-12">
          <div class="max-w-3xl">
            <span class="text-[#f4d07e] font-bold text-xs uppercase tracking-wider mb-2 block">Healim Clinical Solution</span>
            <h2 class="text-2xl md:text-3xl font-extrabold mb-4 leading-tight !text-white" style="color: #ffffff !important;">
              해아림한의원의 1:1 맞춤 ${p.keyword} 치료 체계
            </h2>
            <p class="text-slate-100 text-sm md:text-base leading-relaxed mb-6" style="color: #f1f5f9 !important;">
              ${p.solution}
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div class="bg-white/10 backdrop-blur-xs p-3 rounded-lg border border-white/10">
                <div class="text-[#f4d07e] font-bold text-lg">16년+</div>
                <div class="text-xs text-slate-200">신경정신 임상 노하우</div>
              </div>
              <div class="bg-white/10 backdrop-blur-xs p-3 rounded-lg border border-white/10">
                <div class="text-[#f4d07e] font-bold text-lg">3단계</div>
                <div class="text-xs text-slate-200">체계적 진단 시스템</div>
              </div>
              <div class="bg-white/10 backdrop-blur-xs p-3 rounded-lg border border-white/10">
                <div class="text-[#f4d07e] font-bold text-lg">1:1</div>
                <div class="text-xs text-slate-200">맞춤 순한 청정한약</div>
              </div>
              <div class="bg-white/10 backdrop-blur-xs p-3 rounded-lg border border-white/10">
                <div class="text-[#f4d07e] font-bold text-lg">전국 16개</div>
                <div class="text-xs text-slate-200">네트워크 거점 진료</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Middle-Lower Return Button (중하반부 본페이지 이동 버튼) -->
        <div class="my-14 text-center">
          <a href="https://healim-autonomic.com/" class="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#0d3a42] to-[#1c6e78] hover:from-[#134954] hover:to-[#238591] text-white font-extrabold text-base sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-[#badfe3]/40 group cursor-pointer">
            <span class="text-[#f4d07e] text-2xl transition-transform group-hover:-translate-x-1">←</span>
            <span>해아림한의원 자율신경실조증 집중진료 본페이지 전체보기</span>
          </a>
          <p class="text-xs text-[#777777] mt-3">자율신경실조증의 원인, 증상별 메커니즘, 검사법 및 1:1 맞춤 치료 체계 전체 내용을 확인하실 수 있습니다.</p>
        </div>
---
`;

  const targetFile = path.join(pageDir, '_index.md');
  fs.writeFileSync(targetFile, content, 'utf8');
  console.log(`[${idx + 1}/18] Successfully updated: /${p.slug}/ (${p.keyword})`);
});

console.log('\nAll 18 secret landing pages re-generated with white H2 and 16개 branches!');
