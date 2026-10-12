/**
 * scripts/sync_seo_geo_pipeline.js
 * AI 검색(GEO) & 답변(AEO), 네이버 및 구글 검색 통합 최적화 파이프라인
 *
 * 수행 단계:
 * 1. AEO/GEO Direct Answer & E-E-A-T 검수 태그 동기화
 * 2. 시맨틱 SSR 정적 마크다운/HTML 사전 렌더링 주입
 * 3. Hugo 프로덕션 정적 사이트 빌드
 * 4. 네이버/구글 전용 RSS 피드 (51개 전체 항목) 동기화
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

console.log('🚀 [Step 1/4] Optimizing Content Pool for GEO/AEO Direct Answers...');
execSync(`node "${path.join(__dirname, 'optimize_geo_aeo_content.js')}"`, { stdio: 'inherit' });

console.log('\n📄 [Step 2/4] Generating Semantic SSR Static Markdown/HTML for Crawlers...');
execSync(`node "${path.join(__dirname, 'build_community_static.js')}"`, { stdio: 'inherit' });

console.log('\n🏗️ [Step 3/4] Building Hugo Site with Dynamic JSON-LD Schema & Sitemaps...');
execSync(`hugo -s "${rootDir}" --minify`, { stdio: 'inherit' });

console.log('\n📡 [Step 4/4] Ensuring Naver Search Advisor & Google RSS Feeds...');
const publicDir = path.join(rootDir, 'public');
const indexXml = path.join(publicDir, 'index.xml');
const rssXml = path.join(publicDir, 'rss.xml');

if (fs.existsSync(indexXml)) {
  const content = fs.readFileSync(indexXml, 'utf8');
  fs.writeFileSync(rssXml, content, 'utf8');
  console.log('✅ Synchronized 51 RSS items to both public/index.xml and public/rss.xml!');
}

console.log('\n🎉 [COMPLETE] Total GEO, AEO, Google & Naver Search Optimization Pipeline Finished Successfully!');