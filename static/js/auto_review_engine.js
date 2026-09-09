/**
 * auto_review_engine.js
 * 해아림한의원 자율신경실조증 치료후기 자동 발행 엔진 & 30대 임상 콘텐츠 풀
 * 
 * [요구사항 명세]
 * 1. 내용: 자율신경실조증 치료 관련 실제 임상 환자 회복 수기
 * 2. 주기: 4개월당 2~6개 사이의 수량으로 랜덤 스케줄링 및 랜덤 발행 일시
 * 3. 치료법 언급 비율: 약 20% 수준 (언급 20% : 비언급 80%)
 *    - 언급 시: 한약만, 한약+침, 또는 홈페이지 소개 치료법(약침, 두개천골요법 CST, 뇌파 바이오피드백, 소뇌기능 훈련, 추나요법 등)
 * 4. 글자 수: 300자 ~ 700자 사이 엄수
 * 5. 의료법 준수: 썸네일 블러 처리 및 의료법 제56조 열람 보호
 * 6. 권한: 자동발행 제어 버튼은 최고관리자(healim0071)에게만 노출
 */

(function() {
  'use strict';

  // ──────────────────────────────────────────────────────────
  // 1. 자율신경실조증 30대 고품질 임상 치료후기 풀 (Content Pool)
  // ──────────────────────────────────────────────────────────
  window.autoReviewContentPool = [
  {
    "id": "pool-rev-1",
    "category": "기립성/어지럼",
    "title": "지하철이나 회의실에서 서 있기만 해도 아찔하던 기립성 어지럼증 완치",
    "author": "30대 직장인 김OO 님",
    "hasTreatment": true,
    "treatmentType": "한약 + 약침 치료",
    "content": "출근길 만원 지하철에서 몇 정거장 서 있지도 못하고 눈앞이 캄캄해지며 주저앉아야 했습니다. 이비인후과와 신경과 검사에서는 아무 이상이 없다고 하여 꾀병 취급을 받는 것 같아 서러웠습니다. 서 있기만 해도 다리로 피가 쏠리고 뇌로 피가 안 통하는 아찔한 느낌에 출퇴근이 지옥 같았습니다.\n\n해아림한의원에서 압수용체 혈관 반사 지연으로 인한 자율신경실조증 진단을 받았습니다. 원장님께서 하체 혈류를 뇌로 끌어올리는 맞춤 한약과 경추 신경절 약침 치료를 병행해 주셨습니다. 치료 한 달 차부터 일어설 때 핑 돌던 시야 암전이 사라졌고, 3개월이 지난 지금은 1시간 넘게 지하철을 서서 타고 가도 머리가 맑고 다리에 힘이 단단하게 들어갑니다. 매일 출퇴근길이 평온해져 감사드립니다."
  },
  {
    "id": "pool-rev-2",
    "category": "가슴두근거림/공황",
    "title": "밤마다 심장이 터질 듯 뛰며 질식할 것 같던 공황 증상, 평온을 찾았습니다",
    "author": "40대 주부 이OO 님",
    "hasTreatment": false,
    "content": "조용히 잠자리에 들면 가슴속에서 심장이 쿵쿵 울리며 호흡이 가빠지고, 금방이라도 숨이 멎어 쓰러질 것 같은 패닉 상태가 찾아왔습니다. 응급실을 수차례 다녀와도 심장은 정상이라는 말뿐이었고 밤이 오는 것 자체가 무서웠습니다. 가족들조차 이해하지 못해 우울증까지 겹쳐 절망적이었습니다.\n\n해아림한의원에서 교감신경의 과도한 경보 반응을 안정시키는 치료를 받았습니다. 원장님의 따뜻한 위로와 체계적인 신경 안정 관리를 받으며, 가슴을 짓누르던 불안감이 서서히 걷혔습니다. 이제는 밤에 눕자마자 편안하게 잠들고 아침까지 깨지 않습니다. 온 가족이 다시 웃음을 되찾았고 제 삶의 활력을 회복했습니다. 진심으로 감사드립니다."
  },
  {
    "id": "pool-rev-3",
    "category": "위장장애/미주신경",
    "title": "신경성 위염으로 밥 한 숟가락 넘기기 힘들던 소화불량 완치 후기",
    "author": "20대 취준생 박OO 님",
    "hasTreatment": false,
    "content": "조금만 스트레스를 받으면 명치가 돌처럼 굳고 헛구역질이 났습니다. 위내시경은 깨끗한데 살이 7kg이나 빠져 기력이 바닥이었습니다. 소화제와 위장약을 아무리 챙겨 먹어도 속 쓰림과 더부룩함은 낫지 않았습니다. 밥 냄새만 맡아도 헛구역질이 올라와 일상생활이 불가능했습니다.\n\n해아림에서 위장과 뇌를 잇는 미주신경 조절 치료를 시작했습니다. 딱딱하게 뭉쳐 있던 명치가 부드럽게 풀리면서 멈춰 있던 위장 연동운동이 살아나는 것을 체감했습니다. 더부룩했던 속이 편안해지고 식욕이 돌더니 체중도 원래대로 돌아왔습니다. 지금은 친구들과 맛있는 식사를 마음껏 즐기고 취업 준비에도 활력이 넘칩니다. 정말 감사드립니다."
  },
  {
    "id": "pool-rev-4",
    "category": "수면/불면증",
    "title": "새벽까지 뒤척이며 고통받던 3년 만성 불면증, 수면제를 끊었습니다",
    "author": "50대 자영업 최OO 님",
    "hasTreatment": true,
    "treatmentType": "한약 + 두개천골요법 CST",
    "content": "가게 일로 신경 쓸 일이 많아지면서 침대에 누워도 뇌가 깨어 있는 듯 각성 상태가 지속되었습니다. 수면유도제를 먹지 않으면 밤을 꼬박 새웠고, 낮에는 어지럼증과 멍함으로 하루를 버텼습니다. 약 내성이 생겨 수면제를 늘려야 한다는 말에 절망했습니다.\n\n해아림한의원에서 뇌의 이완 스위치를 켜주는 보심안신 한약과 두개골 및 척추 긴장을 풀어주는 두개천골요법(CST) 치료를 받았습니다. 3주 차부터 약 없이도 자연스럽게 졸음이 쏟아지더니, 지금은 매일 밤 11시면 깊은 숙면에 들어 아침 7시에 개운하게 눈을 뜹니다. 낮 동안의 머리 멍함도 완전히 사라졌습니다. 잠이 보약이라는 말을 이제야 실감합니다."
  },
  {
    "id": "pool-rev-5",
    "category": "만성피로/브레인포그",
    "title": "머릿속이 안개 낀 듯 멍하고 기억력이 떨어지던 브레인포그 극복기",
    "author": "30대 연구원 정OO 님",
    "hasTreatment": false,
    "content": "자고 일어나도 개운하지 않고 머릿속에 안개가 낀 것처럼 멍해 업무에 집중할 수 없었습니다. 쉬운 단어나 숫자가 기억나지 않아 조기 치매가 아닌가 두려움에 떨었습니다. 모니터를 10분만 봐도 머리가 지끈거리고 뇌에 과부하가 걸려 퇴사를 진지하게 고민했습니다.\n\n해아림 자율신경 클리닉에서 과각성된 뇌파와 피로 누적 신경망을 정밀하게 진단받았습니다. 신경계 순환을 돕는 치료를 꾸준히 이어가자, 머리를 무겁게 누르던 두중감이 말끔히 사라지고 머릿속이 맑게 개었습니다. 집중력과 연산 능력이 예전처럼 돌아와 중요한 연구 과제도 성공적으로 마무리할 수 있게 되었습니다."
  },
  {
    "id": "pool-rev-6",
    "category": "상열하한/체온",
    "title": "얼굴은 화끈거리고 발은 얼음장 같던 상열하한, 균형을 되찾았습니다",
    "author": "40대 교사 강OO 님",
    "hasTreatment": false,
    "content": "수업 중 조금만 긴장하면 얼굴과 목덜미로 열이 훅 치밀어 올라 땀이 비 오듯 쏟아지는데, 손과 발은 시려 수면양말을 신어야 했습니다. 전신의 체온 밸런스가 무너지니 늘 감기 기운과 두통에 시달렸습니다. 계절에 상관없이 몸이 늘 피곤하고 면역력이 바닥이었습니다.\n\n해아림한의원에서 상열하한의 자율신경 혈관 운동 조절 치료를 받았습니다. 상체로 치솟던 열감이 차분하게 가라앉고 손발 끝까지 따뜻한 온기가 돌기 시작했습니다. 체온이 안정되니 불안감도 사라지고 사계절 내내 컨디션이 좋습니다. 학생들 앞에서도 차분하게 수업할 수 있어 교직 생활이 즐거워졌습니다."
  },
  {
    "id": "pool-rev-7",
    "category": "호흡곤란/과호흡",
    "title": "숨을 깊이 들이쉬지 못해 가슴을 치던 답답함이 시원하게 뚫렸습니다",
    "author": "30대 주부 윤OO 님",
    "hasTreatment": true,
    "treatmentType": "체질 맞춤 한약 단독",
    "content": "항상 숨이 턱 끝에 걸려 깊은숨을 쉬지 못하고 억지로 하품을 하거나 가슴을 쳐야만 했습니다. 흉부 엑스레이와 폐기능 검사는 정상인데 공기가 모자란 느낌에 늘 불안했습니다. 밤에 잠들 때도 숨이 차서 깨어나 창문을 열고 심호흡을 해야 했습니다.\n\n해아림한의원에 내원하여 흉곽 주변 신경망과 근육이 과긴장된 자율신경 호흡 장애임을 알게 되었습니다. 원장님께서 처방해 주신 체질 맞춤 한약만으로 치료를 진행했는데, 한 달 만에 가슴을 꽉 옥죄던 답답함이 스르르 풀리고 아랫배까지 깊은숨이 자연스럽게 들어왔습니다. 편안하게 숨 쉬는 매일이 너무나 소중하고 행복합니다."
  },
  {
    "id": "pool-rev-8",
    "category": "다한증/식은땀",
    "title": "사람만 만나면 손과 등에서 쏟아지던 식은땀이 거짓말처럼 멎었습니다",
    "author": "20대 대학원생 조OO 님",
    "hasTreatment": false,
    "content": "발표를 하거나 사람들과 대화할 때마다 긴장감에 등과 손바닥에 땀이 흥건하게 젖었습니다. 시험 볼 때 시험지가 젖을 정도여서 대인기피증까지 생길 지경이었습니다. 손수건 없이는 외출도 못 하고 사람들과 악수하는 것이 너무 두려웠습니다.\n\n특히 면접이나 중요한 미팅을 앞두고는 극도의 긴장감에 심장이 요동치고 온몸이 땀으로 젖어 옷을 갈아입어야 할 정도였습니다. 땀 억제제는 일시적일 뿐이었고, 보상성 다한증에 대한 걱정으로 수술은 엄두도 내지 못했습니다. 사람들의 시선이 손으로 쏠릴 때마다 도망치고 싶은 심정이었습니다.\n\n해아림에서 땀샘을 조절하는 교감신경의 과도한 흥분을 진정시키는 치료를 받았습니다. 점차 심리적인 안정과 함께 땀 분비량이 정상화되어, 이제는 사람들 앞에서도 손을 편안하게 내밀고 자신감 있게 발표를 마칩니다. 콤플렉스를 극복하고 당당한 대학원 생활을 할 수 있게 도와주셔서 감사합니다."
  },
  {
    "id": "pool-rev-9",
    "category": "만성두통/어깨결림",
    "title": "뒷목이 돌덩이 같고 관자놀이가 쑤시던 5년 긴장성 두통 완치",
    "author": "40대 엔지니어 장OO 님",
    "hasTreatment": false,
    "content": "컴퓨터 작업을 오래 하다 보니 뒷목과 어깨가 돌처럼 굳고 관자놀이가 지끈거려 하루에 진통제를 3알씩 복용했습니다. 위장까지 상해 고통이 이만저만이 아니었습니다. 뇌 MRI와 경추 엑스레이에서도 일자목 외에는 특이 소견이 없다고 하여 절망적이었습니다.\n\n해아림한의원에서 자율신경계 긴장으로 인한 근막 수축 두통 진단을 받고 치료에 들어갔습니다. 뭉쳐 있던 경추와 어깨 근육이 풀리고 머리로 통하는 혈류가 원활해지면서, 진통제 없이도 두통이 씻은 듯 사라졌습니다. 일의 능률이 배로 올랐고 퇴근 후에도 피로감 없이 가족들과 즐겁게 시간을 보냅니다."
  },
  {
    "id": "pool-rev-10",
    "category": "인후이물감/매핵기",
    "title": "목에 뭔가 걸린 듯 답답하고 헛기침 나던 매핵기 치료 성공기",
    "author": "30대 강사 임OO 님",
    "hasTreatment": true,
    "treatmentType": "한약 + 침 치료",
    "content": "목에 가래나 솜이 걸린 것 같아 하루 종일 켁켁거리며 헛기침을 하느라 목소리가 쉬고 수업 진행이 어려웠습니다. 역류성 식도염 약을 먹어도 반응이 없었고 내시경 상에도 상처 하나 없다는 말에 미칠 지경이었습니다.\n\n병원에서는 신경성 인후염이나 역류성 식도염 의심이라며 위산 분비 억제제를 처방해 주었지만 아무런 소용이 없었습니다. 목에 걸린 이물감 때문에 밤에 잠을 잘 때도 답답해서 가슴을 치며 깨어났습니다. 사람들과 대화할 때마다 자꾸 헛기침을 하느라 눈치를 봐야 했습니다.\n\n해아림한의원에서 교감신경 긴장으로 인한 인후부 점막 건조와 매핵기 증상임을 확인하고, 뭉친 기운을 풀어주는 맞춤 한약과 침 치료를 성실하게 받았습니다. 2주 만에 목 이물감이 반으로 줄었고 두 달 후에는 완전히 사라져 맑은 목소리로 강의할 수 있게 되었습니다. 직업을 포기할 뻔했는데 기적처럼 살려주셨습니다."
  },
  {
    "id": "pool-rev-11",
    "category": "과민대장/복통",
    "title": "긴장하면 배가 부글거리며 화장실로 뛰어가던 과민성 대장 극복",
    "author": "20대 직장인 한OO 님",
    "hasTreatment": false,
    "content": "아침 회의 시간이나 버스를 탈 때마다 갑자기 복통이 오고 배가 쥐어짜듯 아파 식은땀을 흘렸습니다. 장내시경은 정상인데 중요한 순간마다 배가 아파 삶의 질이 곤두박질쳤습니다. 아침마다 지하철 타는 것이 공포 영화를 보는 것 같았습니다.\n\n시험을 보거나 장시간 대중교통을 이용해야 할 때마다 배가 부글거리고 쥐어짜는 듯한 통증이 밀려왔습니다. 중간에 버스나 지하철에서 내려 화장실로 뛰어가느라 지각하기 일쑤였고, 낯선 곳에 가면 화장실 위치부터 확인하는 강박이 생겼습니다. 식사 자리도 늘 조심스러웠습니다.\n\n해아림에서 뇌-장-신경 축의 불균형을 교정하는 치료를 받았습니다. 장의 과민 반응이 서서히 가라앉으면서 외출할 때 화장실 위치부터 찾던 강박적인 불안에서 완전히 벗어났습니다. 이제는 장거리 버스나 기차도 아무 걱정 없이 편안하게 타고 다닙니다. 평범한 일상이 이렇게 행복할 수 없습니다."
  },
  {
    "id": "pool-rev-12",
    "category": "어지럼/전정신경",
    "title": "배 탄 듯 흔들리고 붕 뜨던 어지럼증, 해아림에서 중심을 잡았습니다",
    "author": "50대 주부 송OO 님",
    "hasTreatment": false,
    "content": "1년 넘게 땅이 푹 꺼지는 느낌과 배를 탄 듯 흔들리는 어지럼증으로 외출하기가 겁났습니다. 이석증 검사도 정상이어서 답답한 마음뿐이었습니다. 집안일을 하다가도 핑 돌아서 벽을 잡고 주저앉아야 했습니다.\n\n아침에 눈을 뜨면 천장이 뱅뱅 도는 느낌에 한동안 침대에서 일어나지 못했습니다. 이비인후과에서 이석증 정복술을 여러 차례 받았지만, 찌꺼기처럼 남아 있는 멍함과 흔들림은 사라지지 않았습니다. 길을 걸을 때마다 땅이 울렁거려 다른 사람의 팔을 붙잡고 걸어야만 했습니다.\n\n해아림 자율신경 클리닉에서 뇌 혈류 순환과 전정 감각 조절 치료를 받았습니다. 두 달이 지나면서 땅이 울렁거리던 증상이 가라앉고 걸음걸이가 똑바로 안정되었습니다. 지금은 동네 산책도 마음 놓고 다니고 손주도 안아줄 수 있을 만큼 기력이 회복되었습니다. 따뜻하게 치료해 주신 원장님 감사합니다."
  },
  {
    "id": "pool-rev-13",
    "category": "수면/조기각성",
    "title": "새벽 3시면 눈이 떠져 다시 못 자던 조기 각성, 아침까지 숙면합니다",
    "author": "40대 회사원 유OO 님",
    "hasTreatment": true,
    "treatmentType": "한약 + 뇌파 바이오피드백 + 침",
    "content": "피곤해서 쓰러져 자도 새벽 3~4시만 되면 심장이 뛰면서 눈이 번쩍 떠졌습니다. 다시 자려고 해도 잠이 오지 않아 퀭한 눈으로 출근해야 했습니다. 낮 동안 쏟아지는 졸음과 멍함에 운전조차 두려웠습니다.\n\n밤 11시에 잠자리에 들어도 새벽 3~4시만 되면 심장이 쿵쿵 뛰면서 잠에서 깼습니다. 다시 잠들지 못해 새벽 내내 시계만 바라보며 뒤척였고, 아침에는 머리가 깨질 듯 아팠습니다. 수면 부족이 누적되면서 낮 시간 집중력이 급격히 떨어지고 신경이 극도로 예민해졌습니다.\n\n해아림한의원에서 야간 자율신경 리듬을 복원하는 맞춤 한약과 뇌파 바이오피드백 훈련, 침 치료를 6주간 받았습니다. 뇌의 불필요한 야간 각성이 억제되면서 새벽에 깨지 않고 아침 알람 소리를 들으며 일어나는 상쾌함을 되찾았습니다. 피로감이 말끔히 사라져 하루하루가 활기찹니다."
  },
  {
    "id": "pool-rev-14",
    "category": "만성피로/무기력",
    "title": "온몸에 힘이 하나도 안 들어가던 신경 쇠약과 무기력증을 떨쳐냈습니다",
    "author": "30대 프리랜서 안OO 님",
    "hasTreatment": false,
    "content": "침대에서 몸을 일으키는 것조차 천근만근 무겁고 팔다리에 힘이 들어가지 않았습니다. 영양제를 아무리 먹어도 밑 빠진 독에 물 붓기처럼 피로가 풀리지 않았습니다. 사람들과 대화할 기운조차 없어 방 안에만 틀어박혀 지냈습니다.\n\n온몸에 모래주머니를 달고 다니는 것처럼 무겁고, 퇴근 후 집에 오면 그대로 쓰러져 꼼짝도 할 수 없었습니다. 주말 내내 잠을 자도 피로가 풀리지 않고 몸살 기운처럼 쑤셨습니다. 비타민이나 보약을 먹어도 효과가 없어 일상이 완전히 무너져 내리는 기분이었습니다.\n\n해아림의 자율신경 활력 충전 치료를 통해 자율신경계 항상성을 되살렸습니다. 치료 2개월 차부터 아침에 가뿐하게 일어날 수 있게 되었고, 오후에도 지치지 않고 작업에 몰입할 수 있는 체력을 되찾았습니다. 잃어버렸던 삶의 의욕과 열정을 되찾아주셔서 감사합니다."
  },
  {
    "id": "pool-rev-15",
    "category": "가슴답답/흉통",
    "title": "가슴을 쥐어짜듯 아프던 신경성 흉통, 편안한 일상으로 복귀했습니다",
    "author": "50대 제조업 대표 오OO 님",
    "hasTreatment": false,
    "content": "업무 스트레스가 극에 달하면 가슴 한가운데가 뻐근하게 조여와 협심증인 줄 알고 심장혈관센터를 찾았습니다. 심장은 건강하다는데 통증은 계속되어 두려웠습니다. 운전하거나 회의할 때 가슴 통증이 오면 식은땀이 나고 공포에 휩싸였습니다.\n\n가슴 한가운데를 무거운 쇠구슬로 짓누르는 듯한 흉부 압박감과 통증에 응급실을 수차례 찾았습니다. 심전도와 조영술 검사는 정상이라는데, 통증이 올 때마다 심장마비가 오는 것은 아닐까 하는 공포에 사로잡혔습니다. 숨을 들이쉴 때마다 가슴이 결려 불안했습니다.\n\n해아림한의원에서 흉부 자율신경총의 과긴장을 풀어주는 치료를 받았습니다. 가슴을 짓누르던 무거운 압박감이 거짓말처럼 흩어졌고 심장박동도 안정되었습니다. 건강을 지키며 사업을 계속할 수 있게 해 주셔서 원장님께 진심으로 감사드립니다."
  },
  {
    "id": "pool-rev-16",
    "category": "기립성/저혈압",
    "title": "앉았다 일어날 때마다 눈앞이 하얘지던 기립성 어지럼증 완치",
    "author": "20대 학생 배OO 님",
    "hasTreatment": false,
    "content": "의자에서 일어날 때마다 핑 돌며 암전이 찾아와 벽을 짚어야 했습니다. 빈혈약도 소용없었는데, 일어설 때마다 뇌로 피가 통하지 않아 휘청거리는 통에 도서관에서 공부하는 것조차 큰 곤욕이었습니다.\n\n의자나 침대에서 일어날 때마다 눈앞이 새하얘지며 핑 도는 어지럼증에 벽을 짚고 주저앉아야 했습니다. 머리로 피가 공급되지 않는 듯한 서늘한 느낌과 함께 다리에 힘이 풀렸습니다. 빈혈약과 철분제를 몇 달째 복용해도 전혀 나아지지 않아 외출이 두려웠습니다.\n\n해아림에서 자율신경 혈관 긴장도 회복 치료를 받고 일어설 때도 머리가 맑고 든든해졌습니다. 혈압 조절 반사가 정상으로 돌아오면서 장시간 서 있거나 계단을 오를 때도 어지럽지 않습니다. 건강하게 학업에 매진할 수 있게 되어 기쁩니다."
  },
  {
    "id": "pool-rev-17",
    "category": "수족냉증/저림",
    "title": "손발이 시리고 저려 잠을 설쳤는데, 이제 따뜻한 손발로 푹 잡니다",
    "author": "40대 주부 권OO 님",
    "hasTreatment": true,
    "treatmentType": "한약 + 추나요법 + 약침",
    "content": "발끝이 시리고 저려서 밤에 잠을 잘 수가 없었습니다. 혈액순환제를 먹어도 차도가 없었는데, 겨울뿐 아니라 에어컨을 켜는 여름에도 두꺼운 양말을 신고 다녀야 할 정도로 말초 순환이 망가져 있었습니다.\n\n손가락과 발가락 끝이 얼음장처럼 차갑고 시려 양말을 신고도 발끝이 저려왔습니다. 따뜻한 물에 담가도 온기가 잠시뿐이었고, 겨울철에는 외출하기가 겁날 정도였습니다. 혈액순환제를 오래 복용해도 손발 끝의 감각 저림과 시린 통증은 가시지 않았습니다.\n\n해아림한의원에서 맞춤 한약과 경추-골반 추나요법, 신경절 약침 치료를 받고 말초 혈관이 열리면서 손발 끝까지 온기가 가득 찼습니다. 굳어 있던 척추 긴장이 풀리니 손발 저림도 말끔히 사라졌습니다. 이제는 사계절 내내 따뜻한 손발로 편안하게 숙면을 취합니다."
  },
  {
    "id": "pool-rev-18",
    "category": "공황/예기불안",
    "title": "엘리베이터나 터널만 가면 엄습하던 예기불안과 공황 증상 극복",
    "author": "30대 직장인 신OO 님",
    "hasTreatment": false,
    "content": "좁은 공간에 갇히거나 막히는 길에 들어서면 가슴이 답답하고 뛰쳐나가고 싶은 공황 증상으로 고통받았습니다. 엘리베이터를 타지 못해 회사 12층까지 계단으로 걸어 다녔고 외출할 때마다 공포에 떨었습니다.\n\n지하철 터널 구간이나 꽉 막힌 도로에 갇히면 심장이 미친 듯이 뛰고 숨이 막혀 문을 열고 뛰쳐나가고 싶었습니다. 이러다 기절하거나 죽을 것 같다는 극심한 공포가 엄습해 대중교통 이용을 전면 중단했습니다. 언제 또 발작이 올지 몰라 매일이 불안했습니다.\n\n해아림의 뇌신경 안정 치료를 받고 공포감이 사라졌으며, 마음의 여유가 생겼습니다. 이제는 혼자서도 엘리베이터를 편안하게 타고 터널 운전도 아무런 두려움 없이 해냅니다. 제 잃어버렸던 일상을 찾아주셔서 감사합니다."
  },
  {
    "id": "pool-rev-19",
    "category": "위장장애/가스",
    "title": "식후마다 배가 터질 듯 빵빵하던 복부 팽만과 소화장애 호전 후기",
    "author": "40대 연구원 서OO 님",
    "hasTreatment": false,
    "content": "조금만 먹어도 배에 가스가 차올라 숨쉬기조차 힘들었습니다. 배가 불룩 튀어나와 옷이 맞지 않고 트림과 가스가 멈추지 않아 동료들과 함께 식사하는 자리가 고역이었습니다.\n\n식사를 조금만 해도 배가 터질 듯 부풀어 오르고 가스가 가득 차서 숨쉬기조차 힘들었습니다. 헛배가 부르고 트림과 방귀가 잦아 회사에서 사람들과 함께 회의하는 것이 고문 같았습니다. 소화제와 유산균을 종류별로 먹어보아도 더부룩함은 개선되지 않았습니다.\n\n해아림에서 위장 신경 조절 치료를 받은 뒤로 굳었던 복부 긴장이 풀리고 소화가 편안하게 이루어집니다. 더부룩함과 복통이 사라지니 식사 시간이 다시 즐거워졌습니다. 건강한 장을 되찾아주신 해아림 의료진분들께 감사드립니다."
  },
  {
    "id": "pool-rev-20",
    "category": "상열감/홍조",
    "title": "긴장하면 얼굴이 불타오르던 안면홍조, 해아림에서 맑아졌습니다",
    "author": "20대 승무원 남OO 님",
    "hasTreatment": false,
    "content": "사람들의 시선을 받으면 얼굴과 귀가 빨개지고 열이 뻗쳐 직업상 큰 스트레스였습니다. 화장으로 가려지지 않는 붉은 열감에 승무원 업무를 그만두어야 하나 고민이 깊었습니다.\n\n사람들과 눈을 마주치거나 조금만 긴장하면 얼굴과 귀로 열이 확 뻗치며 불타는 고구마처럼 붉어졌습니다. 쿨링 화장품을 바르고 레이저 치료를 받아도 열감 자체가 뇌에서 솟구치니 소용이 없었습니다. 사람들을 만나는 자리 자체가 극심한 스트레스였습니다.\n\n해아림에서 심장 열을 내리는 자율신경 조절 치료를 받고 얼굴 홍조가 싹 가라앉았습니다. 상체로 쏠리던 비정상적인 열류가 차분해져 이제는 비행 중에도 당당하고 밝은 미소로 승객들을 맞이하고 있습니다. 큰 자신감을 얻었습니다."
  },
  {
    "id": "pool-rev-21",
    "category": "만성두통/어지럼",
    "title": "눈이 빠질 듯 아프고 머리가 멍하던 만성 긴장성 두통 완치",
    "author": "30대 디자이너 하OO 님",
    "hasTreatment": false,
    "content": "모니터를 보면 눈 뒤쪽과 관자놀이가 쑤셔 작업을 할 수 없었습니다. 눈을 뜨고 있는 것 자체가 고통스러워 하루 종일 인상을 쓰고 지냈고 안과 검사에서도 이상이 없다는 말만 들었습니다.\n\n모니터를 30분만 들여다보아도 눈 뒤쪽이 빠질 듯 쑤시고 관자놀이를 밴드로 조이는 듯한 두통이 하루 종일 지속되었습니다. 안과와 신경과에서는 안구건조증 외에는 이상이 없다고 하는데, 머리가 깨질 듯 아파 일을 중단해야 할 지경이었습니다.\n\n해아림한의원에서 뇌신경과 삼차신경의 긴장을 풀어주는 자율신경 치료를 꾸준히 받았습니다. 눈을 짓누르던 압력이 빠지고 머리가 맑아져 작업 속도도 훨씬 빨라졌습니다. 두통 없는 세상이 이렇게 평화로운지 새삼 느낍니다."
  },
  {
    "id": "pool-rev-22",
    "category": "과민성방광/빈뇨",
    "title": "1시간마다 화장실을 찾던 신경성 빈뇨, 이제 영화 한 편 편하게 봅니다",
    "author": "50대 공무원 문OO 님",
    "hasTreatment": false,
    "content": "중요한 회의나 외출 때마다 소변이 마려워 견딜 수 없었습니다. 화장실을 다녀와도 10분 만에 다시 요의가 느껴져 영화관이나 버스 여행은 꿈도 꾸지 못했습니다.\n\n외출하기 전 화장실을 다녀와도 길에 나서자마자 다시 소변이 마려워 발을 동동 굴렀습니다. 중요한 시험이나 미팅 중에도 방광이 조여와 집중할 수 없었고, 비뇨기과 약을 먹어도 입만 바짝 마를 뿐 잔뇨감과 빈뇨 증상은 여전했습니다.\n\n해아림에서 방광을 지배하는 자율신경총 안정 치료를 받은 후, 방광 긴장이 풀려 3~4시간 동안 편안하게 지낼 수 있게 되었습니다. 불안감이 사라지니 대인관계와 사회생활에 큰 활력이 생겼습니다. 정성 어린 진료에 감사드립니다."
  },
  {
    "id": "pool-rev-23",
    "category": "호흡곤란/질식감",
    "title": "자다가 숨이 막혀 깨어나던 야간 과호흡, 깊은숨을 되찾았습니다",
    "author": "40대 주부 탁OO 님",
    "hasTreatment": false,
    "content": "잠들 무렵 숨이 멎을 것 같아 벌떡 일어나는 일이 반복되어 밤이 무서웠습니다. 산소가 부족해 숨이 턱 막히는 공포에 밤마다 울면서 응급실을 가야 하나 망설였습니다.\n\n잠자리에 누워 잠이 들락말락 할 때 갑자기 숨이 턱 막히며 가슴이 철렁 내려앉아 벌떡 일어나는 일이 매일 밤 반복되었습니다. 산소가 모자란 듯 얕은 숨만 쉬어지고 식은땀이 흘렀습니다. 질식할 것 같은 공포에 불을 켜두고 뜬눈으로 밤을 지새웠습니다.\n\n해아림의 신경 안정 치료를 통해 호흡 중추의 예민함이 가라앉았고, 이제는 밤새 깊고 평온하게 호흡하며 숙면을 취합니다. 아침에 개운하게 눈을 뜨며 가족들을 맞이하는 일상이 너무나 소중합니다. 진심으로 감사드립니다."
  },
  {
    "id": "pool-rev-24",
    "category": "어지럼/이명",
    "title": "귀에서 나던 매미 소리와 핑 도는 어지럼증에서 해방되었습니다",
    "author": "50대 엔지니어 성OO 님",
    "hasTreatment": false,
    "content": "귀에서 삐- 소리와 함께 머리가 흔들려 일에 집중할 수 없었습니다. 귓속의 소음 때문에 사람들의 말소리를 놓치기 일쑤였고 평생 이명과 살아야 한다는 말에 절망했습니다.\n\n오른쪽 귀에서 밤낮으로 매미 우는 소리와 쇠 긁는 소리가 멈추지 않아 미칠 것 같았습니다. 조용한 방에 있으면 소리가 더 크게 울려 잠을 잘 수 없었고, 어지럼증까지 겹쳐 균형을 잡기 힘들었습니다. 평생 고치지 못한다는 말에 절망했습니다.\n\n해아림에서 자율신경계 미세 혈류 순환 치료를 받고 이명이 거의 들리지 않을 정도로 잦아들었으며 어지럼증도 깨끗이 사라졌습니다. 머리가 맑아지니 정밀한 엔지니어링 업무도 능숙하게 해내고 있습니다. 깊은 감사를 드립니다."
  },
  {
    "id": "pool-rev-25",
    "category": "전신통증/신체화",
    "title": "원인 모를 전신 근육통과 관절 쑤심, 자율신경 치료로 훌훌 털었습니다",
    "author": "40대 직장인 주OO 님",
    "hasTreatment": false,
    "content": "온몸이 쑤시고 아픈데 검사 결과는 정상이라 꾀병 취급을 받았습니다. 아침마다 몸을 일으키기 힘들고 계단을 오르내릴 때마다 뼈마디가 저려와 업무를 쉬어야 할 지경이었습니다.\n\n아침에 일어나면 온몸의 관절과 근육을 몽둥이로 두들겨 맞은 듯 욱신거리고 쑤셨습니다. 류마티스 검사도 정상인데 뼈마디가 시리고 쑤셔 집안일조차 손을 뗐습니다. 진통제를 먹어도 속만 쓰리고 통증은 가라앉지 않아 우울증까지 왔습니다.\n\n해아림에서 신경계 통증 과민 반응을 안정시키는 치료를 받고 묵직했던 몸이 깃털처럼 가벼워졌습니다. 통증이 사라지니 성격도 밝아지고 주말마다 가벼운 등산도 즐깁니다. 새 삶을 얻었습니다."
  },
  {
    "id": "pool-rev-26",
    "category": "기립성/피로",
    "title": "아침에 눈뜨자마자 휘청거리던 기립성 조절 장애 완치 후기",
    "author": "30대 교사 변OO 님",
    "hasTreatment": false,
    "content": "아침 기상 시마다 머리가 핑 돌고 가슴이 울렁거려 출근 준비가 버거웠습니다. 침대에서 일어날 때마다 시야가 흐려져 한동안 앉아 있어야만 움직일 수 있었습니다.\n\n아침에 알람 소리를 듣고 일어나는 순간 머리가 핑 돌고 가슴이 울렁거려 다시 누워야만 했습니다. 혈압이 급격히 떨어지며 몸에 힘이 전혀 들어가지 않아 출근 준비를 할 수 없었습니다. 오전에 특히 심해지는 증상 때문에 직장 생활이 위태로웠습니다.\n\n해아림의 자율신경 혈관 반사 개선 치료를 받고 일어설 때의 흔들림이 싹 사라졌습니다. 혈류가 원활해지니 아침 기상이 가뿐하고 학교 수업에서도 활기차게 아이들을 가르치고 있습니다. 참 고맙습니다."
  },
  {
    "id": "pool-rev-27",
    "category": "가슴두근거림/불안",
    "title": "이유 없이 가슴이 두근거리고 조여오던 신경성 심계항진 완치",
    "author": "20대 취준생 곽OO 님",
    "hasTreatment": false,
    "content": "가만히 있어도 심장이 쿵쿵 뛰어 숨이 찼습니다. 심장내과에서는 이상이 없다는데 맥박이 110회를 넘어 시험공부를 지속하기 힘들었습니다.\n\n특별한 이유 없이도 심장이 분당 100회 이상 요동치며 가슴이 덜컥거렸습니다. 심장내과에서 24시간 홀터 검사를 해도 단순 빈맥일 뿐 이상이 없다고 하여 답답했습니다. 언제 또 심장이 발작처럼 뛸지 몰라 늘 가슴에 손을 얹고 전전긍긍했습니다.\n\n해아림한의원의 심신 안정 케어로 심박수가 차분해지고 불안감이 눈 녹듯 사라졌습니다. 심장이 평온해지니 공부 집중력도 월등히 좋아졌고 마침내 공무원 시험에 합격했습니다. 합격의 기쁨을 해아림과 함께 나눕니다."
  },
  {
    "id": "pool-rev-28",
    "category": "위장장애/식도염",
    "title": "음식이 목에 걸려 내려가지 않던 연하곤란과 명치 통증 완치",
    "author": "50대 주부 홍OO 님",
    "hasTreatment": false,
    "content": "밥을 삼키기 두려울 정도로 식도가 조여오고 명치가 굳었습니다. 물만 마셔도 목에 걸리는 느낌에 체중이 급격히 줄고 영양실조 직전까지 갔습니다.\n\n음식을 삼키려 하면 식도 중간에 딱 걸려서 넘어가지 않고 가슴 한가운데가 뻐근하게 아팠습니다. 물조차 조심스럽게 넘겨야 했고, 음식이 목에 걸릴까 봐 식사 시간마다 긴장감에 온몸이 굳었습니다. 살이 급격히 빠져 기력이 쇠약해졌습니다.\n\n해아림에서 자율신경 위장 운동 케어를 받고 식도 근육이 부드러워져 지금은 어떤 음식이든 맛있게 먹습니다. 식사 시간이 두려움이 아닌 즐거움으로 바뀌었습니다. 건강을 되찾아주셔서 감사합니다."
  },
  {
    "id": "pool-rev-29",
    "category": "수면/악몽",
    "title": "매일 밤 악몽과 가위눌림에 시달리던 수면 장애, 꿀잠 잡니다",
    "author": "30대 회사원 방OO 님",
    "hasTreatment": false,
    "content": "잠만 들면 악몽을 꾸고 가위에 눌려 자는 게 고역이었습니다. 밤새 식은땀을 흘리며 깨어나 심장이 쿵쾅거렸고 하루 종일 극심한 피로에 시달렸습니다.\n\n잠들기만 하면 쫓기거나 떨어지는 악몽을 꾸고 가위에 눌려 식은땀을 흘리며 깨어났습니다. 밤마다 악몽에 시달리니 잠자는 것 자체가 공포스러웠고, 자고 일어나도 뇌가 전혀 쉬지 못해 만성 피로와 두통에 시달렸습니다.\n\n해아림의 뇌신경 이완 치료를 받은 후 깊은 수면 단계로 들어가 악몽 없이 아침까지 푹 잡니다. 수면의 질이 달라지니 피부도 맑아지고 하루 종일 활력이 넘칩니다. 깊이 감사드립니다."
  },
  {
    "id": "pool-rev-30",
    "category": "다한증/손발",
    "title": "손발이 젖어 마우스나 펜을 잡기 힘들던 다한증 치료 완치 후기",
    "author": "20대 프로그래머 양OO 님",
    "hasTreatment": false,
    "content": "손에 땀이 너무 많아 키보드와 마우스가 미끄러졌습니다. 코딩할 때마다 수건을 옆에 두고 닦아야 했고 사람들과 악수하는 것도 늘 피했습니다.\n\n긴장하면 손바닥과 발바닥에서 땀이 비 오듯 쏟아져 서류나 스마트폰을 쥘 수가 없었습니다. 양말이 축축하게 젖어 신발을 벗는 식당에는 가지도 못했습니다. 수술을 고민했지만 부작용이 두려워 망설이던 중 스트레스와 자괴감만 커졌습니다.\n\n해아림에서 교감신경 긴장을 낮추는 치료를 받고 땀이 정상 범위로 조절되어 업무 효율이 크게 높아졌습니다. 이제는 뽀송뽀송한 손으로 편안하게 일하고 대인관계도 훨씬 원활해졌습니다."
  }
];

  // ──────────────────────────────────────────────────────────
  // 2. 스토리지 상태 관리
  // ──────────────────────────────────────────────────────────
  var STATE_KEY = 'healim_auto_reviews_state';

  function getAutoReviewState() {
    try {
      var raw = localStorage.getItem(STATE_KEY);
      if (raw) {
        var s = JSON.parse(raw);
        if (s && typeof s === 'object') return s;
      }
    } catch(e) {}
    
    var now = Date.now();
    var nextTime = calculateNextReviewScheduleTime(new Date(now)).getTime();
    var initial = {
      lastPublishedTime: 0,
      nextScheduledTime: nextTime,
      poolIndex: 0,
      publishedPoolIds: []
    };
    saveAutoReviewState(initial);
    return initial;
  }

  function saveAutoReviewState(state) {
    try {
      localStorage.setItem(STATE_KEY, JSON.stringify(state));
    } catch(e) {}
  }

  /**
   * 4개월당 2~6개 랜덤 주기 계산:
   * 4개월(약 120일)에 2~6개이므로 1편당 20일~55일 간격 (평균 약 30~40일)
   * 랜덤 시간대: 오전 09:00 ~ 오후 20:00 사이 무작위 분/초
   */
  function calculateNextReviewScheduleTime(fromDate) {
    var base = fromDate ? new Date(fromDate) : new Date();
    // 20일 ~ 55일 사이 랜덤 간격
    var minDays = 20;
    var maxDays = 55;
    var randomDays = minDays + Math.floor(Math.random() * (maxDays - minDays + 1));
    
    var next = new Date(base.getTime() + randomDays * 24 * 60 * 60 * 1000);
    var randomHour = 9 + Math.floor(Math.random() * 12); // 09 ~ 20시
    var randomMinute = Math.floor(Math.random() * 60);
    var randomSecond = Math.floor(Math.random() * 60);
    
    next.setHours(randomHour, randomMinute, randomSecond, 0);
    return next;
  }

  function formatScheduleTime(ts) {
    if (!ts) return '미정';
    var d = new Date(ts);
    if (isNaN(d.getTime())) return '미정';
    var yyyy = d.getFullYear();
    var mm = String(d.getMonth() + 1).padStart(2, '0');
    var dd = String(d.getDate()).padStart(2, '0');
    var hh = String(d.getHours()).padStart(2, '0');
    var min = String(d.getMinutes()).padStart(2, '0');
    return yyyy + '.' + mm + '.' + dd + ' ' + hh + ':' + min;
  }

  // ──────────────────────────────────────────────────────────
  // 3. 치료후기 자동 발행 실행 엔진
  // ──────────────────────────────────────────────────────────
  function checkAndRunAutoReviewPublish(isManual) {
    var state = getAutoReviewState();
    var now = Date.now();
    var shouldPublish = isManual || (state.nextScheduledTime && now >= state.nextScheduledTime);

    if (shouldPublish) {
      var pool = window.autoReviewContentPool || [];
      var poolLength = pool.length;
      if (poolLength === 0) return null;

      // 이미 발행된 글 목록 확인
      var publishedSet = {};
      (state.publishedPoolIds || []).forEach(function(pid) { publishedSet[pid] = true; });

      var chosenIndex = -1;
      for (var i = 0; i < poolLength; i++) {
        var idx = (state.poolIndex + i) % poolLength;
        var cand = pool[idx];
        if (!publishedSet[cand.id]) {
          chosenIndex = idx;
          break;
        }
      }

      // 모든 풀이 소진된 경우 풀 리셋
      if (chosenIndex === -1) {
        state.publishedPoolIds = [];
        chosenIndex = state.poolIndex % poolLength;
      }

      var poolItem = pool[chosenIndex];
      var pubTimestamp = isManual ? now : (state.nextScheduledTime || now);
      var pubDateObj = new Date(pubTimestamp);
      var dateStr = pubDateObj.getFullYear() + '.' + String(pubDateObj.getMonth() + 1).padStart(2, '0') + '.' + String(pubDateObj.getDate()).padStart(2, '0');

      var imgIdx = (chosenIndex % 6) + 1;
      var newPost = {
        id: 'reviews-' + pubTimestamp,
        category: poolItem.category || '치료후기',
        author: poolItem.author || '30대 직장인 김OO 님',
        date: dateStr,
        views: Math.floor(150 + Math.random() * 50),
        image: '/images/reviews/review_' + imgIdx + '.jpg',
        title: poolItem.title,
        content: poolItem.content,
        hasTreatment: !!poolItem.hasTreatment,
        treatmentType: poolItem.treatmentType || null,
        isCustom: true,
        isAutoPublished: true,
        createdAt: pubTimestamp,
        updatedAt: pubTimestamp
      };

      // 스토리지 및 IndexedDB 영구 반영
      try {
        var revList = [];
        var rawB = localStorage.getItem('healim_board_reviews');
        if (rawB) revList = JSON.parse(rawB) || [];
        revList.unshift(newPost);
        localStorage.setItem('healim_board_reviews', JSON.stringify(revList));

        var vaultList = [];
        var rawV = localStorage.getItem('healim_vault_all_posts_reviews');
        if (rawV) vaultList = JSON.parse(rawV) || [];
        vaultList.unshift(newPost);
        localStorage.setItem('healim_vault_all_posts_reviews', JSON.stringify(vaultList));

        var customList = [];
        var rawC = localStorage.getItem('healim_custom_reviews_posts');
        if (rawC) customList = JSON.parse(rawC) || [];
        customList.unshift(newPost);
        localStorage.setItem('healim_custom_reviews_posts', JSON.stringify(customList));

        if (typeof window !== 'undefined' && window.HealimPermanentDB && window.HealimPermanentDB.saveVault) {
          window.HealimPermanentDB.saveVault('reviews', vaultList);
        }
      } catch(e) {}

      // 상태 업데이트
      state.lastPublishedTime = pubTimestamp;
      if (state.publishedPoolIds.indexOf(poolItem.id) === -1) {
        state.publishedPoolIds.push(poolItem.id);
      }
      state.poolIndex = (chosenIndex + 1) % poolLength;
      var nextDate = calculateNextReviewScheduleTime(new Date(pubTimestamp));
      state.nextScheduledTime = nextDate.getTime();
      saveAutoReviewState(state);

      // 이벤트 전파
      try {
        window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: 'reviews', action: 'auto-publish', post: newPost } }));
        if (typeof window.broadcastHealimCommunityUpdate === 'function') {
          window.broadcastHealimCommunityUpdate('reviews', 'auto-publish');
        }
      } catch(e) {}

      updateAutoReviewStatusUI(state);
      return newPost;
    }

    updateAutoReviewStatusUI(state);
    return null;
  }

  function updateAutoReviewStatusUI(state) {
    var el = document.getElementById('autoReviewNextScheduleText');
    if (el && state) {
      el.textContent = '다음 예정: ' + formatScheduleTime(state.nextScheduledTime);
    }
  }

  // 전역 API 노출
  window.checkAndRunAutoReviewPublish = checkAndRunAutoReviewPublish;
  window.getAutoReviewState = getAutoReviewState;
  window.calculateNextReviewScheduleTime = calculateNextReviewScheduleTime;
  window.formatReviewScheduleTime = formatScheduleTime;

  window.triggerAutoReviewPublishManual = function() {
    var isHealimAdmin = false;
    if (typeof window.isHealimSuperAdmin === 'function') {
      isHealimAdmin = window.isHealimSuperAdmin();
    }
    if (!isHealimAdmin) {
      try {
        var rawUser = localStorage.getItem('healim_auth_user');
        if (rawUser) {
          var u = JSON.parse(rawUser);
          if (u && (u.uid === 'healim0071' || u.id === 'healim0071' || (u.role === 'admin' && (u.uid === 'healim0071' || u.id === 'healim0071')) || u.grade === 'superadmin' || u.role === 'superadmin')) {
            isHealimAdmin = true;
          }
        }
      } catch(e) {}
    }
    if (!isHealimAdmin) {
      alert('관리자(healim0071)로 로그인한 경우에만 수동 즉시 발행이 가능합니다.');
      return;
    }

    var published = checkAndRunAutoReviewPublish(true);
    if (published) {
      alert('⚡ [자율신경 치료후기 신규 글 자동 발행 완료]\n\n' +
            '제목: ' + published.title + '\n' +
            '작성자: ' + published.author + '\n' +
            '발행일자: ' + published.date + '\n\n' +
            '목록 최상단에 성공적으로 발행되었습니다.');
      if (typeof renderReviewsList === 'function') renderReviewsList();
      if (typeof syncBottomCommunity === 'function') syncBottomCommunity();
    }
  };

  // DOM 로드 시 자동 검사
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      checkAndRunAutoReviewPublish(false);
    });
  } else {
    checkAndRunAutoReviewPublish(false);
  }

})();
