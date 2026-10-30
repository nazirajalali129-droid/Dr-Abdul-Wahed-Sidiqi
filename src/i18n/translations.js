// All site text lives here. Every language must keep the exact same shape.
// Phone numbers, emails, years and acronyms (ECG, ACLS, FESC...) stay in Latin script on purpose.

export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fa", label: "دری", dir: "rtl" },
  { code: "ps", label: "پښتو", dir: "rtl" },
];

const en = {
  meta: {
    lang: "en",
    dir: "ltr",
    title: "Dr. Abdul Wahed Sidiqi | Consultant Cardiologist",
    switchLabel: "Language",
  },

  nav: {
    name: "DR. ABDUL WAHED SIDIQI",
    role: "Consultant Cardiologist",
    home: "Home",
    about: "About",
    services: "Services",
    contact: "Contact",
    book: "Book Appointment",
  },

  footer: {
    desc: "Dedicated to providing exceptional cardiovascular care, advancing medical education, and improving heart health in Afghanistan.",
    rights: "Ariana Medical Complex. All rights reserved.",
    quickLinks: "Quick Links",
    links: {
      home: "Home",
      about: "About Biography",
      services: "Services",
      contact: "Contact",
    },
    contactTitle: "Contact",
    addressLine1: "Ariana Medical Complex,",
    addressLine2: "Kabul, Afghanistan",
  },

  home: {
    badge: "Consultant Cardiologist",
    name1: "Dr. Abdul",
    name2: "Wahed Sidiqi",
    desc: "Founder of Ariana Medical Complex and the Afghanistan Cardiovascular Association. A fellowship-trained cardiologist dedicated to providing world-class, patient-first heart care and advancing medical education.",
    book: "BOOK APPOINTMENT",
    viewServices: "VIEW SERVICES",
    imgAlt: "Dr. Abdul Wahed Sidiqi",
  },

  stats: [
    "Years of Experience",
    "Doctors Trained",
    "Scientific Publications",
    "Institutions Founded",
  ],

  aboutSection: {
    imgAlt: "Ariana Medical Complex",
    title1: "About ",
    title2: "Dr. Sidiqi",
    p1: [
      "Dr. Abdul Wahed Sidiqi is a distinguished cardiologist and medical pioneer dedicated to transforming cardiovascular care in Afghanistan. He is the founder of the ",
      "Ariana Medical Complex",
      " (2018) and the Afghanistan Cardiovascular Association, establishing world-class diagnostic and treatment facilities for thousands of patients.",
    ],
    p2: [
      "Beyond his clinical excellence, Dr. Sidiqi is a proud member of the ",
      "World Heart Association",
      " and a Fellow of the European Society of Cardiology (FESC). His unwavering commitment to patient-first care and his international collaborations have positioned him as a leading figure in advancing heart health globally.",
    ],
    button: "More about Dr. Sidiqi",
  },

  servicesSection: {
    title1: "Our Medical ",
    title2: "Services",
    desc: "Providing comprehensive cardiovascular care using state-of-the-art technology and internationally recognized protocols.",
    invasiveTitle: "Invasive Cardiology",
    invasiveDesc:
      "Master's level expertise in minimally invasive procedures, including cardiac catheterization and stent placement for chronic coronary artery disease.",
    fesc: "FESC Recognized",
    echoTitle: "Echocardiography",
    echoDesc:
      "Advanced ultrasound imaging to evaluate heart valves and chambers. Developed structured training for over 100 physicians.",
    ecgTitle: "ECG & Stress Tests",
    ecgDesc:
      "Standardized electrocardiography to detect arrhythmias and coronary artery disease under exertion.",
    dopplerTitle: "Vascular Doppler",
    dopplerDesc:
      "Non-invasive ultrasound testing to evaluate blood flow in major arteries and veins, aiding in preventive cardiology.",
    emergencyTitle: "Emergency Cardiac Care",
    emergencyDesc:
      "Advanced Cardiovascular Life Support (ACLS) and emergency response based on published CPR guidelines.",
    more: "More Services",
  },

  why: {
    eyebrow: "Why Choose Us",
    title: "Why Patients Choose Our Clinic",
    desc: "Dedicated to providing exceptional cardiovascular care, advancing medical education, and improving heart health in Afghanistan.",
    verified: "Verified medical credentials",
    features: [
      {
        title: "25+ Years of Excellence",
        desc: "With over two decades of dedicated medical practice since graduating in 2001, Dr. Sidiqi has established himself as a leading figure in Afghan cardiology.",
      },
      {
        title: "International Expertise",
        desc: "As a Fellow of the European Society of Cardiology (FESC) and a member of the World Heart Association, Dr. Sidiqi brings global standards to local care.",
      },
      {
        title: "Advanced Diagnostics",
        desc: "Dr. Sidiqi pioneered structured Echocardiography and ECG training in Afghanistan, personally training over 100 physicians.",
      },
      {
        title: "Comprehensive Patient Care",
        desc: "From preventive cardiology and lifestyle management to emergency cardiac care (ACLS) and invasive procedures, we offer a full spectrum of services.",
      },
    ],
    ctaTitle: "Have Concerns About Your Heart?",
    ctaDesc:
      "Dr. Sidiqi and his expert team at Ariana Medical Complex are ready to help. Don't wait—take the first step towards a healthier heart today.",
    ctaButton: "Contact Us / Book Appointment",
  },

  aboutPage: {
    heroEyebrow: "Professional Profile",
    heroName1: "Dr. Abdul Wahed",
    heroName2: "Sidiqi",
    heroDesc:
      "Cardiologist, medical educator, and researcher dedicated to advancing cardiovascular healthcare and medical education.",
    tags: ["Cardiology", "Medical Education", "Research"],
    introImgAlt: "Dr. Abdul Wahed Sidiqi",
    introEyebrow: "About the Doctor",
    introTitle1: "A career built around",
    introTitle2: " advancing heart health.",
    intro1:
      "Dr. Abdul Wahed Sidiqi is a distinguished Afghan cardiologist, university lecturer, and healthcare institution founder. With over two decades of clinical experience, he is recognized for his contributions to cardiology education and the development of structured echocardiography and ECG curricula, which have trained over 100 physicians across Afghanistan.",
    intro2: [
      "His expertise spans ",
      "invasive cardiology, preventive care, and emergency cardiac life support (ACLS).",
      " He has also contributed to cardiovascular research, publishing in internationally recognized journals, including the American Heart Association's Circulation.",
    ],
    intro3:
      "Through clinical practice, research, and medical education, Dr. Sidiqi is committed to a patient-first approach and improving cardiovascular healthcare outcomes.",
    journeyEyebrow: "Professional Journey",
    journeyTitle: "Education & Career",
    journeyDesc:
      "A journey of academic achievement, international training, and continued contributions to cardiovascular medicine.",
    milestone: "Career Milestone",
    timeline: [
      {
        year: "2001",
        title: "Medical Degree (MD)",
        desc: "Graduated from Kabul University of Medical Sciences.",
      },
      {
        year: "2004",
        title: "Academic Career",
        desc: "Became an assistant professor of cardiology at Kabul University.",
      },
      {
        year: "2006",
        title: "Internal Medicine",
        desc: "Completed specialized training at Aliabad Teaching Hospital.",
      },
      {
        year: "2008",
        title: "Cardiology Fellowship",
        desc: "Undertook advanced cardiology training in the Netherlands.",
      },
      {
        year: "2011",
        title: "International Training",
        desc: "Studied advanced cardiovascular applications at Seoul University, South Korea.",
      },
      {
        year: "2017",
        title: "Master's Degree",
        desc: "Earned a master's degree in invasive cardiology from Avicenna Tajik Medical University.",
      },
      {
        year: "2022/23",
        title: "European Recognition",
        desc: "Awarded Fellowship of the European Society of Cardiology (FESC).",
      },
    ],
    expertiseEyebrow: "Areas of Expertise",
    expertiseTitle: "Medical expertise & contributions",
    expertise: [
      {
        title: "Clinical Cardiology",
        desc: "Cardiovascular diagnosis and patient-centered care.",
      },
      {
        title: "Echocardiography & ECG",
        desc: "Cardiac imaging and medical training.",
      },
      {
        title: "Invasive Cardiology",
        desc: "Specialized cardiovascular procedures.",
      },
      {
        title: "Medical Education",
        desc: "Training and developing future physicians.",
      },
    ],
    instEyebrow: "Leadership & Vision",
    instTitle: "Institutions & Initiatives",
    instDesc:
      "Focused, specialist care and the development of world-class healthcare infrastructure for cardiovascular conditions across Afghanistan.",
    instImgAlt: "Dr. Sidiqi in surgery",
    institutions: [
      {
        year: "2009",
        name: "Ariana Hospital",
        desc: "Founded to expand cardiology services and provide specialized training.",
      },
      {
        year: "2011",
        name: "Echo Society of Afghanistan",
        desc: "Advancing echocardiography education and professional standards.",
      },
      {
        year: "2014",
        name: "Afghanistan Cardiovascular Association",
        desc: "Promoting cardiovascular research and public awareness.",
      },
      {
        year: "2018",
        name: "Ariana Medical Complex",
        desc: "A state-of-the-art center for specialized cardiac care and diagnostics.",
      },
    ],
    readFull: "Read the full profile",
    affEyebrow: "International Recognition",
    affTitle: "Global affiliations & professional recognition.",
    affDesc:
      "Professional fellowships and memberships reflecting international engagement in cardiovascular medicine.",
    affLabel: "Professional Affiliations",
    affiliations: [
      { short: "FESC", name: "European Society of Cardiology", status: "2022/2023" },
      { short: "WHF", name: "World Heart Federation", status: "Member" },
      { short: "FAPSC", name: "Asia Pacific", status: "Fellow" },
      { short: "FJCS", name: "Japan", status: "Fellow" },
    ],
    contactEyebrow: "Get in Touch",
    contactTitle: "Have Concerns About Your Heart?",
    contactDesc:
      "Dr. Sidiqi and his expert team at Ariana Medical Complex are ready to help. Take the first step towards a healthier heart today.",
    location: "Kabul, Afghanistan",
    contactButton: "Contact Us / Book Appointment",
  },

  servicesPage: {
    title1: "Our Medical ",
    title2: "Services",
    desc: "At Ariana Medical Complex, we provide a full spectrum of cardiovascular care, utilizing state-of-the-art technology and internationally recognized protocols.",
    items: [
      {
        title: "Invasive Cardiology",
        desc: "Advanced cardiovascular applications, including cardiac catheterization and minimally invasive procedures for chronic coronary artery disease.",
      },
      {
        title: "Echocardiography",
        desc: "Advanced diagnostic imaging for structural heart diseases, cardiomyopathies, and congenital conditions. Developed structured training for over 100 physicians.",
      },
      {
        title: "Electrocardiography (ECG)",
        desc: "Comprehensive cardiac rhythm assessment using internationally standardized protocols developed for Kabul University of Medical Sciences.",
      },
      {
        title: "Vascular Doppler",
        desc: "Non-invasive ultrasound testing to evaluate blood flow in major arteries and veins, aiding in the early detection of vascular diseases.",
      },
      {
        title: "Preventive Cardiology",
        desc: "Patient-first approach focusing on early detection, lifestyle management, and preventing the progression of heart disease.",
      },
      {
        title: "Pediatric Cardiology",
        desc: "Specialized assessment and management of congenital heart disease in children, focusing on early intervention and long-term care.",
      },
      {
        title: "Valvular Heart Disease",
        desc: "Expert management of rheumatic valvular heart conditions, utilizing advanced imaging and evidence-based treatment plans.",
      },
      {
        title: "Cardiomyopathy Clinic",
        desc: "Specialized care for diseases of the heart muscle, including diagnostic evaluation and advanced management strategies.",
      },
      {
        title: "Emergency Cardiac Care",
        desc: "Advanced Cardiovascular Life Support (ACLS) and emergency response based on published CPR guidelines and international protocols.",
      },
    ],
    ctaTitle: "Need a Specialist Consultation?",
    ctaDesc:
      "Dr. Sidiqi is available for appointments at the Ariana Medical Complex. Take the first step towards better heart health today.",
    ctaButton: "BOOK AN APPOINTMENT",
  },

  contactPage: {
    title1: "Get in ",
    title2: "Touch",
    desc: "Reach out to us directly or visit the Ariana Medical Complex. We are here to help you with world-class cardiovascular care.",
    infoTitle: "Contact Information",
    addressLabel: "Exact Address",
    addressLine1: "Afshar Area, Phase 5",
    addressLine2: "Kabul, Afghanistan",
    phoneLabel: "Call Us Directly",
    emailLabel: "Email Address",
    hoursLabel: "Working Hours",
    hours: "Mon - Fri: 9:00 AM - 5:00 PM",
    mapTitle: "Ariana Medical Complex Location",
    mapName: "Ariana Medical Complex",
    mapAddress: "Afshar Area, Phase 5, Kabul, Afghanistan",
    formTitle: "Book an Appointment",
    formDesc: "Fill out the form below and our team will get back to you shortly.",
    fullName: "Full Name *",
    fullNamePh: "John Doe",
    email: "Email Address *",
    phone: "Phone Number *",
    specialty: "Choose Specialty *",
    specialties: [
      "General Consultation",
      "Cardiology",
      "Echocardiography",
      "ECG / Stress Test",
    ],
    date: "Preferred Date *",
    time: "Preferred Time *",
    times: ["Morning (9 AM - 12 PM)", "Afternoon (1 PM - 5 PM)"],
    message: "Additional Message",
    messagePh: "Please describe your symptoms or reason for visit...",
    submit: "Request Appointment",
  },
};

