/**
 * scripts/sync_seo_geo_pipeline.js
 * 해아림한의원 자율신경실조증 클리닉 차세대 SEO / GEO / AEO 통합 피드 및 데이터 동기화 파이프라인
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.join(__dirname, '..');
const dataHubFile = path.join(rootDir, 'data', 'healim_community_hub.json');
const staticHubFile = path.join(rootDir, 'static', 'data', 'healim_community_hub.json');

console.log('════════════════════════════════════════════════════════════════');
console.log('  해아림한의원 자율신경 SEO / GEO / AEO 통합 동기화 파이프라인');
console.log('════════════════════════════════════════════════════════════════\n');

// 1. 데이터 허브 파일 동기화
if (fs.existsSync(dataHubFile)) {
  const dataContent = fs.readFileSync(dataHubFile, 'utf8');
  fs.writeFileSync(staticHubFile, dataContent, 'utf8');
  console.log('✅ 1. 데이터 허브 동기화 완료: data/ -> static/data/ (100% 일치)');
} else if (fs.existsSync(staticHubFile)) {
  const staticContent = fs.readFileSync(staticHubFile, 'utf8');
  fs.writeFileSync(dataHubFile, staticContent, 'utf8');
  console.log('✅ 1. 데이터 허브 복원 완료: static/data/ -> data/ (100% 일치)');
}

const hubData = JSON.parse(fs.readFileSync(dataHubFile, 'utf8'));
const faqs = hubData.faq || [];
const columns = hubData.columns || [];

console.log(`   - 등록된 FAQ: ${faqs.length}편`);
console.log(`   - 등록된 치료칼럼: ${columns.length}편`);
console.log(`   - 등록된 치료후기: ${(hubData.reviews || []).length}편`);
console.log(`   - 등록된 유튜브 영상: ${(hubData.youtube || []).length}편\n`);

// 1.5. 독립 커뮤니티 페이지 정적 동기화 (/columns, /faq, /reviews, /youtube)
console.log('📝 1.5. 독립 커뮤니티 페이지 동기화 중...');
require('./generate_independent_community_pages.js');
console.log('✅ 1.5. 독립 커뮤니티 페이지 동기화 완료!\n');

// 2. Hugo 정적 빌드 실행
console.log('🚀 2. Hugo 정적 빌드 실행 중 (hugo --gc --minify)...');
try {
  const hugoOut = execSync('hugo --gc --minify', { cwd: rootDir, encoding: 'utf8' });
  console.log(hugoOut.trim());
  console.log('✅ Hugo 빌드 성공 완료!\n');
} catch (err) {
  console.error('❌ Hugo 빌드 실패:', err.message);
  process.exit(1);
}

// 3. RSS 피드 동기화 (public/index.xml -> public/rss.xml & static/rss.xml)
const publicIndexXml = path.join(rootDir, 'public', 'index.xml');
const publicRssXml = path.join(rootDir, 'public', 'rss.xml');
const staticRssXml = path.join(rootDir, 'static', 'rss.xml');

if (fs.existsSync(publicIndexXml)) {
  const xmlContent = fs.readFileSync(publicIndexXml, 'utf8');
  fs.writeFileSync(publicRssXml, xmlContent, 'utf8');
  fs.writeFileSync(staticRssXml, xmlContent, 'utf8');
  console.log('✅ 3. RSS 피드 동기화 완료: public/index.xml -> public/rss.xml & static/rss.xml');
}

console.log('\n✨ [최종 결과] SEO, GEO, AEO 및 웹사이트 빌드가 성공적으로 완료되었습니다.');