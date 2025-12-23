export type Passage = {
  id: string;
  reference: string;
  esvUrl: string;
  explain: string[];
};

export type PassageGroup = {
  id: string;
  title: string;
  subtitle: string;
  passages: Passage[];
};

export const GOSPEL_PASSAGE_GROUPS: PassageGroup[] = [
  {
    id: "god",
    title: "God: holy, righteous, Judge",
    subtitle: "Start here: who God is and why that matters for the gospel.",
    passages: [
      {
        id: "isa-6-3",
        reference: "Isaiah 6:3 (ESV)",
        esvUrl: "https://www.esv.org/Isaiah+6:3/",
        explain: [
          "God is not “basically like us, just nicer.” He is holy—morally perfect, totally pure, and completely unlike our sin.",
          "That means sin isn’t a small flaw or “human weakness.” It’s rebellion against the Holy One.",
          "The gospel starts here: if God is holy, we are accountable to Him.",
        ],
      },
      {
        id: "hab-1-13",
        reference: "Habakkuk 1:13 (ESV)",
        esvUrl: "https://www.esv.org/Habakkuk+1:13/",
        explain: [
          "God is not indifferent to evil. He is morally pure, and He will judge sin.",
          "If God is truly just, He can’t wave guilt away. That’s why we need a Savior.",
        ],
      },
      {
        id: "rom-3-23",
        reference: "Romans 3:23 (ESV)",
        esvUrl: "https://www.esv.org/Romans+3:23/",
        explain: [
          "God’s standard is His own glory and holiness. Compared to Him, everyone falls short.",
          "This levels the room: the moral person and the messy person are both guilty before God.",
        ],
      },
    ],
  },
  {
    id: "man",
    title: "Man: created to worship, made in God’s image",
    subtitle: "Why you exist, and why sin is so serious.",
    passages: [
      {
        id: "gen-1-27",
        reference: "Genesis 1:27 (ESV)",
        esvUrl: "https://www.esv.org/Genesis+1:27/",
        explain: [
          "You’re not an accident. You were created by God and made in His image.",
          "That means you have real dignity (you matter) and real accountability (you belong to God).",
        ],
      },
      {
        id: "acts-17-28",
        reference: "Acts 17:28 (ESV)",
        esvUrl: "https://www.esv.org/Acts+17:28/",
        explain: [
          "God isn’t far away—your life depends on Him every moment.",
          "So the gospel isn’t self-improvement; it’s being made right with the God you already live before.",
        ],
      },
      {
        id: "ps-16-11",
        reference: "Psalm 16:11 (ESV)",
        esvUrl: "https://www.esv.org/Psalm+16:11/",
        explain: [
          "The deepest joy people chase is found in God Himself—not in the next upgrade, relationship, or achievement.",
          "Sin turns our worship and desire away from God and toward self and idols.",
        ],
      },
    ],
  },
  {
    id: "sin",
    title: "Sin: guilt, death, hell",
    subtitle: "What we earn by sin and why we can’t rescue ourselves.",
    passages: [
      {
        id: "rom-3-23-sin",
        reference: "Romans 3:23 (ESV)",
        esvUrl: "https://www.esv.org/Romans+3:23/",
        explain: [
          "Sin isn’t just “mistakes.” It’s falling short of God’s glory—His standard.",
          "No one can claim innocence before God; everyone needs mercy.",
        ],
      },
      {
        id: "rom-6-23",
        reference: "Romans 6:23 (ESV)",
        esvUrl: "https://www.esv.org/Romans+6:23/",
        explain: [
          "Wages are what you earn. Sin earns death—God’s judgment, not just bad outcomes in this life.",
          "That’s why the gospel is urgent: guilt leads to judgment unless God saves you.",
        ],
      },
      {
        id: "2th-1-9",
        reference: "2 Thessalonians 1:9 (ESV)",
        esvUrl: "https://www.esv.org/2+Thessalonians+1:9/",
        explain: [
          "Hell is real and eternal—punishment and separation from the Lord.",
          "That makes the cross necessary: only a Savior can deliver you from that judgment.",
        ],
      },
    ],
  },
  {
    id: "christ",
    title: "Jesus Christ: truly God, truly man, sinless",
    subtitle: "A real Savior, not a symbol—perfect life, real humility.",
    passages: [
      {
        id: "john-1-14",
        reference: "John 1:14 (ESV)",
        esvUrl: "https://www.esv.org/John+1:14/",
        explain: [
          "Christianity starts with an event: God took on flesh in the person of Jesus.",
          "Jesus is not an idea or symbol—He entered history as a real man.",
        ],
      },
      {
        id: "phil-2-6-8",
        reference: "Philippians 2:6–8 (ESV)",
        esvUrl: "https://www.esv.org/Philippians+2:6-8/",
        explain: [
          "Jesus didn’t stop being God—yet He humbled Himself and took the role of a servant.",
          "This is the shock of the gospel: the One equal with God came down to save sinners.",
        ],
      },
      {
        id: "heb-4-15",
        reference: "Hebrews 4:15 (ESV)",
        esvUrl: "https://www.esv.org/Hebrews+4:15/",
        explain: [
          "Jesus is sinless. That matters because only a sinless substitute can save guilty people.",
          "He understands weakness, yet He never sinned—He is qualified to represent us.",
        ],
      },
    ],
  },
  {
    id: "cross",
    title: "The Cross: substitution, justice, imputed righteousness",
    subtitle: "How God forgives without ignoring sin.",
    passages: [
      {
        id: "isa-53-6",
        reference: "Isaiah 53:6 (ESV)",
        esvUrl: "https://www.esv.org/Isaiah+53:6/",
        explain: [
          "We all wander. The problem is universal: everyone turns to their own way.",
          "The hope is substitution: God lays our guilt on the servant—pointing to Christ taking our place.",
        ],
      },
      {
        id: "2cor-5-21",
        reference: "2 Corinthians 5:21 (ESV)",
        esvUrl: "https://www.esv.org/2+Corinthians+5:21/",
        explain: [
          "Here’s the exchange: our sin counted to Christ; His righteousness counted to us.",
          "That’s why salvation isn’t “try harder.” It’s a gift bought by Christ’s sacrifice.",
        ],
      },
      {
        id: "phil-3-9-cross",
        reference: "Philippians 3:9 (ESV)",
        esvUrl: "https://www.esv.org/Philippians+3:9/",
        explain: [
          "The righteousness that saves is “not my own.” It comes from God through faith in Christ.",
          "So your confidence can’t be your goodness. It must be Christ’s righteousness credited to you.",
        ],
      },
    ],
  },
  {
    id: "resurrection",
    title: "Resurrection: eyewitness proof, victory over death, verified Son",
    subtitle: "Christianity stands on a real resurrection.",
    passages: [
      {
        id: "1cor-15-4-6",
        reference: "1 Corinthians 15:4–6 (ESV)",
        esvUrl: "https://www.esv.org/1+Corinthians+15:4-6/",
        explain: [
          "The resurrection is public and testable: many witnesses saw the risen Christ, including over 500 people.",
          "Faith isn’t a leap into the dark—it’s trust in something God did in history.",
        ],
      },
      {
        id: "1cor-15-17",
        reference: "1 Corinthians 15:17 (ESV)",
        esvUrl: "https://www.esv.org/1+Corinthians+15:17/",
        explain: [
          "If Jesus didn’t rise, Christianity is false and you’re still guilty before God.",
          "So the resurrection is essential—it’s not an optional add-on.",
        ],
      },
      {
        id: "acts-2-31-36",
        reference: "Acts 2:31–36 (ESV)",
        esvUrl: "https://www.esv.org/Acts+2:31-36/",
        explain: [
          "The risen Jesus is exalted as Lord and Christ—He isn’t only a teacher, He is the reigning King.",
          "That means you’re not just learning tips; you’re being called to submit to the Lord.",
        ],
      },
      {
        id: "rom-1-4",
        reference: "Romans 1:4 (ESV)",
        esvUrl: "https://www.esv.org/Romans+1:4/",
        explain: [
          "The resurrection publicly verifies Jesus as the Son of God in power.",
          "So the gospel isn’t “one path among many.” God has vindicated His Son.",
        ],
      },
    ],
  },
  {
    id: "response",
    title: "Response: repent and believe",
    subtitle: "How God commands people to respond to the gospel.",
    passages: [
      {
        id: "acts-17-30-31",
        reference: "Acts 17:30–31 (ESV)",
        esvUrl: "https://www.esv.org/Acts+17:30-31/",
        explain: [
          "God commands repentance—this isn’t optional advice. It’s a command from your Creator.",
          "Judgment is coming, and the resurrection is God’s proof and warning that Jesus is the appointed Judge.",
        ],
      },
      {
        id: "acts-16-31",
        reference: "Acts 16:31 (ESV)",
        esvUrl: "https://www.esv.org/Acts+16:31/",
        explain: [
          "The call is simple and direct: believe in the Lord Jesus and you will be saved.",
          "That means you stop trusting your improvement plan and you trust a Person—Jesus.",
        ],
      },
      {
        id: "rom-4-5",
        reference: "Romans 4:5 (ESV)",
        esvUrl: "https://www.esv.org/Romans+4:5/",
        explain: [
          "God justifies the ungodly—meaning you don’t clean yourself up first.",
          "Faith is the opposite of earning. It’s depending on Christ instead of depending on works.",
        ],
      },
      {
        id: "phil-3-9-response",
        reference: "Philippians 3:9 (ESV)",
        esvUrl: "https://www.esv.org/Philippians+3:9/",
        explain: [
          "The righteousness you need is “not your own.” You receive it through faith in Christ.",
          "So you respond by abandoning self-trust and resting in Christ alone.",
        ],
      },
    ],
  },
  {
    id: "assurance",
    title: "Assurance: no condemnation, real fruit",
    subtitle: "Confidence rooted in Christ, with fruit that follows.",
    passages: [
      {
        id: "1john-2-3-6",
        reference: "1 John 2:3–6 (ESV)",
        esvUrl: "https://www.esv.org/1+John+2:3-6/",
        explain: [
          "A changed life matters. John says obedience is evidence that you really know God.",
          "This doesn’t earn salvation—it shows grace is changing you.",
        ],
      },
      {
        id: "james-2-17",
        reference: "James 2:17 (ESV)",
        esvUrl: "https://www.esv.org/James+2:17/",
        explain: [
          "A claim of faith that never produces fruit is empty—just words.",
          "The point isn’t perfection, but a real change of direction over time.",
        ],
      },
      {
        id: "phil-3-9-assurance",
        reference: "Philippians 3:9 (ESV)",
        esvUrl: "https://www.esv.org/Philippians+3:9/",
        explain: [
          "Assurance starts with the right righteousness: Christ’s, not yours.",
          "If you try to be accepted by your performance, you’ll never have peace.",
        ],
      },
      {
        id: "rom-8-1",
        reference: "Romans 8:1 (ESV)",
        esvUrl: "https://www.esv.org/Romans+8:1/",
        explain: [
          "If you are in Christ, there is no condemnation—your status before God is changed.",
          "That confidence is rooted in Christ, not in your emotions or your résumé.",
        ],
      },
    ],
  },
];