// ---------------------------------------------------------------------------
// Dari (Afghan Persian)
// ---------------------------------------------------------------------------
const fa = {
  meta: {
    lang: "fa",
    dir: "rtl",
    title: "داکتر عبدالواحد صدیقی | متخصص ارشد قلب",
    switchLabel: "زبان",
  },

  nav: {
    name: "داکتر عبدالواحد صدیقی",
    role: "متخصص ارشد قلب",
    home: "صفحه اصلی",
    about: "درباره",
    services: "خدمات",
    contact: "تماس",
    book: "گرفتن وقت ملاقات",
  },

  footer: {
    desc: "متعهد به ارائهٔ مراقبت‌های ممتاز قلبی و عروقی، ارتقای آموزش طبی و بهبود صحت قلب در افغانستان.",
    rights: "کمپلکس طبی آریانا. تمام حقوق محفوظ است.",
    quickLinks: "لینک‌های سریع",
    links: {
      home: "صفحه اصلی",
      about: "بیوگرافی",
      services: "خدمات",
      contact: "تماس",
    },
    contactTitle: "تماس",
    addressLine1: "کمپلکس طبی آریانا،",
    addressLine2: "کابل، افغانستان",
  },

  home: {
    badge: "متخصص ارشد قلب",
    name1: "داکتر عبدالواحد",
    name2: "صدیقی",
    desc: "بنیان‌گذار کمپلکس طبی آریانا و انجمن قلب و عروق افغانستان. متخصص قلبِ فیلوشیپ‌دیده که به ارائهٔ مراقبت‌های قلبی در سطح جهانی با محوریت بیمار و ارتقای آموزش طبی متعهد است.",
    book: "گرفتن وقت ملاقات",
    viewServices: "مشاهدهٔ خدمات",
    imgAlt: "داکتر عبدالواحد صدیقی",
  },

  stats: [
    "سال تجربه",
    "داکتر آموزش‌دیده",
    "نشریهٔ علمی",
    "نهاد تأسیس‌شده",
  ],

  aboutSection: {
    imgAlt: "کمپلکس طبی آریانا",
    title1: "درباره ",
    title2: "داکتر صدیقی",
    p1: [
      "داکتر عبدالواحد صدیقی متخصص برجستهٔ قلب و پیشگام عرصهٔ طب است که برای دگرگونی مراقبت‌های قلبی و عروقی در افغانستان تلاش می‌کند. او بنیان‌گذار ",
      "کمپلکس طبی آریانا",
      " (2018) و انجمن قلب و عروق افغانستان است و برای هزاران بیمار مراکز تشخیصی و درمانی در سطح جهانی ایجاد کرده است.",
    ],
    p2: [
      "علاوه بر برتری کلینیکی، داکتر صدیقی با افتخار عضو ",
      "انجمن جهانی قلب",
      " و فیلوی انجمن قلب اروپا (FESC) است. تعهد استوار او به مراقبت بیمارمحور و همکاری‌های بین‌المللی‌اش او را به چهرهٔ پیشرو در ارتقای صحت قلب در سطح جهان تبدیل کرده است.",
    ],
    button: "بیشتر دربارهٔ داکتر صدیقی",
  },

  servicesSection: {
    title1: "خدمات ",
    title2: "طبی ما",
    desc: "ارائهٔ مراقبت‌های جامع قلبی و عروقی با استفاده از پیشرفته‌ترین تکنالوژی و پروتوکول‌های شناخته‌شدهٔ بین‌المللی.",
    invasiveTitle: "کاردیولوژی مداخله‌ای",
    invasiveDesc:
      "تخصص در سطح ماستری در پروسیجرهای کم‌تهاجمی، شامل کاتیتریزیشن قلبی و گذاشتن استنت برای بیماری مزمن شریان‌های کرونری.",
    fesc: "شناخته‌شده توسط FESC",
    echoTitle: "اکوکاردیوگرافی",
    echoDesc:
      "تصویربرداری پیشرفته با امواج فراصوت برای ارزیابی دریچه‌ها و حجرات قلب. طراحی برنامهٔ آموزشی منظم برای بیش از 100 داکتر.",
    ecgTitle: "ECG و تست‌های استرس",
    ecgDesc:
      "الکتروکاردیوگرافی معیاری برای تشخیص اختلالات ریتم قلب و بیماری شریان‌های کرونری در حین فعالیت بدنی.",
    dopplerTitle: "داپلر عروقی",
    dopplerDesc:
      "آزمایش غیرتهاجمی با امواج فراصوت برای ارزیابی جریان خون در شریان‌ها و وریدهای اصلی که به قلب‌شناسی پیشگیرانه کمک می‌کند.",
    emergencyTitle: "مراقبت‌های عاجل قلبی",
    emergencyDesc:
      "حمایت پیشرفتهٔ حیاتی قلبی و عروقی (ACLS) و واکنش اضطراری بر اساس رهنمودهای منتشرشدهٔ CPR.",
    more: "خدمات بیشتر",
  },

  why: {
    eyebrow: "چرا ما",
    title: "چرا بیماران کلینیک ما را انتخاب می‌کنند",
    desc: "متعهد به ارائهٔ مراقبت‌های ممتاز قلبی و عروقی، ارتقای آموزش طبی و بهبود صحت قلب در افغانستان.",
    verified: "مدارک طبی تأییدشده",
    features: [
      {
        title: "بیش از 25 سال برتری",
        desc: "داکتر صدیقی با بیش از دو دهه فعالیت طبی متعهدانه از زمان فراغت در سال 2001، خود را به‌حیث یکی از چهره‌های برجستهٔ قلب‌شناسی افغانستان تثبیت کرده است.",
      },
      {
        title: "تخصص بین‌المللی",
        desc: "داکتر صدیقی به‌حیث فیلوی انجمن قلب اروپا (FESC) و عضو انجمن جهانی قلب، معیارهای جهانی را به مراقبت‌های محلی می‌آورد.",
      },
      {
        title: "تشخیص پیشرفته",
        desc: "داکتر صدیقی پیشگام آموزش منظم اکوکاردیوگرافی و ECG در افغانستان بوده و شخصاً بیش از 100 داکتر را آموزش داده است.",
      },
      {
        title: "مراقبت جامع از بیماران",
        desc: "از قلب‌شناسی پیشگیرانه و مدیریت سبک زندگی گرفته تا مراقبت‌های عاجل قلبی (ACLS) و پروسیجرهای مداخله‌ای، ما طیف کاملی از خدمات را ارائه می‌کنیم.",
      },
    ],
    ctaTitle: "دربارهٔ قلب خود نگرانی دارید؟",
    ctaDesc:
      "داکتر صدیقی و تیم متخصص او در کمپلکس طبی آریانا آمادهٔ کمک به شما هستند. منتظر نمانید؛ همین امروز نخستین گام را به‌سوی قلبی سالم‌تر بردارید.",
    ctaButton: "تماس با ما / گرفتن وقت ملاقات",
  },

  aboutPage: {
    heroEyebrow: "پروفایل مسلکی",
    heroName1: "داکتر عبدالواحد",
    heroName2: "صدیقی",
    heroDesc:
      "متخصص قلب، استاد طب و پژوهشگر که برای پیشرفت مراقبت‌های قلبی و عروقی و آموزش طبی تلاش می‌کند.",
    tags: ["قلب‌شناسی", "آموزش طبی", "تحقیق"],
    introImgAlt: "داکتر عبدالواحد صدیقی",
    introEyebrow: "درباره داکتر",
    introTitle1: "مسیر مسلکی‌ای که بر محور",
    introTitle2: " ارتقای صحت قلب بنا شده است.",
    intro1:
      "داکتر عبدالواحد صدیقی متخصص برجستهٔ قلب، استاد دانشگاه و بنیان‌گذار نهادهای صحی در افغانستان است. او با بیش از دو دهه تجربهٔ کلینیکی، به دلیل سهمش در آموزش قلب‌شناسی و ایجاد نصاب‌های منظم اکوکاردیوگرافی و ECG شناخته می‌شود؛ نصاب‌هایی که بیش از 100 داکتر را در سراسر افغانستان آموزش داده‌اند.",
    intro2: [
      "تخصص او شامل ",
      "کاردیولوژی مداخله‌ای، مراقبت‌های پیشگیرانه و حمایت حیاتی عاجل قلبی (ACLS)",
      " می‌شود. او همچنین در تحقیقات قلبی و عروقی سهم گرفته و در مجله‌های معتبر بین‌المللی، از جمله Circulation انجمن قلب امریکا، مقاله به چاپ رسانده است.",
    ],
    intro3:
      "داکتر صدیقی از طریق کار کلینیکی، تحقیق و آموزش طبی، به رویکرد بیمارمحور و بهبود نتایج مراقبت‌های قلبی و عروقی متعهد است.",
    journeyEyebrow: "مسیر مسلکی",
    journeyTitle: "تحصیل و کار",
    journeyDesc:
      "مسیری از دستاوردهای علمی، آموزش‌های بین‌المللی و خدمات مستمر در عرصهٔ طب قلب و عروق.",
    milestone: "نقطهٔ عطف مسلکی",
    timeline: [
      {
        year: "2001",
        title: "دکترای طب (MD)",
        desc: "از دانشگاه علوم طبی کابل فارغ شد.",
      },
      {
        year: "2004",
        title: "مسیر علمی",
        desc: "در دانشگاه کابل به رتبهٔ پوهنیار در بخش قلب‌شناسی رسید.",
      },
      {
        year: "2006",
        title: "طب داخله",
        desc: "آموزش تخصصی را در شفاخانهٔ آموزشی علی‌آباد تکمیل کرد.",
      },
      {
        year: "2008",
        title: "فیلوشیپ قلب‌شناسی",
        desc: "آموزش پیشرفتهٔ قلب‌شناسی را در هالند گذراند.",
      },
      {
        year: "2011",
        title: "آموزش بین‌المللی",
        desc: "کاربردهای پیشرفتهٔ قلبی و عروقی را در دانشگاه سئول کوریای جنوبی فرا گرفت.",
      },
      {
        year: "2017",
        title: "درجهٔ ماستری",
        desc: "درجهٔ ماستری را در رشتهٔ کاردیولوژی مداخله‌ای از دانشگاه طبی ابن‌سینای تاجیکستان به دست آورد.",
      },
      {
        year: "2022/23",
        title: "شناخت اروپایی",
        desc: "فیلوشیپ انجمن قلب اروپا (FESC) به او اعطا شد.",
      },
    ],
    expertiseEyebrow: "حوزه‌های تخصص",
    expertiseTitle: "تخصص و خدمات طبی",
    expertise: [
      {
        title: "کاردیولوژی کلینیکی",
        desc: "تشخیص امراض قلبی و عروقی و مراقبت بیمارمحور.",
      },
      {
        title: "اکوکاردیوگرافی و ECG",
        desc: "تصویربرداری قلب و آموزش طبی.",
      },
      {
        title: "کاردیولوژی مداخله‌ای",
        desc: "پروسیجرهای تخصصی قلبی و عروقی.",
      },
      {
        title: "آموزش طبی",
        desc: "آموزش و پرورش داکتران آینده.",
      },
    ],
    instEyebrow: "رهبری و دیدگاه",
    instTitle: "نهادها و ابتکارات",
    instDesc:
      "مراقبت تخصصی و متمرکز و توسعهٔ زیربناهای صحی در سطح جهانی برای امراض قلبی و عروقی در سراسر افغانستان.",
    instImgAlt: "داکتر صدیقی در جریان عملیات",
    institutions: [
      {
        year: "2009",
        name: "شفاخانهٔ آریانا",
        desc: "برای گسترش خدمات قلب‌شناسی و ارائهٔ آموزش تخصصی تأسیس شد.",
      },
      {
        year: "2011",
        name: "انجمن اکوی افغانستان",
        desc: "پیشبرد آموزش اکوکاردیوگرافی و معیارهای مسلکی.",
      },
      {
        year: "2014",
        name: "انجمن قلب و عروق افغانستان",
        desc: "ترویج تحقیقات قلبی و عروقی و آگاهی عامه.",
      },
      {
        year: "2018",
        name: "کمپلکس طبی آریانا",
        desc: "مرکزی مجهز و پیشرفته برای مراقبت و تشخیص تخصصی قلبی.",
      },
    ],
    readFull: "مطالعهٔ پروفایل کامل",
    affEyebrow: "شناخت بین‌المللی",
    affTitle: "عضویت‌های جهانی و شناخت مسلکی.",
    affDesc:
      "فیلوشیپ‌ها و عضویت‌های مسلکی که بیانگر مشارکت بین‌المللی در طب قلب و عروق است.",
    affLabel: "وابستگی‌های مسلکی",
    affiliations: [
      { short: "FESC", name: "انجمن قلب اروپا", status: "2022/2023" },
      { short: "WHF", name: "فدراسیون جهانی قلب", status: "عضو" },
      { short: "FAPSC", name: "آسیا و پاسیفیک", status: "فیلو" },
      { short: "FJCS", name: "جاپان", status: "فیلو" },
    ],
    contactEyebrow: "تماس بگیرید",
    contactTitle: "دربارهٔ قلب خود نگرانی دارید؟",
    contactDesc:
      "داکتر صدیقی و تیم متخصص او در کمپلکس طبی آریانا آمادهٔ کمک به شما هستند. همین امروز نخستین گام را به‌سوی قلبی سالم‌تر بردارید.",
    location: "کابل، افغانستان",
    contactButton: "تماس با ما / گرفتن وقت ملاقات",
  },

  servicesPage: {
    title1: "خدمات ",
    title2: "طبی ما",
    desc: "در کمپلکس طبی آریانا، طیف کاملی از مراقبت‌های قلبی و عروقی را با استفاده از پیشرفته‌ترین تکنالوژی و پروتوکول‌های شناخته‌شدهٔ بین‌المللی ارائه می‌کنیم.",
    items: [
      {
        title: "کاردیولوژی مداخله‌ای",
        desc: "کاربردهای پیشرفتهٔ قلبی و عروقی، از جمله کاتیتریزیشن قلبی و پروسیجرهای کم‌تهاجمی برای بیماری مزمن شریان‌های کرونری.",
      },
      {
        title: "اکوکاردیوگرافی",
        desc: "تصویربرداری تشخیصی پیشرفته برای امراض ساختاری قلب، کاردیومیوپاتی‌ها و حالات مادرزادی. آموزش منظم برای بیش از 100 داکتر طراحی شده است.",
      },
      {
        title: "الکتروکاردیوگرافی (ECG)",
        desc: "ارزیابی جامع ریتم قلب با استفاده از پروتوکول‌های معیاری بین‌المللی که برای دانشگاه علوم طبی کابل تدوین شده است.",
      },
      {
        title: "داپلر عروقی",
        desc: "آزمایش غیرتهاجمی با امواج فراصوت برای ارزیابی جریان خون در شریان‌ها و وریدهای اصلی که به تشخیص زودهنگام امراض عروقی کمک می‌کند.",
      },
      {
        title: "قلب‌شناسی پیشگیرانه",
        desc: "رویکرد بیمارمحور با تمرکز بر تشخیص زودهنگام، مدیریت سبک زندگی و جلوگیری از پیشرفت بیماری قلبی.",
      },
      {
        title: "قلب‌شناسی اطفال",
        desc: "ارزیابی و مدیریت تخصصی بیماری مادرزادی قلب در اطفال، با تمرکز بر مداخلهٔ زودهنگام و مراقبت درازمدت.",
      },
      {
        title: "امراض دریچه‌ای قلب",
        desc: "مدیریت متخصصانهٔ امراض دریچه‌ای روماتیسمی قلب با استفاده از تصویربرداری پیشرفته و پلان‌های درمانی مبتنی بر شواهد.",
      },
      {
        title: "کلینیک کاردیومیوپاتی",
        desc: "مراقبت تخصصی برای امراض عضلهٔ قلب، شامل ارزیابی تشخیصی و راهکارهای پیشرفتهٔ مدیریت.",
      },
      {
        title: "مراقبت‌های عاجل قلبی",
        desc: "حمایت پیشرفتهٔ حیاتی قلبی و عروقی (ACLS) و واکنش اضطراری بر اساس رهنمودهای منتشرشدهٔ CPR و پروتوکول‌های بین‌المللی.",
      },
    ],
    ctaTitle: "به مشورهٔ متخصص ضرورت دارید؟",
    ctaDesc:
      "داکتر صدیقی برای ملاقات در کمپلکس طبی آریانا در دسترس است. همین امروز نخستین گام را به‌سوی صحت بهتر قلب بردارید.",
    ctaButton: "گرفتن وقت ملاقات",
  },

  contactPage: {
    title1: "با ما ",
    title2: "تماس بگیرید",
    desc: "مستقیماً با ما تماس بگیرید یا به کمپلکس طبی آریانا مراجعه کنید. ما آمادهٔ کمک به شما با مراقبت‌های قلبی و عروقی در سطح جهانی هستیم.",
    infoTitle: "معلومات تماس",
    addressLabel: "آدرس دقیق",
    addressLine1: "ناحیهٔ افشار، فاز 5",
    addressLine2: "کابل، افغانستان",
    phoneLabel: "مستقیماً تماس بگیرید",
    emailLabel: "آدرس ایمیل",
    hoursLabel: "ساعات کاری",
    hours: "دوشنبه تا جمعه: 9:00 صبح - 5:00 بعد از چاشت",
    mapTitle: "موقعیت کمپلکس طبی آریانا",
    mapName: "کمپلکس طبی آریانا",
    mapAddress: "ناحیهٔ افشار، فاز 5، کابل، افغانستان",
    formTitle: "گرفتن وقت ملاقات",
    formDesc: "فورم زیر را پر کنید؛ تیم ما به زودی با شما تماس می‌گیرد.",
    fullName: "نام کامل *",
    fullNamePh: "احمد احمدی",
    email: "آدرس ایمیل *",
    phone: "شمارهٔ تلیفون *",
    specialty: "انتخاب تخصص *",
    specialties: [
      "مشورهٔ عمومی",
      "قلب‌شناسی",
      "اکوکاردیوگرافی",
      "ECG / تست استرس",
    ],
    date: "تاریخ دلخواه *",
    time: "وقت دلخواه *",
    times: ["صبح (9 تا 12)", "بعد از چاشت (1 تا 5)"],
    message: "پیام اضافی",
    messagePh: "لطفاً علائم یا دلیل مراجعهٔ خود را بنویسید...",
    submit: "درخواست وقت ملاقات",
  },
};

