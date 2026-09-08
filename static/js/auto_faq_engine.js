/**
 * auto_faq_engine.js
 * 해아림한의원 자율신경실조증 FAQ 자동 발행 엔진 & 12대 임상 콘텐츠 풀
 * 
 * [요구사항 명세]
 * 1. 질문: 자율신경실조증/이상증상 다빈도 환자 질문 순환
 * 2. 분량: 질문에 대한 답변 1,000자 내외
 * 3. 구성: 상단 썸네일 사진 + 본문 1000자 내외 답변 + 하단 3대 링크(줄바꿔서 1줄씩 띄움)
 *    - [자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)
 *    - [자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)
 *    - [전국 지점 안내](https://www.healim.com)
 * 4. 주기: 매주 2~3개 글, 오전 8시 ~ 11시 사이 랜덤 시간 자동 발행
 */

(function() {
  'use strict';

  // ──────────────────────────────────────────────────────────
  // 1. 자율신경실조증 환자 다빈도 질문 12대 고품질 콘텐츠 풀 (Content Pool)
  // ──────────────────────────────────────────────────────────
  window.autoFaqContentPool = [
    {
      id: 'pool-faq-1',
      title: '병원에서 온갖 검사를 다 받아도 정상이라는데, 왜 어지럽고 가슴이 답답할까요? 자율신경실조증 검사로 알 수 있나요?',
      image: '/images/faq/faq_1_exam.svg',
      summary: '구조적 파괴가 아닌 기능적 신경망 불균형을 찾는 HRV 심박변이도 및 뇌기능 정밀 검사의 원리와 필요성',
      content: `병원에서 위내시경, 심전도, 뇌 MRI, 혈액검사까지 모두 받았는데도 "아무 이상이 없으니 신경성입니다"라는 말만 듣고 답답해하시는 분들이 많습니다. 몸은 숨이 차고 어지러우며 가슴이 쿵쾅거리는데, 검사 기계에는 정상으로 나오는 이유는 무엇일까요?

일반 병원 검사는 장기의 구조적 파괴, 종양, 궤양, 뇌출혈 같은 '기질적 손상'을 찾는 검사입니다. 반면 자율신경실조증은 장기 자체의 고장이 아니라, 장기들의 속도와 균형을 조절하는 **'자율신경 조절망의 기능적 오작동'**입니다. 마치 최고급 자동차의 엔진과 부품은 멀쩡한데, 엑셀러레이터(교감신경)와 브레이크(부교감신경)를 조절하는 전자제어장치(ECU) 신호체계에 에러가 발생한 것과 같습니다.

자율신경계는 우리가 의식하지 않아도 호흡, 혈압, 체온, 심장박동, 소화, 수면을 24시간 자율적으로 통제합니다. 만성 스트레스, 수면 부족, 과로, 경추 긴장이 누적되면 교감신경은 과도하게 흥분하고 부교감신경은 바닥으로 떨어지게 됩니다. 그 결과 심장은 필요 이상으로 빠르게 뛰고, 뇌로 가는 미세 혈류가 일시적으로 줄어들며 핑 도는 어지럼증과 흉부 압박감이 나타나게 됩니다.

해아림한의원에서는 이러한 기능적 불균형을 객관적으로 시각화하기 위해 **HRV(심박변이도) 검사와 정밀 뇌기능 뇌파(QEEG) 검사**를 시행합니다. 심장 박동 사이의 미세한 시간 간격 변화를 분석하여 교감신경과 부교감신경의 활성도, 신체 피로도, 심신 활력도를 측정하고, 뇌파 분석을 통해 중추신경계의 스트레스 저항도와 각성 수준을 파악합니다. 검사상 보이지 않던 증상의 실체를 객관적인 데이터로 확인하고, 과각성된 뇌신경을 안정시키며 약화된 부교감신경을 회복시키는 1:1 맞춤 한약과 두개천골요법(CST)을 통해 신체 본래의 자가 회복력을 되찾아 드립니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-2',
      title: '자율신경실조증과 공황장애의 차이점은 무엇인가요? 가슴 두근거림과 과호흡이 오면 공황인 줄 알았어요.',
      image: '/images/faq/faq_2_panic.svg',
      summary: '돌발적 급성 공포 발작과 24시간 잔잔하게 지속되는 만성 신체화 증상의 교감신경 감별 진단',
      content: `가슴이 갑자기 두근거리고 숨이 가빠지면 많은 분들이 "내가 공황장애에 걸린 것이 아닐까?" 하고 큰 불안감에 휩싸이게 됩니다. 실제로 자율신경실조증과 공황장애는 교감신경이 과도하게 흥분한다는 뿌리가 같아 증상이 상당 부분 겹치지만, 임상적인 양상과 뇌신경 반응 기전에는 명확한 차이가 존재합니다.

공황장애의 핵심 특징은 **'급격한 발작(Panic Attack)'과 '죽을 것 같은 극심한 공포감'**입니다. 아무런 신체적 자극이나 이유가 없음에도 불구하고 갑자기 심박수가 분당 120회 이상 치솟고, 사지가 떨리며, 금방이라도 숨이 멎어 쓰러질 것 같은 패닉 상태가 발생합니다. 이러한 발작은 대개 10~30분 이내에 최고조에 달했다가 서서히 가라앉는 파동형 양상을 보이며, 이후 특정 장소(지하철, 엘리베이터 등)를 두려워하는 예기불안이 동반됩니다.

반면 자율신경실조증은 특정 공포 반응 없이도 **'하루 종일 잔잔하고 불쾌하게 지속되는 복합 신체 증상'**이 주를 이룹니다. 심장이 덜컥거리거나 두근거림, 머리가 맑지 않은 멍함, 수시로 나타나는 어지럼증, 식사 후 소화불량, 손발 차가움과 얼굴의 상열감, 야간 불면 등이 24시간 일상 전반을 괴롭힙니다. 즉, 공황장애가 뇌 편도체의 급격한 오경보 폭발이라면, 자율신경실조증은 자율신경계 조절 시스템의 항상성이 전반적으로 무너져 생체 균형이 깨진 만성 피로 상태입니다.

임상에서는 자율신경실조증을 제때 치료하지 않고 방치하여 신경계가 극도로 쇠약해진 끝에 공황발작으로 악화되는 경우를 자주 보게 됩니다. 해아림한의원에서는 뇌기능 검사와 자율신경 균형 검사를 통해 환자분의 증상이 뇌 편도체의 과민 반응인지, 말초 자율신경망의 조절 장애인지를 정밀하게 감별합니다. 과항진된 교감신경을 안정시키고 뇌간의 긴장을 이완시키는 맞춤 한약과 뇌안정 훈련을 병행하여 공황과 자율신경 이상을 근본적으로 다스립니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-3',
      title: '손발이 얼음장처럼 차가운데 얼굴로는 열이 훅 올라옵니다. 상열하한도 자율신경계 이상증상인가요?',
      image: '/images/faq/faq_3_thermal.svg',
      summary: '상열하한(上熱下寒)의 자율신경 혈관 운동 조절 장애 메커니즘과 수승화강 정상화 처방',
      content: `"발은 너무 시려워서 양말을 두 켤레씩 신고 자는데, 얼굴과 머리로는 열이 훅 달아올라 창문을 열어야 해요." 이처럼 전신의 체온이 정반대로 나뉘는 **상열하한(上熱下寒)** 증상은 자율신경실조증 환자분들이 가장 빈번하게 호소하시는 대표적인 혈관 운동 조절 장애입니다.

인체는 자율신경계의 교감신경과 부교감신경이 혈관의 수축과 이완을 정밀하게 조절함으로써 36.5도의 일정한 체온을 전신에 골고루 분배합니다. 그러나 만성 스트레스, 불안, 억울된 정서(화병), 호르몬 변화 등으로 교감신경이 과항진되면, 신체는 비상 상태로 인식하여 혈액을 심장과 뇌 같은 중추 장기로만 집중시키고 말초 혈관을 강하게 수축시킵니다. 그 결과 손가락, 발가락 등 말초 부위에는 따뜻한 혈액이 도달하지 못해 얼음장처럼 차가워지고, 반대로 상체와 두면부로는 혈류가 울혈되어 열감이 폭발하게 됩니다.

한의학에서는 이를 **'수승화강(水升火降)의 실조'**라고 부릅니다. 차가운 신장의 기운(水)은 위로 올라가 뇌를 시원하게 해주고, 따뜻한 심장의 기운(火)은 아래로 내려가 손발과 아랫배를 덥혀주어야 건강한 상태인데, 신경계의 불통으로 인해 불기운은 위로만 치솟고 찬 기운은 아래에만 정체된 상태입니다. 이때 열감을 억지로 내리기 위해 찬물을 마시거나 에어컨 바람을 쐬면, 상체 열은 잠시 식을지 몰라도 위장과 손발이 더 차가워져 소화불량과 만성 피로가 심해지는 악순환에 빠집니다.

해아림한의원에서는 흉부에 뭉친 화기(火氣)를 맑게 흩뜨려 두통과 상열감을 내리고, 차가워진 하초와 손발의 미세 순환을 따뜻하게 덥혀주는 '온경회양(溫經回陽)' 한약 처방을 적용합니다. 척추 주변 자율신경절을 자극하는 침구 치료와 경추 이완 추나요법을 통해 자율신경의 미세 혈관 수축 반사를 정상화함으로써, 위아래의 온도 균형을 자연스럽게 복원합니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-4',
      title: '식사만 하면 소화가 안 되고 명치가 꽉 막힌 듯 답답합니다. 내시경은 깨끗한데 자율신경 문제일 수 있나요?',
      image: '/images/faq/faq_4_vagus.svg',
      summary: '뇌-장-신경 축(Gut-Brain Axis)과 제10뇌신경 미주신경 마비로 인한 신경성 기능성 소화불량',
      content: `소화제를 매일 달고 살고, 큰 병원에서 위내시경과 복부 CT를 찍어도 "위벽이 아주 깨끗하고 위염도 거의 없다"는 진단을 받으셨나요? 그럼에도 불구하고 식사만 하면 밥알이 명치에 돌처럼 얹힌 것 같고, 속이 더부룩하며 헛트림이 나오는 증상은 전형적인 **'뇌-장-신경 축(Gut-Brain Axis)의 자율신경 실조'**에 해당합니다.

위장은 제10뇌신경인 **'미주신경(Vagus Nerve, 부교감신경)'**의 지배를 직접적으로 받습니다. 우리가 편안하게 이완된 상태에서 식사를 하면 부교감신경이 활성화되어 위산과 소화 효소가 분비되고, 위장 평활근이 리드미컬하게 수축 운동을 하여 음식을 잘게 부숩니다. 하지만 식사 전후로 신경을 쓰거나, 만성 스트레스 상태에 놓여 있으면 교감신경이 긴장하여 위장으로 가야 할 혈류를 차단하고 위장관 근육을 마비시킵니다. 

마치 호랑이를 마주쳤을 때 소화가 일시 정지되는 것과 동일한 원리입니다. 자율신경실조증 환자분들의 위장은 기질적 염증이 없더라도, 신경 신호가 전달되지 않아 음식이 몇 시간째 위장 속에 머무르는 위무력증, 위하수, 가스 참, 잦은 체기, 장의 과민성 설사나 변비로 이어집니다. 위장약이나 제산제는 위산 분비만 억제할 뿐 마비된 신경망을 깨우지 못하므로 복용할 때만 잠시 덜할 뿐 증상이 끊임없이 재발합니다.

해아림한의원에서는 뇌에서 장으로 이어지는 미주신경의 활성도를 회복시키는 치료에 집중합니다. 뇌간의 긴장을 풀고 위장관의 기혈 순환을 촉진하는 소화기 자율신경 맞춤 탕약을 처방하며, 흉추와 복부 경혈을 자극하는 약침 치료를 통해 멈춰 있던 위장 연동운동을 재가동시킵니다. 뇌가 편안해지면 위장관의 굳은 응어리가 풀리며 자연스러운 소화 흡수력이 살아나게 됩니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-5',
      title: '밤에 잠을 깊이 못 자고 자다 깨면 가슴이 심하게 뜁니다. 수면장애와 교감신경 과항진은 어떤 관계인가요?',
      image: '/images/faq/faq_5_sleep.svg',
      summary: '야간 교감신경 각성 상태와 수면 진입 장애, 서파 수면 유도 및 뇌간 망상체 안정화 기전',
      content: `낮에는 피로에 지쳐 쓰러질 것 같다가도, 밤 11시만 되어 침대에 누우면 뇌가 말똥말똥해지고 심장이 쿵쾅거려 새벽 3~4시까지 잠을 이루지 못하는 고통을 겪고 계신가요? 겨우 잠들어도 1~2시간마다 깜짝 놀라 깨고 가슴이 심하게 뛴다면, 이는 단순한 불면증이 아니라 **야간 교감신경의 과항진 상태** 때문입니다.

정상적인 인체는 해가 지고 밤이 되면 교감신경이 서서히 꺼지고(OFF), 휴식을 주관하는 부교감신경이 켜지면서(ON) 심박수와 혈압, 심부 체온이 자연스럽게 내려갑니다. 이때 뇌의 송과체에서 수면 호르몬인 멜라토닌이 원활하게 분비되어 깊은 잠(서파 수면)으로 진입하게 됩니다. 그러나 자율신경실조증 환자의 뇌간 망상체는 밤이 되어도 "지금 위험한 상황이니 깨어 있어야 해!"라는 잘못된 각성 신호를 끊임없이 발송합니다.

그 결과 잠자리에 누웠을 때 귀에서 심장 박동 소리가 쿵쾅쿵쾅 들리고, 사소한 소리에도 신경이 곤두서며, 악몽과 식은땀을 동반한 천열(얕은 잠)을 자게 됩니다. 수면제나 수면유도제는 뇌신경을 억지로 기절시켜 잠들게 할 뿐, 깊은 단계의 뇌파 회복을 유도하지 못해 아침에 일어나도 머리가 무겁고 숙취 같은 피로가 남습니다. 장기 복용 시 약물 내성과 의존성이 발생하는 문제도 안고 있습니다.

해아림한의원에서는 강제 진정이 아닌, 뇌 스스로 자연스러운 수면 리듬을 복원하도록 돕습니다. 심장의 열을 식히고 뇌파의 안정파(알파파, 세타파)를 유도하는 산조인, 백자인, 용골 등의 안신(安神) 한약재를 체질에 맞게 처방하며, 횡격막 이완 호흡법과 바이오피드백 훈련을 통해 잠들기 전 뇌신경 스위치를 온전히 끌 수 있도록 체계적으로 치료합니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-6',
      title: '기립성 어지럼증과 빈맥(POTS)으로 앉았다 일어설 때 핑 돌고 눈앞이 캄캄해집니다. 한방 치료로 좋아질 수 있나요?',
      image: '/images/faq/faq_6_pots.svg',
      summary: '체위성 기립빈맥 증후군(POTS)의 혈관 수축 자율신경 반사 지연과 뇌 혈류 강화 치료',
      content: `의자에 앉아 있거나 누워 있다가 일어설 때, 순간적으로 머리가 핑 돌면서 눈앞이 하얘지거나 캄캄해지고, 심장이 미친 듯이 쿵쾅거리는 증상을 겪고 계신가요? 이러한 증상을 **'체위성 기립 빈맥 증후군(POTS, Postural Orthostatic Tachycardia Syndrome)'** 또는 **'기립성 자율신경 조절 장애'**라고 부릅니다.

사람이 일어설 때 중력에 의해 약 500~800ml의 혈액이 하체와 복부로 순간 쏠리게 됩니다. 건강한 자율신경계를 가진 사람은 즉각 교감신경 반사가 작동하여 하체 혈관을 꽉 수축시켜 피를 뇌와 심장으로 다시 밀어 올려줍니다. 그러나 자율신경 조절 기능이 떨어진 환자는 혈관 수축 신호가 지연되거나 약해져, 뇌로 가는 혈류량이 일시적으로 급감합니다. 이때 뇌는 산소 부족에 빠져 어지럼증과 시야 흐림을 느끼게 되고, 심장은 뇌에 피를 보내기 위해 보상적으로 맥박을 분당 30회 이상 급격하게 올리면서 심한 가슴 두근거림이 발생합니다.

이러한 기립성 어지럼증은 이비인후과에서 귀의 전정기관이나 이석증 검사를 받아도 아무런 이상이 없다고 나오는 경우가 대다수입니다. 원인이 귀가 아니라 뇌 혈류를 조절하는 혈관 운동 신경망에 있기 때문입니다. 수분을 많이 마시고 압박 스타킹을 신는 대증요법만으로는 늘어진 자율신경 반사 속도를 되돌리기 어렵습니다.

해아림한의원에서는 심장과 혈관의 펌프력을 강화하는 '보중익기(補中益氣)' 및 승양(升陽) 처방을 통해 하체에 정체된 기혈을 두뇌로 힘차게 끌어올려 줍니다. 자율신경의 압력 수용체 반사를 자극하는 척추 신경 침구 치료와 경추 교정을 병행하여, 체위 변화에도 혈압과 맥박이 흔들리지 않고 일정한 뇌 혈류를 유지할 수 있도록 치료합니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-7',
      title: '만성 피로와 브레인포그(머리가 멍하고 집중이 안 됨)가 심합니다. 이것도 부교감신경 저하 때문인가요?',
      image: '/images/faq/faq_7_brainfog.svg',
      summary: '신경계 에너지 고갈과 부교감신경 저하, 뇌 림프 순환 및 브레인포그 회복 솔루션',
      content: `"주말 내내 하루 종일 누워 자도 피로가 전혀 풀리지 않아요.", "머릿속에 안개가 낀 것처럼 멍하고, 책이나 업무 내용을 읽어도 머리에 들어오지 않아요." 이처럼 맑지 않은 뇌 상태를 일컫는 **'브레인포그(Brain Fog)'**와 지독한 만성 피로는 자율신경계의 에너지 발전소가 고갈되었음을 알리는 명확한 신호입니다.

많은 분들이 피로의 원인을 단순히 간 기능 저하나 근육 피로로 생각하지만, 혈액검사에서 간수치가 정상임에도 극심한 피로를 느낀다면 범인은 **'신경계의 만성 탈진(Autonomic Burnout)'**입니다. 자율신경실조증으로 교감신경이 쉬지 않고 과항진되어 있으면 신체는 24시간 내내 풀가동되는 엔진처럼 에너지를 과도하게 소모합니다. 반면 세포를 재생하고 노폐물을 청소해야 하는 부교감신경은 억제되어 충전이 전혀 이루어지지 않는 방전 상태가 지속됩니다.

특히 수면 중에 작동해야 하는 뇌 림프계(글림프 시스템)의 순환이 저하되면서, 낮 동안 뇌세포에서 생성된 피로 유발 대사 노폐물이 밖으로 배출되지 못하고 뇌 조직에 정체됩니다. 이로 인해 뇌세포의 시냅스 연결이 둔해져 집중력 감퇴, 건망증, 단어가 바로 떠오르지 않는 인지 저하가 나타납니다. 여기에 부신 피질 호르몬(코르티솔)의 분비 리듬까지 무너지면서 오후만 되면 극심한 무기력증에 빠지게 됩니다.

해아림한의원에서는 뇌신경 피로도를 정밀 뇌파 검사로 측정한 후, 뇌 혈류 순환을 촉진하고 신경세포의 미토콘드리아 에너지를 보충하는 공진단 및 뇌기능 활성 맞춤 한약을 처방합니다. 머리로 맑은 혈액이 순환하고 부교감신경의 충전 기능이 정상화되면, 안개가 걷히듯 머리가 개운해지며 신체 활력이 온전히 회복됩니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-8',
      title: '신경안정제(자낙스, 리보트릴 등)를 수개월째 복용 중인데 끊을 수 있을까요? 한약과 병행 복용이 가능한가요?',
      image: '/images/faq/faq_8_tapering.svg',
      summary: '양약 갑작스러운 중단의 반동 현상 위험과 1~2시간 분리 복용 및 점진적 테이퍼링(감량) 플랜',
      content: `가슴 두근거림이나 불안증으로 신경정신과나 내과에서 알프라졸람(자낙스), 클로나제팜(리보트릴), 로라제팜(아티반) 같은 신경안정제(벤조디아제핀계)나 항우울제를 처방받아 복용 중이신 환자분들의 가장 큰 고민은 "이 약을 평생 먹어야 하나? 내성이 생기면 어쩌지?"라는 두려움입니다.

가장 먼저 당부드리고 싶은 점은, **현재 복용 중인 양약을 임의로 한 번에 갑자기 끊으시면 절대로 안 된다는 것**입니다. 신경안정제는 뇌신경 억제 수용체(GABA)에 강제로 결합하여 신경을 가라앉히는 약물이므로, 갑자기 중단할 경우 신경계가 이전보다 훨씬 더 극심하게 흥분하는 **'반동 현상(Rebound Effect)'**이 발생하여 불면, 공황, 심박수 급등이 찾아올 수 있습니다.

따라서 안전한 해결책은 **'한방 치료를 병행하면서 자율신경 자가 조절력을 먼저 키운 후, 의료진과 상의하여 양약을 서서히 줄여나가는 감량 플랜(Tapering)'**을 진행하는 것입니다. 해아림한의원 맞춤 한약과 양약은 흡수 기전이 다르므로, 복용 시간만 1~2시간 분리하시면 상호작용 없이 매우 안전하게 병행할 수 있습니다. 

치료가 진행되면서 한약이 과흥분된 교감신경을 안정시키고 약해진 뇌신경을 보강해주면, 환자 스스로 "어? 오늘은 약을 안 먹었는데도 가슴이 안 뛰고 편안하네"라는 순간을 맞이하게 됩니다. 이때부터 양약 복용량을 1/4알, 1/2알씩 2~4주 간격으로 점진적으로 줄여나가며, 최종적으로는 어떤 약물에도 의존하지 않고 자신의 신경계 힘만으로 건강을 유지할 수 있도록 안전하게 이끌어 드립니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-9',
      title: '목과 어깨가 돌처럼 굳고 뒤통수가 찌릿하면서 이명이 들립니다. 경추와 자율신경이 연결되어 있나요?',
      image: '/images/faq/faq_9_cst.svg',
      summary: '후두하근 긴장과 제10뇌신경(미주신경) 압박 메커니즘, 두개천골요법(CST)과 경추 추나 치료',
      content: `"목과 어깨가 항상 돌덩이처럼 굳어 있고, 뒤통수가 찌릿찌릿 쥐어짜듯 아프면서 귀에서 삐- 하는 이명 소리가 들려요." 자율신경실조증을 앓는 분들 중 80% 이상이 만성적인 경추 긴장과 후두부 통증, 어지럼증, 이명을 함께 호소하십니다. 척추의 뼈와 신경계는 결코 분리되어 있지 않습니다.

해부학적으로 목뼈(경추 1번, 2번)와 후두골 사이의 좁은 공간(경정맥공)으로는 뇌에서 전신으로 뻗어나가는 핵심 자율신경인 **제10뇌신경 '미주신경(Vagus Nerve)'과 부신경, 설인신경**이 통과합니다. 또한 목 주변 척추 양옆에는 교감신경절이 사슬처럼 길게 늘어서 있습니다. 컴퓨터, 스마트폰 사용으로 거북목이나 일자목이 되고 후두하근이 만성적으로 경직되면, 이 좁은 신경 통로가 물리적으로 강하게 압박을 받게 됩니다.

신경 통로가 압박되면 뇌척수액의 원활한 순환이 방해를 받아 뇌압이 오르고, 미주신경의 억제 신호가 차단되어 부교감신경이 마비됩니다. 동시에 척추동맥이 눌려 내이(달팽이관)로 가는 혈류가 부족해지면서 이명과 어지럼증, 편두통이 끊이지 않게 됩니다. 마사지나 물리치료로 목 근육만 일시적으로 풀어주어서는 깊은 층의 신경 압박이 해소되지 않습니다.

해아림한의원에서는 **두개천골요법(CST, Craniosacral Therapy)**과 특화 경추 추나요법을 통해 5g의 섬세하고 부드러운 수기 교정으로 후두골과 경추 1·2번의 틀어짐을 바로잡습니다. 압박받던 미주신경의 통로가 시원하게 열리고 뇌척수액 순환이 정상화되면, 꽉 막혀 있던 뇌압이 내려가면서 지독하던 두통, 이명, 어깨 결림과 함께 전신 자율신경계가 깊은 이완 상태를 되찾게 됩니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-10',
      title: '스트레스를 조금만 받아도 식은땀이 비 오듯 쏟아지고 손이 떨립니다. 과민한 신경계를 안정시키는 원리는 무엇인가요?',
      image: '/images/faq/faq_10_sweat.svg',
      summary: '투쟁-도피(Fight-or-Flight) 과민 반응 억제와 횡격막 자율신경 호흡법 및 한방 신경 안정 기전',
      content: `중요한 미팅에 들어가거나, 사람들 앞에서 말을 할 때, 혹은 일상에서 사소한 긴장 상황만 마주해도 손바닥과 이마에서 식은땀이 비 오듯 쏟아지고 손이 덜덜 떨려 찻잔을 들지 못하시는 분들이 계십니다. 심할 때는 숨이 가빠지는 과호흡 증상까지 나타나 일상생활과 대인관계에 큰 지장을 초래합니다.

이러한 신체 반응은 우리 몸의 원시적인 방어 기제인 **'투쟁-도피(Fight-or-Flight) 반응'**이 과도하게 오작동하기 때문입니다. 원래 이 반응은 맹수를 만났을 때 살아남기 위해 교감신경이 순간적으로 아드레날린을 뿜어내어 혈압을 올리고, 땀을 흘려 체온을 식히며, 근육을 긴장시키는 생존 시스템입니다. 그러나 자율신경실조증 환자는 뇌의 공포 중추인 편도체의 역치가 지나치게 낮아져 있어, 전혀 생명의 위협이 아닌 일상적인 스트레스에도 교감신경의 사이렌을 최고 출력으로 울려버립니다.

땀샘을 지배하는 교감신경 말단에서 아세틸콜린과 노르아드레날린이 쏟아져 나오며 다한증과 손떨림이 발생하고, 흉식 호흡으로 인해 혈중 이산화탄소 농도가 급격히 떨어지면서 손발 저림과 어지럼증이 연쇄적으로 촉발됩니다. 환자 본인은 "마음을 편하게 먹어야지" 하고 다짐해도, 자율신경계는 불수의 신경(의지로 제어할 수 없는 신경)이므로 의지만으로는 이 반응을 멈출 수 없습니다.

해아림한의원에서는 과민해진 뇌간과 편도체의 흥분성을 낮추는 시호, 황련, 용골, 모려 등의 청열진정(淸熱鎭靜) 한약을 처방하여 신경계의 과도한 사이렌을 끕니다. 이와 함께 횡격막을 움직여 부교감신경을 직접 자극하는 복식 호흡 훈련과 뉴로피드백 치료를 병행함으로써, 어떤 긴장 상황에서도 신경계가 유연하게 중심을 잡도록 훈련합니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-11',
      title: '자율신경실조증 치료 기간은 보통 얼마나 걸리나요? 치료 중 호전과 악화가 반복되는데 왜 그런가요?',
      image: '/images/faq/faq_11_period.svg',
      summary: '치료 기간과 시소 반응(호전과 악화의 파동) 극복 과정 및 근본적인 항상성 완성 단계',
      content: `"한약을 먹고 2주 동안은 가슴도 안 뛰고 잠도 잘 자서 다 나은 줄 알았는데, 어제 잠을 좀 설쳤더니 다시 어지럽고 두근거려요. 치료가 잘못된 건가요?" 자율신경 치료를 시작하신 환자분들께서 가장 많이 불안해하시는 대목 중 하나입니다. 결론부터 말씀드리면, 이는 매우 정상적인 회복 과정인 **'시소 반응(Seesaw Phenomenon)'**입니다.

자율신경계의 회복 곡선은 매일매일 직선으로 좋아지는 것이 아니라, 파동(Wave)을 그리며 점진적으로 우상향합니다. 오랜 기간 균형이 깨져 있던 교감신경과 부교감신경의 시소가 안정을 찾아가는 과정에서 날씨 변화, 수면 상태, 직장 스트레스에 따라 일시적으로 증상이 다시 올라오는 기복을 겪게 됩니다. 중요한 것은 호전과 악화의 폭이 점점 줄어들면서, 과거 10만큼 힘들었던 증상의 강도가 7, 5, 2로 점차 잦아든다는 점입니다.

치료 기간은 환자분의 유병 기간, 체질적 스트레스 저항도, 신경안정제 복용 여부에 따라 차이가 있으나, **일반적으로 1~3개월의 집중 치료 기간**을 거칩니다.
1. **1~4주 차 (급성 증상 진정기)**: 극심한 가슴 두근거림, 급격한 어지럼증, 과호흡, 불안 등의 신체적 공포 증상이 현저히 줄어듭니다.
2. **2~3개월 차 (기능적 균형 복원기)**: 야간 수면 리듬이 깊어지고, 만성 소화불량과 상열하한이 개선되며, 일상생활의 활력이 정상으로 돌아옵니다.
3. **치료 종료 단계 (자가 조절력 완성기)**: 외부 스트레스를 받아도 신체가 스스로 균형을 바로잡는 항상성을 완성하여 치료 종료 후에도 재발하지 않도록 사후 관리를 진행합니다.

치료 중 증상의 작은 기복에 일희일비하여 조급해하지 마시고, 해아림 의료진과 정기적인 HRV 점검을 통해 객관적인 신경계 호전 수치를 확인하며 꾸준히 치료받으시는 것이 완치로 가는 가장 빠른 길입니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    },
    {
      id: 'pool-faq-12',
      title: '자율신경실조증에 커피(카페인)나 고강도 운동이 독이 된다고 하던데, 일상 생활관리는 어떻게 해야 하나요?',
      image: '/images/faq/faq_12_lifestyle.svg',
      summary: '치료 효과를 2배로 극대화하는 자율신경 3대 필수 생활 수칙과 일상 케어 가이드',
      content: `자율신경계 치료는 한의원에서의 맞춤 한약과 침구 치료가 절반이라면, 환자분께서 일상에서 실천하시는 생활습관 관리가 나머지 절반을 완성합니다. 잘못된 사소한 습관 하나가 치료 효과를 반감시킬 수 있으므로, 다음의 핵심 수칙들을 반드시 기억해 주셔야 합니다.

첫째, **오후 2시 이후 카페인(커피, 녹차, 에너지음료)을 철저히 차단**해야 합니다. 자율신경실조증 환자는 교감신경이 이미 임계치까지 흥분되어 있는 상태입니다. 여기에 카페인이 들어가면 중추신경계의 아데노신 수용체를 차단하여 강제 각성을 유발하고, 심장 박동수를 급증시켜 가슴 두근거림과 불면증을 직접적으로 악화시킵니다. "저는 커피 마셔도 잠 잘 자요"라고 하시는 분들도 수면다원검사를 해보면 깊은 서파 수면(3단계 수면)에 전혀 들어가지 못합니다.

둘째, **땀을 뻘뻘 흘리는 고강도 유산소나 무거운 웨이트 트레이닝을 피해야** 합니다. 체력을 기르겠다고 헬스장에서 무리하게 운동을 하면, 고갈된 신경계에 과부하가 걸려 운동 후 2~3일간 극심한 탈진과 어지럼증(자율신경 쇼크)에 빠지게 됩니다. 대신 부교감신경을 부드럽게 활성화하는 가벼운 평지 산책(하루 30분), 온수 족욕, 맨손 스트레칭 위주로 시작하셔야 합니다.

셋째, **아침 기상 직후 햇볕 15분 쬐기와 횡격막 호흡(4-7-8 호흡법)**입니다. 아침 햇볕은 눈의 망막을 통해 시상하부에 신호를 보내 생체 시계를 리셋하고, 15시간 뒤 밤에 멜라토닌이 분비되도록 예약합니다. 또한 숨을 4초간 코로 들이마시고, 7초간 멈춘 뒤, 8초간 입으로 천천히 내쉬는 4-7-8 횡격막 호흡은 인위적으로 부교감신경(미주신경)을 자극하여 뇌의 긴장도를 즉각 낮추는 최고의 자연 진정제입니다.

해아림한의원에서는 치료 과정에서 환자분의 직업과 생활 패턴에 맞춘 1:1 라이프스타일 코칭을 병행하여, 치료 종료 후에도 환자 스스로 자율신경 건강을 지켜나갈 수 있도록 든든한 동반자가 되어 드립니다.

[자율신경실조증 검사 알아보기](https://healim-autonomic.com/autonomic-diagnosis)

[자율신경실조증 치료방법 알아보기](https://healim-autonomic.com/autonomic-treatment)

[전국 지점 안내](https://www.healim.com)`
    }
  ];

  // ──────────────────────────────────────────────────────────
  // 2. 자동 발행 스케줄러 계산 엔진 (주 2~3회, 08:00~11:00 랜덤)
  // ──────────────────────────────────────────────────────────
  function calculateNextScheduleTime(baseDate) {
    var d = new Date((baseDate || new Date()).getTime());
    // 2일 또는 3일 간격 (50% 확률) -> 주 2~3회 발행 달성
    var dayOffset = Math.random() < 0.5 ? 2 : 3;
    d.setDate(d.getDate() + dayOffset);

    // 오전 08시 ~ 10시 59분 59초 사이 (오전 8시~11시 사이) 랜덤 시간
    var hour = 8 + Math.floor(Math.random() * 3); // 8, 9, 10
    var minute = Math.floor(Math.random() * 60);
    var second = Math.floor(Math.random() * 60);
    d.setHours(hour, minute, second, 0);

    return d;
  }

  function getAutoFaqState() {
    try {
      var raw = localStorage.getItem('healim_auto_faq_state');
      if (raw) return JSON.parse(raw);
    } catch(e) {}

    var now = new Date();
    var next = calculateNextScheduleTime(now);
    var initState = {
      lastPublishedTime: 0,
      nextScheduledTime: next.getTime(),
      publishedPoolIds: [],
      poolIndex: 0
    };
    saveAutoFaqState(initState);
    return initState;
  }

  function saveAutoFaqState(state) {
    try {
      localStorage.setItem('healim_auto_faq_state', JSON.stringify(state));
    } catch(e) {}
  }

  function formatScheduleTime(ts) {
    if (!ts) return '예정 없음';
    var d = new Date(ts);
    var y = d.getFullYear();
    var m = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    var hh = String(d.getHours()).padStart(2, '0');
    var mm = String(d.getMinutes()).padStart(2, '0');
    return y + '.' + m + '.' + day + ' ' + hh + ':' + mm;
  }

  // ──────────────────────────────────────────────────────────
  // 3. 자동 발행 실행 핸들러 (도래 시점 자동 발행 또는 관리자 즉시 발행)
  // ──────────────────────────────────────────────────────────
  function checkAndRunAutoFaqPublish(forceImmediate) {
    if (!window.autoFaqContentPool || window.autoFaqContentPool.length === 0) return null;
    var state = getAutoFaqState();
    var now = Date.now();

    if (forceImmediate || now >= state.nextScheduledTime) {
      var poolItem = window.autoFaqContentPool[state.poolIndex % window.autoFaqContentPool.length];
      var pubTimestamp = forceImmediate ? now : state.nextScheduledTime;
      var pDate = new Date(pubTimestamp);
      var dateStr = pDate.getFullYear() + '.' + String(pDate.getMonth() + 1).padStart(2, '0') + '.' + String(pDate.getDate()).padStart(2, '0');

      var newPost = {
        id: 'faq-auto-' + pubTimestamp,
        category: '자율신경FAQ',
        author: '해아림한의원',
        date: dateStr,
        views: Math.floor(Math.random() * 80) + 140,
        title: poolItem.title,
        image: poolItem.image,
        content: poolItem.content,
        isAutoPublished: true,
        poolId: poolItem.id
      };

      // healim_board_faq 저장
      var currentFaqList = [];
      try {
        var raw = localStorage.getItem('healim_board_faq');
        if (raw) currentFaqList = JSON.parse(raw) || [];
      } catch(e) {}

      // 중복 체크
      var exists = currentFaqList.some(function(it) {
        return it.id === newPost.id || (it.poolId && it.poolId === newPost.poolId && it.date === newPost.date);
      });
      if (!exists) {
        currentFaqList.unshift(newPost);
        try {
          localStorage.setItem('healim_board_faq', JSON.stringify(currentFaqList));
          var customList = [];
          var rawC = localStorage.getItem('healim_custom_faq_posts');
          if (rawC) customList = JSON.parse(rawC) || [];
          customList.unshift(newPost);
          localStorage.setItem('healim_custom_faq_posts', JSON.stringify(customList));
        } catch(e) {}
      }

      // 상태 전진
      state.lastPublishedTime = pubTimestamp;
      if (state.publishedPoolIds.indexOf(poolItem.id) === -1) {
        state.publishedPoolIds.push(poolItem.id);
      }
      state.poolIndex = (state.poolIndex + 1) % window.autoFaqContentPool.length;
      var nextDate = calculateNextScheduleTime(new Date(pubTimestamp));
      state.nextScheduledTime = nextDate.getTime();
      saveAutoFaqState(state);

      // 전체 탭 및 하단 컴포넌트 실시간 이벤트 전송
      try {
        window.dispatchEvent(new CustomEvent('healim-community-updated', { detail: { boardType: 'faq', action: 'auto-publish', post: newPost } }));
      } catch(e) {}

      updateAutoFaqStatusUI(state);
      return newPost;
    }

    updateAutoFaqStatusUI(state);
    return null;
  }

  function updateAutoFaqStatusUI(state) {
    var el = document.getElementById('autoFaqNextScheduleText');
    if (el && state) {
      el.textContent = '다음 예정: ' + formatScheduleTime(state.nextScheduledTime);
    }
  }

  // 전역 노출 API
  window.checkAndRunAutoFaqPublish = checkAndRunAutoFaqPublish;
  window.getAutoFaqState = getAutoFaqState;
  window.calculateNextScheduleTime = calculateNextScheduleTime;
  window.formatScheduleTime = formatScheduleTime;

  window.triggerAutoFaqPublishManual = function() {
    var rawUser = localStorage.getItem('healim_auth_user');
    var isHealimAdmin = false;
    if (rawUser) {
      try {
        var u = JSON.parse(rawUser);
        if (u && (u.uid === 'healim0071' || (u.role === 'admin' && u.uid === 'healim0071') || u.grade === 'superadmin')) {
          isHealimAdmin = true;
        }
      } catch(e) {}
    }
    if (!isHealimAdmin) {
      alert('관리자(healim0071)로 로그인한 경우에만 수동 즉시 발행이 가능합니다.');
      return;
    }

    var published = checkAndRunAutoFaqPublish(true);
    if (published) {
      alert('자율신경 FAQ 신규 글이 자동 발행되었습니다!\n\n제목: ' + published.title + '\n발행일자: ' + published.date + '\n\n목록 맨 상단에 배치되었습니다.');
      if (typeof renderFaqList === 'function') renderFaqList();
      if (typeof syncBottomCommunity === 'function') syncBottomCommunity();
    } else {
      alert('FAQ 자동 발행 처리되었습니다.');
    }
  };

  // 페이지 로드 시 즉시 스케줄 도래 여부 검사
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      checkAndRunAutoFaqPublish(false);
    });
  } else {
    checkAndRunAutoFaqPublish(false);
  }

})();
