export type ScriptureRef = {
  label: string;
  text?: string;
  translation?: "ESV";
  url?: string;
};

export type GospelChapter = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  points: string[];
  scriptures: ScriptureRef[];
};

export const GOSPEL_CHAPTERS: GospelChapter[] = [
  {
    id: "god",
    title: "God",
    subtitle: "Holy • righteous • Judge",
    summary:
      "The gospel starts with God: He is holy, righteous, morally perfect, pure, and just. He defines good and will judge evil without compromise.",
    points: [
      "God is holy: set apart from all sin, perfect in purity and truth.",
      "God is righteous: He always does what is right, and His standard is not negotiable.",
      "God is just: He will not clear the guilty by ignoring sin.",
    ],
    scriptures: [
      {
        label: "Isaiah 6:3 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Isaiah+6:3/",
      },
      {
        label: "Habakkuk 1:13 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Habakkuk+1:13/",
      },
      {
        label: "Romans 3:23 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Romans+3:23/",
      },
    ],
  },
  {
    id: "man",
    title: "Man",
    subtitle: "Created to worship • made in God’s image",
    summary:
      "You were made by God and for God. As His image-bearer, your purpose is to glorify Him, worship Him, and enjoy Him forever.",
    points: [
      "Humanity is created in God’s image: real dignity, moral accountability, and a created purpose.",
      "You were made to worship. You will always live for something, and it was designed to befor God.",
      "True life and joy are found in God Himself; sin is turning that worship inward and downward.",
    ],
    scriptures: [
      {
        label: "Genesis 1:27 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Genesis+1:27/",
      },
      {
        label: "Acts 17:28 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Acts+17:28/",
      },
      {
        label: "Psalm 16:11 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Psalm+16:11/",
      },
    ],
  },
  {
    id: "sin",
    title: "Sin",
    subtitle: "Rebellion • guilt • slavery • deserving judgment",
    summary:
      "Sin is not merely mistakes or bad habits, it’s rebellion against God. " +
      "The outcome is not only consequences in this life, " +
      "but what we earn: death and eternal punishment, separation from God in hell.",
    points: [
      "Sin is lawlessness: falling short of God’s standard and breaking His commands.",
      "Sin corrupts the heart, not just behavior; we’re unable to fix ourselves.",
      "The wages of sin is death: what we earn is judgment. Physical death and eternal separation from God in hell.",
    ],
    scriptures: [
      {
        label: "Romans 3:23 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Romans+3:23/",
      },
      {
        label: "Romans 6:23 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Romans+6:23/",
      },
      {
        label: "2 Thessalonians 1:9 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/2+Thessalonians+1:9/",
      },
    ],
  },
  {
    id: "christ",
    title: "Jesus Christ",
    subtitle: "God the Son • true man • sinless Savior",
    summary:
      "Jesus Christ is a real man in history and also truly God. He lived a sinless, perfect life. He humbled Himself: not clinging to His rights, but taking the form of a servant to save sinners.",
    points: [
      "Truly God and truly man: the eternal Son took on humanity without ceasing to be God.",
      "He lived a sinless, perfect life—fully obedient, fulfilling God’s every law.",
      "Though equal with God, He humbled Himself, taking the form of a servant for our salvation.",
    ],
    scriptures: [
      {
        label: "John 1:14 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/John+1:14/",
      },
      {
        label: "Philippians 2:6–8 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Philippians+2:6-8/",
      },
      {
        label: "Hebrews 4:15 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Hebrews+4:15/",
      },
    ],
  },
  {
    id: "cross",
    title: "The Cross",
    subtitle: "Substitution • justice satisfied • mercy offered",
    summary:
      "At the cross, God’s justice and mercy meet: Jesus bears the penalty sinners deserve so that God can forgive sinners without denying justice.",
    points: [
      "Jesus died in the place of sinners. Our guilt is credited to Him. His righteousness is credited to us.",
      "God’s wrath against sin is real; the cross is God’s justice with His mercy.",
      "Forgiveness is purchased, God cannot turn a blind eye to sin; grace is costly.",
    ],
    scriptures: [
      {
        label: "Isaiah 53:6 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Isaiah+53:6/",
      },
      {
        label: "2 Corinthians 5:21 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/2+Corinthians+5:21/",
      },
      {
        label: "Philippians 3:9 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Philippians+3:9/",
      },
    ],
  },
  {
    id: "resurrection",
    title: "Resurrection",
    subtitle: "Historical • bodily • victory and proof",
    summary:
      "Jesus rose bodily from the grave. The resurrection is the historical proof that He is the Savior of the world, our Lord and the Son of God, and that He has real power over death.",
    points: [
      "This is not myth: Christ appeared to many eyewitnesses (including over 500). Christianity stands or falls on this real event.",
      "Believing the resurrection matters: without it, faith is futile and we are still in our sins.",
      "The resurrection shows Christ’s power over death and verifies Him as God’s Son and reigning Lord.",
    ],
    scriptures: [
      {
        label: "1 Corinthians 15:4-6 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/1+Corinthians+15:4-6/",
      },
      {
        label: "1 Corinthians 15:17 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/1+Corinthians+15:17/",
      },
      {
        label: "Acts 2:31-36 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Acts+2:31-36/",
      },
      {
        label: "Romans 1:4 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Romans+1:4/",
      },
    ],
  },
  {
    id: "response",
    title: "Response",
    subtitle: "Repent • believe • follow",
    summary:
      "The gospel is not only information, it is God’s command. God calls you to repent and believe in the Lord Jesus Christ, because He will judge the world in righteousness and has given assurance by raising Jesus from the dead.",
    points: [
      "Repent: turn from sin and self-rule to God. Agreeing with Him about your guilt and need.",
      "Believe: trust in the Lord Jesus Christ alone to save you. His death and resurrection, not your works.",
      "Be saved by grace: God justifies the ungodly through faith. Crediting you with a righteousness not your own, but Christ’s righteousness.",
    ],
    scriptures: [
      {
        label: "Acts 17:30–31 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Acts+17:30-31/",
      },
      {
        label: "Acts 16:31 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Acts+16:31/",
      },
      {
        label: "Romans 4:5 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Romans+4:5/",
      },
      {
        label: "Philippians 3:9 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Philippians+3:9/",
      },
    ],
  },
  {
    id: "assurance",
    title: "Assurance",
    subtitle: "Grace is secure • fruit is real • Christ is sufficient",
    summary:
      "True believers can have assurance—not by trusting their works, but by trusting Christ’s finished work and God’s promises. And real faith produces real fruit.",
    points: [
      "Assurance rests on Christ and God’s Word (not feelings, not a perfect track record).",
      "We don’t do works to earn salvation. Faith that saves is never alone; it produces fruit.",
      "If you’re unsure, look to Christ, believe His promises, and pursue obedience.",
    ],
    scriptures: [
      {
        label: "1 John 2:3–6 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/1+John+2:3-6/",
      },
      {
        label: "James 2:17 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/James+2:17/",
      },
      {
        label: "Philippians 3:9 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Philippians+3:9/",
      },
      {
        label: "Romans 8:1 (ESV)",
        translation: "ESV",
        url: "https://www.esv.org/Romans+8:1/",
      },
    ],
  },
];