// ---------------------------------------------------------------------------
// Pashto
// ---------------------------------------------------------------------------
const ps = {
  meta: {
    lang: "ps",
    dir: "rtl",
    title: "ډاکټر عبدالواحد صدیقي | د زړه ارشد متخصص",
    switchLabel: "ژبه",
  },

  nav: {
    name: "ډاکټر عبدالواحد صدیقي",
    role: "د زړه ارشد متخصص",
    home: "کور",
    about: "په اړه",
    services: "خدمتونه",
    contact: "اړیکه",
    book: "د ناستې وخت اخیستل",
  },

  footer: {
    desc: "په افغانستان کې د زړه او رګونو د ځانګړې پاملرنې وړاندې کولو، د طبي زده کړو پرمختګ او د زړه د روغتیا د ښه کولو ته ژمن.",
    rights: "آریانا طبي کمپلکس. ټول حقونه خوندي دي.",
    quickLinks: "چټک لینکونه",
    links: {
      home: "کور",
      about: "ژوندلیک",
      services: "خدمتونه",
      contact: "اړیکه",
    },
    contactTitle: "اړیکه",
    addressLine1: "آریانا طبي کمپلکس،",
    addressLine2: "کابل، افغانستان",
  },

  home: {
    badge: "د زړه ارشد متخصص",
    name1: "ډاکټر عبدالواحد",
    name2: "صدیقي",
    desc: "د آریانا طبي کمپلکس او د افغانستان د زړه او رګونو د ټولنې بنسټګر. د فیلوشیپ زده کړو لرونکی د زړه متخصص چې د نړیوالې کچې، ناروغ-محوره د زړه پاملرنه وړاندې کوي او طبي زده کړې پرمخ وړي.",
    book: "د ناستې وخت اخیستل",
    viewServices: "خدمتونه وګورئ",
    imgAlt: "ډاکټر عبدالواحد صدیقي",
  },

  stats: [
    "د تجربې کلونه",
    "روزل شوي ډاکټران",
    "علمي خپرونې",
    "تاسیس شوي بنسټونه",
  ],

  aboutSection: {
    imgAlt: "آریانا طبي کمپلکس",
    title1: "د ",
    title2: "ډاکټر صدیقي په اړه",
    p1: [
      "ډاکټر عبدالواحد صدیقي یو نامتو د زړه متخصص او د طب پیشقدم دی چې په افغانستان کې د زړه او رګونو د پاملرنې په بدلولو کې هلې ځلې کوي. هغه د ",
      "آریانا طبي کمپلکس",
      " (2018) او د افغانستان د زړه او رګونو د ټولنې بنسټګر دی او د زرګونو ناروغانو لپاره یې د نړیوالې کچې تشخیصي او درملنیز مرکزونه جوړ کړي دي.",
    ],
    p2: [
      "د کلینیکي غوره والي سربېره، ډاکټر صدیقي په ویاړ د ",
      "نړیوالې زړه ټولنې",
      " غړی او د اروپا د زړه ټولنې (FESC) فیلو دی. ناروغ-محورې پاملرنې ته د هغه کلک ژمنتیا او نړیوالو همکاریو هغه د نړۍ په کچه د زړه د روغتیا په پرمختګ کې یو مخکښ څېره کړی دی.",
    ],
    button: "د ډاکټر صدیقي په اړه نور",
  },

  servicesSection: {
    title1: "زموږ طبي ",
    title2: "خدمتونه",
    desc: "د پرمختللې ټیکنالوژۍ او نړیوالو پیژندل شویو پروتوکولونو په کارولو سره د زړه او رګونو بشپړه پاملرنه.",
    invasiveTitle: "مداخلوي کارډیالوژي",
    invasiveDesc:
      "د ماسټرۍ په کچه تخصص په لږ مداخلوي پروسیجرونو کې، په شمول د زړه کاتیتریزیشن او د مزمنې کرونري شریان ناروغۍ لپاره د سټنټ ځای پر ځای کول.",
    fesc: "د FESC لخوا پیژندل شوی",
    echoTitle: "ایکوکارډیوګرافي",
    echoDesc:
      "د زړه د والونو او خونو د ارزونې لپاره پرمختللې الټراساونډ انځورګري. له 100 ډیرو ډاکټرانو لپاره منظمه روزنه جوړه شوې ده.",
    ecgTitle: "ECG او د فشار ازموینې",
    ecgDesc:
      "معیاري الکتروکارډیوګرافي د زړه د ضربان د ګډوډیو او د فعالیت پر مهال د کرونري شریان ناروغۍ د تشخیص لپاره.",
    dopplerTitle: "د رګونو ډاپلر",
    dopplerDesc:
      "د اصلي شریانونو او وریدونو د وینې د جریان د ارزونې لپاره غیر مداخلوي الټراساونډ ازموینه چې په وقایوي کارډیالوژۍ کې مرسته کوي.",
    emergencyTitle: "د زړه عاجله پاملرنه",
    emergencyDesc:
      "د زړه او رګونو پرمختللی ژوند ساتونکی ملاتړ (ACLS) او عاجل غبرګون د خپاره شویو CPR لارښودونو پر بنسټ.",
    more: "نور خدمتونه",
  },

  why: {
    eyebrow: "ولې موږ",
    title: "ولې ناروغان زموږ کلینیک غوره کوي",
    desc: "په افغانستان کې د زړه او رګونو د ځانګړې پاملرنې وړاندې کولو، د طبي زده کړو پرمختګ او د زړه د روغتیا د ښه کولو ته ژمن.",
    verified: "تایید شوي طبي سندونه",
    features: [
      {
        title: "له 25 کلونو ډیر غوره والی",
        desc: "ډاکټر صدیقي د 2001 کال له فراغت راهیسې له دوو لسیزو زیات ژمن طبي کار سره، ځان د افغان کارډیالوژۍ د یوې مخکښې څېرې په توګه ثابت کړی دی.",
      },
      {
        title: "نړیوال تخصص",
        desc: "د اروپا د زړه ټولنې (FESC) د فیلو او د نړیوالې زړه ټولنې د غړي په توګه، ډاکټر صدیقي نړیوال معیارونه محلي پاملرنې ته راوړي.",
      },
      {
        title: "پرمختللی تشخیص",
        desc: "ډاکټر صدیقي په افغانستان کې د منظمې ایکوکارډیوګرافۍ او ECG روزنې مخکښ دی او شخصاً یې له 100 ډیرو ډاکټرانو روزلي دي.",
      },
      {
        title: "د ناروغانو بشپړه پاملرنه",
        desc: "د وقایوي کارډیالوژۍ او د ژوند د سټایل له مدیریت څخه تر عاجلې زړه پاملرنې (ACLS) او مداخلوي پروسیجرونو پورې، موږ بشپړ ډول خدمتونه وړاندې کوو.",
      },
    ],
    ctaTitle: "د خپل زړه په اړه اندیښنې لرئ؟",
    ctaDesc:
      "ډاکټر صدیقي او د آریانا طبي کمپلکس کې د هغه ماهر ټیم ستاسو د مرستې لپاره چمتو دي. مه ځنډوئ — نن د روغ زړه لپاره لومړی ګام پورته کړئ.",
    ctaButton: "موږ سره اړیکه / د ناستې وخت اخیستل",
  },

  aboutPage: {
    heroEyebrow: "مسلکي پروفایل",
    heroName1: "ډاکټر عبدالواحد",
    heroName2: "صدیقي",
    heroDesc:
      "د زړه متخصص، طبي استاد او څېړونکی چې د زړه او رګونو د روغتیايي پاملرنې او طبي زده کړو د پرمختګ لپاره هلې ځلې کوي.",
    tags: ["کارډیالوژي", "طبي زده کړې", "څېړنه"],
    introImgAlt: "ډاکټر عبدالواحد صدیقي",
    introEyebrow: "د ډاکټر په اړه",
    introTitle1: "یو مسلکي مسیر چې د",
    introTitle2: " زړه د روغتیا پرمختګ شاوخوا جوړ شوی.",
    intro1:
      "ډاکټر عبدالواحد صدیقي یو نامتو افغان د زړه متخصص، د پوهنتون استاد او د روغتیايي بنسټونو بنسټګر دی. له دوو لسیزو زیاتې کلینیکي تجربې سره، هغه د زړه په زده کړو کې د خپلې ونډې او د ایکوکارډیوګرافۍ او ECG د منظمو نصابونو د جوړولو له امله پیژندل کیږي چې په ټول افغانستان کې یې له 100 ډیرو ډاکټرانو روزلي دي.",
    intro2: [
      "د هغه تخصص ",
      "مداخلوي کارډیالوژي، وقایوي پاملرنه او د زړه عاجل ژوند ساتونکی ملاتړ (ACLS)",
      " پکې شامل دی. هغه د زړه او رګونو په څېړنو کې هم ونډه اخیستې او په نړیوالو پیژندل شویو ژورنالونو کې، په شمول د امریکا د زړه ټولنې Circulation ژورنال کې یې مقالې خپرې کړې دي.",
    ],
    intro3:
      "ډاکټر صدیقي د کلینیکي کار، څېړنې او طبي زده کړو له لارې ناروغ-محور چلند او د زړه او رګونو د روغتیايي پاملرنې د پایلو ښه کولو ته ژمن دی.",
    journeyEyebrow: "مسلکي سفر",
    journeyTitle: "زده کړې او دنده",
    journeyDesc:
      "د علمي لاسته راوړنو، نړیوالو روزنو او د زړه او رګونو په طب کې د دوامداره ونډې یو سفر.",
    milestone: "د مسلک مهم پړاو",
    timeline: [
      {
        year: "2001",
        title: "د طب دکتورا (MD)",
        desc: "د کابل طبي علومو پوهنتون څخه فارغ شو.",
      },
      {
        year: "2004",
        title: "علمي مسلک",
        desc: "د کابل پوهنتون د زړه په څانګه کې پوهنیار شو.",
      },
      {
        year: "2006",
        title: "داخله طب",
        desc: "په علي آباد تدریسي روغتون کې یې تخصصي روزنه بشپړه کړه.",
      },
      {
        year: "2008",
        title: "د زړه فیلوشیپ",
        desc: "په هالنډ کې یې د زړه پرمختللې روزنه ترلاسه کړه.",
      },
      {
        year: "2011",
        title: "نړیواله روزنه",
        desc: "په سویلي کوریا کې د سیول په پوهنتون کې یې د زړه او رګونو پرمختللې کارونې زده کړې.",
      },
      {
        year: "2017",
        title: "د ماسټرۍ درجه",
        desc: "د تاجکستان د ابن سینا طبي پوهنتون څخه یې د مداخلوي کارډیالوژۍ ماسټرۍ درجه ترلاسه کړه.",
      },
      {
        year: "2022/23",
        title: "اروپايي پېژندنه",
        desc: "د اروپا د زړه ټولنې (FESC) فیلوشیپ ورکړل شو.",
      },
    ],
    expertiseEyebrow: "د تخصص برخې",
    expertiseTitle: "طبي تخصص او ونډې",
    expertise: [
      {
        title: "کلینیکي کارډیالوژي",
        desc: "د زړه او رګونو ناروغیو تشخیص او ناروغ-محوره پاملرنه.",
      },
      {
        title: "ایکوکارډیوګرافي او ECG",
        desc: "د زړه انځورګري او طبي روزنه.",
      },
      {
        title: "مداخلوي کارډیالوژي",
        desc: "د زړه او رګونو تخصصي پروسیجرونه.",
      },
      {
        title: "طبي زده کړې",
        desc: "د راتلونکو ډاکټرانو روزنه او پرمختګ.",
      },
    ],
    instEyebrow: "مشرتابه او لید",
    instTitle: "بنسټونه او نوښتونه",
    instDesc:
      "په ټول افغانستان کې د زړه او رګونو ناروغیو لپاره متمرکزه تخصصي پاملرنه او د نړیوالې کچې روغتیايي زیربنا پراختیا.",
    instImgAlt: "ډاکټر صدیقي د عملیاتو پر مهال",
    institutions: [
      {
        year: "2009",
        name: "آریانا روغتون",
        desc: "د زړه د خدمتونو د پراخولو او تخصصي روزنې د برابرولو لپاره تاسیس شو.",
      },
      {
        year: "2011",
        name: "د افغانستان د ایکو ټولنه",
        desc: "د ایکوکارډیوګرافۍ د زده کړې او مسلکي معیارونو پرمختګ.",
      },
      {
        year: "2014",
        name: "د افغانستان د زړه او رګونو ټولنه",
        desc: "د زړه او رګونو د څېړنو او عامې پوهاوي ودې.",
      },
      {
        year: "2018",
        name: "آریانا طبي کمپلکس",
        desc: "د زړه د تخصصي پاملرنې او تشخیص لپاره پرمختللی مرکز.",
      },
    ],
    readFull: "بشپړ پروفایل ولولئ",
    affEyebrow: "نړیواله پېژندنه",
    affTitle: "نړیوال غړیتوب او مسلکي پېژندنه.",
    affDesc:
      "مسلکي فیلوشیپونه او غړیتوبونه چې د زړه او رګونو په طب کې نړیواله ونډه څرګندوي.",
    affLabel: "مسلکي تړاوونه",
    affiliations: [
      { short: "FESC", name: "د اروپا د زړه ټولنه", status: "2022/2023" },
      { short: "WHF", name: "د زړه نړیواله فدراسیون", status: "غړی" },
      { short: "FAPSC", name: "آسیا پېسفیک", status: "فیلو" },
      { short: "FJCS", name: "جاپان", status: "فیلو" },
    ],
    contactEyebrow: "اړیکه ونیسئ",
    contactTitle: "د خپل زړه په اړه اندیښنې لرئ؟",
    contactDesc:
      "ډاکټر صدیقي او د آریانا طبي کمپلکس کې د هغه ماهر ټیم ستاسو د مرستې لپاره چمتو دي. نن د روغ زړه لپاره لومړی ګام پورته کړئ.",
    location: "کابل، افغانستان",
    contactButton: "موږ سره اړیکه / د ناستې وخت اخیستل",
  },

  servicesPage: {
    title1: "زموږ طبي ",
    title2: "خدمتونه",
    desc: "د آریانا طبي کمپلکس کې، موږ د پرمختللې ټیکنالوژۍ او نړیوالو پیژندل شویو پروتوکولونو په کارولو سره د زړه او رګونو بشپړ ډول پاملرنه وړاندې کوو.",
    items: [
      {
        title: "مداخلوي کارډیالوژي",
        desc: "د زړه او رګونو پرمختللې کارونې، په شمول د زړه کاتیتریزیشن او د مزمنې کرونري شریان ناروغۍ لپاره لږ مداخلوي پروسیجرونه.",
      },
      {
        title: "ایکوکارډیوګرافي",
        desc: "د زړه د جوړښتي ناروغیو، کارډیومیوپاتیو او زیږنديزو حالتونو لپاره پرمختللې تشخیصي انځورګري. له 100 ډیرو ډاکټرانو لپاره منظمه روزنه جوړه شوې ده.",
      },
      {
        title: "الکتروکارډیوګرافي (ECG)",
        desc: "د زړه د ضربان بشپړه ارزونه د نړیوالو معیاري پروتوکولونو په کارولو سره چې د کابل طبي علومو پوهنتون لپاره جوړ شوي دي.",
      },
      {
        title: "د رګونو ډاپلر",
        desc: "د اصلي شریانونو او وریدونو د وینې د جریان د ارزونې لپاره غیر مداخلوي الټراساونډ ازموینه چې د رګونو د ناروغیو په ژر تشخیص کې مرسته کوي.",
      },
      {
        title: "وقایوي کارډیالوژي",
        desc: "ناروغ-محوره چلند چې په ژر تشخیص، د ژوند د سټایل مدیریت او د زړه د ناروغۍ د پرمختګ مخنیوي تمرکز کوي.",
      },
      {
        title: "د ماشومانو کارډیالوژي",
        desc: "په ماشومانو کې د زیږنديزې زړه ناروغۍ تخصصي ارزونه او مدیریت، د ژر مداخلې او اوږدمهاله پاملرنې په تمرکز.",
      },
      {
        title: "د زړه د والونو ناروغي",
        desc: "د روماتیزمي والوي زړه ناروغیو متخصصانه مدیریت د پرمختللې انځورګرۍ او شواهدو پر بنسټ د درملنې پلانونو په کارولو سره.",
      },
      {
        title: "د کارډیومیوپاتۍ کلینیک",
        desc: "د زړه د عضلاتو د ناروغیو لپاره تخصصي پاملرنه، په شمول د تشخیصي ارزونې او پرمختللو مدیریتي ستراتیژیو.",
      },
      {
        title: "د زړه عاجله پاملرنه",
        desc: "د زړه او رګونو پرمختللی ژوند ساتونکی ملاتړ (ACLS) او عاجل غبرګون د خپاره شویو CPR لارښودونو او نړیوالو پروتوکولونو پر بنسټ.",
      },
    ],
    ctaTitle: "د متخصص مشورې ته اړتیا لرئ؟",
    ctaDesc:
      "ډاکټر صدیقي د آریانا طبي کمپلکس کې د لیدنې لپاره شتون لري. نن د زړه د ښې روغتیا لپاره لومړی ګام پورته کړئ.",
    ctaButton: "د ناستې وخت اخیستل",
  },

  contactPage: {
    title1: "موږ سره ",
    title2: "اړیکه ونیسئ",
    desc: "موږ سره مستقیم اړیکه ونیسئ یا د آریانا طبي کمپلکس ته راشئ. موږ ستاسو سره د نړیوالې کچې د زړه او رګونو په پاملرنه کې د مرستې لپاره چمتو یو.",
    infoTitle: "د اړیکې معلومات",
    addressLabel: "دقیقه پته",
    addressLine1: "د افشار سیمه، 5 فاز",
    addressLine2: "کابل، افغانستان",
    phoneLabel: "مستقیم اړیکه ونیسئ",
    emailLabel: "د برېښنالیک پته",
    hoursLabel: "د کار ساعتونه",
    hours: "د دوشنبې تر جمعې: 9:00 سهار - 5:00 مازدیګر",
    mapTitle: "د آریانا طبي کمپلکس موقعیت",
    mapName: "آریانا طبي کمپلکس",
    mapAddress: "د افشار سیمه، 5 فاز، کابل، افغانستان",
    formTitle: "د ناستې وخت اخیستل",
    formDesc: "لاندې فورمه ډکه کړئ، زموږ ټیم به ژر درسره اړیکه ونیسي.",
    fullName: "بشپړ نوم *",
    fullNamePh: "احمد احمدي",
    email: "د برېښنالیک پته *",
    phone: "د تلیفون شمېره *",
    specialty: "تخصص غوره کړئ *",
    specialties: [
      "عمومي مشوره",
      "کارډیالوژي",
      "ایکوکارډیوګرافي",
      "ECG / د فشار ازموینه",
    ],
    date: "غوره نېټه *",
    time: "غوره وخت *",
    times: ["سهار (9 - 12)", "مازدیګر (1 - 5)"],
    message: "اضافي پیغام",
    messagePh: "مهرباني وکړئ خپلې نښې یا د راتګ دلیل ولیکئ...",
    submit: "د ناستې غوښتنه",
  },
};

export const translations = { en, fa, ps };
