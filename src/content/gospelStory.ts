import { buildEsvUrl } from "../utils/esv";

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
    subtitle: "Creator • holy • righteous • Judge",
    summary:
      "The gospel starts with God: He is the uncreated Creator of all. He is holy, righteous, morally perfect, pure, and just. He defines good and will judge evil without compromise.",
    points: [
      "God is uncreated: He has no beginning, and He made everything that exists.",
      "God is holy: set apart from all sin, perfect in purity and truth.",
      "God is righteous: He always does what is right, and His standard is not negotiable.",
      "God is just: He will not clear the guilty by ignoring sin.",
    ],
    scriptures: [
      {
        label: "Genesis 1:1 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Genesis 1:1 (ESV)"),
      },
      {
        label: "Isaiah 6:3 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Isaiah 6:3 (ESV)"),
      },
      {
        label: "Habakkuk 1:13 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Habakkuk 1:13 (ESV)"),
      },
      {
        label: "Romans 3:23 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 3:23 (ESV)"),
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
      "Humanity is created in God’s image. We were made to worship.",
      "You will always live for something, and we were designed to live for God.",
      "True life and joy are found in God Himself.",
      "We are accountable for our thoughts and actions."
    ],
    scriptures: [
      {
        label: "Genesis 1:27 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Genesis 1:27 (ESV)"),
      },
      {
        label: "Acts 17:28 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Acts 17:28 (ESV)"),
      },
      {
        label: "Psalm 16:11 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Psalm 16:11 (ESV)"),
      },
    ],
  },
  {
    id: "sin",
    title: "Sin",
    subtitle: "Rebellion • imperfection • slavery",
    summary:
      "Sin is anything we think, say, or do that is not in line with God's perfect standard. " +
      "Sinful behavior not only has consequences in this life, " +
      "but leads to death, eternal punishment, and separation from God in hell.",
    points: [
      "Sin is lawlessness: falling short of God’s perfect standard and breaking His commands.",
      "Sin corrupts the heart, not just behavior; by nature we are fallen and unable to fix ourselves.",
      "The wages of sin is death: what we earn is judgment. Physical death and eternal separation from God in hell.",
    ],
    scriptures: [
      {
        label: "Romans 3:23 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 3:23 (ESV)"),
      },
      {
        label: "Romans 6:23 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 6:23 (ESV)"),
      },
      {
        label: "Romans 5:12 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 5:12 (ESV)"),
      },
      {
        label: "2 Thessalonians 1:9 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("2 Thessalonians 1:9 (ESV)"),
      },
    ],
  },
  {
    id: "christ",
    title: "Jesus Christ",
    subtitle: "God the Son • true man • sinless Savior",
    summary:
      "Jesus Christ is a real man in history and also truly God. He lived a sinless, perfect life. He humbled Himself: not clinging to His rights as God, but taking the form of a servant to save sinners.",
    points: [
      "Truly God and truly man: the eternal Son took on humanity without ceasing to be God.",
      "He lived a sinless, perfect life - fully obedient, fulfilling God’s every law.",
      "Though equal with God, He humbled Himself, taking the form of a servant for our salvation.",
    ],
    scriptures: [
      {
        label: "John 1:14 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("John 1:14 (ESV)"),
      },
      {
        label: "Philippians 2:6–8 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Philippians 2:6-8 (ESV)"),
      },
      {
        label: "Hebrews 4:15 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Hebrews 4:15 (ESV)"),
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
        url: buildEsvUrl("Isaiah 53:6 (ESV)"),
      },
      {
        label: "2 Corinthians 5:21 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("2 Corinthians 5:21 (ESV)"),
      },
      {
        label: "Philippians 3:9 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Philippians 3:9 (ESV)"),
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
        url: buildEsvUrl("1 Corinthians 15:4-6 (ESV)"),
      },
      {
        label: "1 Corinthians 15:17 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("1 Corinthians 15:17 (ESV)"),
      },
      {
        label: "Acts 2:31-36 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Acts 2:31-36 (ESV)"),
      },
      {
        label: "Romans 1:4 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 1:4 (ESV)"),
      },
    ],
  },
  {
    id: "response",
    title: "Response",
    subtitle: "Repent • believe • follow",
    summary:
      "The gospel is not only information, it is God’s command. God calls you to repent and believe in the Lord Jesus Christ, because He will judge the world in righteousness and has given assurance by raising Jesus from the dead. No one responds rightly apart from the new birth He gives.",
    points: [
      "Repent: turn from sin and self-rule to God. Agreeing with Him about your guilt and need.",
      "Believe: trust in the Lord Jesus Christ Himself alone to save you. Not mere agreement with facts, but resting in Him, His death, and His resurrection, not your works.",
      "Assurance: if you have repented and believed in Christ, your confidence is not in your works but in Christ’s righteousness and God’s promise that there is now no condemnation for those who are in Christ Jesus.",
    ],
    scriptures: [
      {
        label: "Acts 17:30–31 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Acts 17:30-31 (ESV)"),
      },
      {
        label: "Acts 16:31 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Acts 16:31 (ESV)"),
      },
      {
        label: "John 3:3 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("John 3:3 (ESV)"),
      },
      {
        label: "Romans 4:5 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 4:5 (ESV)"),
      },
      {
        label: "Philippians 3:9 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Philippians 3:9 (ESV)"),
      },
      {
        label: "Romans 8:1 (ESV)",
        translation: "ESV",
        url: buildEsvUrl("Romans 8:1 (ESV)"),
      },
    ],
  },
];
