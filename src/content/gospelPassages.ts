import { buildEsvUrl } from "../utils/esv";

export type Passage = {
  id: string;
  reference: string;
  esvUrl: string;
  explain: string[];
  // Not direct quotations; plain-English summaries shaped by Puritan-era theology.
  sources?: string[];
};

export type PassageGroup = {
  id: string;
  title: string;
  subtitle: string;
  passages: Passage[];
};

export const GOSPEL_PASSAGE_GROUPS: PassageGroup[] = [
  {
    id: "story-god",
    title: "Story: God (holy, righteous, Judge)",
    subtitle: "Who God is and why the gospel begins with Him.",
    passages: [
      {
        id: "gen-1-1",
        reference: "Genesis 1:1 (ESV)",
        esvUrl: buildEsvUrl("Genesis 1:1 (ESV)"),
        explain: [
          "God is not part of the universe; He made it. That means He owns it and sets the terms for life.",
          "If God is Creator, we are not self-made and self-ruled. We are accountable creatures, not independent masters.",
        ],
        sources: [
          "Stephen Charnock, The Existence and Attributes of God (God as Creator, absolute Lord)",
          "Thomas Watson, A Body of Divinity (God’s sovereignty and our duty to Him)",
        ],
      },
      {
        id: "isa-6-3",
        reference: "Isaiah 6:3 (ESV)",
        esvUrl: buildEsvUrl("Isaiah 6:3 (ESV)"),
        explain: [
          "God’s holiness is not a mild improvement on us; it is blazing moral purity; He is “set apart” from all sin.",
          "When you see God as holy, sin stops looking small. It becomes guilt before the Judge, not just “bad habits.”",
          "The gospel makes sense only after this: a holy God must deal with sin, not overlook it.",
        ],
        sources: [
          "Stephen Charnock, The Existence and Attributes of God (holiness of God)",
          "Richard Sibbes, The Bruised Reed (conviction and comfort under Christ)",
        ],
      },
      {
        id: "hab-1-13",
        reference: "Habakkuk 1:13 (ESV)",
        esvUrl: buildEsvUrl("Habakkuk 1:13 (ESV)"),
        explain: [
          "God is not morally indifferent. His purity means He cannot approve evil or treat guilt as harmless.",
          "If God is truly just, forgiveness cannot be a shrug. The gospel must answer the question: how can God pardon and still be righteous?",
        ],
        sources: [
          "Stephen Charnock, The Existence and Attributes of God (justice and purity)",
          "John Owen, The Death of Death in the Death of Christ (justice satisfied in atonement)",
        ],
      },
      {
        id: "rom-3-23",
        reference: "Romans 3:23 (ESV)",
        esvUrl: buildEsvUrl("Romans 3:23 (ESV)"),
        explain: [
          "God’s standard is not “better than average.” It is His own glory and holiness; and everyone comes up short.",
          "This levels the room: the respectable sinner and the scandalous sinner both need mercy from the same Judge.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (law exposing sin; universal guilt)",
          "Thomas Brooks, Precious Remedies Against Satan’s Devices (self-deceit about sin)",
        ],
      },
    ],
  },
  {
    id: "story-man",
    title: "Story: Man (created to worship, made in God’s image)",
    subtitle: "Why you exist, and why sin is personal and serious.",
    passages: [
      {
        id: "gen-1-27",
        reference: "Genesis 1:27 (ESV)",
        esvUrl: buildEsvUrl("Genesis 1:27 (ESV)"),
        explain: [
          "You are not an accident. God made you in His image; meaning you have real dignity and real responsibility before Him.",
          "Sin is not just breaking rules; it is dishonoring the God whose image you bear.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (image of God; duty and dignity)",
          "William Perkins, A Golden Chain (human purpose under God’s rule)",
        ],
      },
      {
        id: "acts-17-28",
        reference: "Acts 17:28 (ESV)",
        esvUrl: buildEsvUrl("Acts 17:28 (ESV)"),
        explain: [
          "God is not far away. Every breath depends on Him; so every life is lived before Him, whether we admit it or not.",
          "That’s why the gospel is not a self-help program. It is reconciliation with the God you already owe everything to.",
        ],
        sources: [
          "Stephen Charnock, The Existence and Attributes of God (dependence on God)",
          "Richard Baxter, The Reformed Pastor (urgent dealing with God as we truly are)",
        ],
      },
      {
        id: "ps-16-11",
        reference: "Psalm 16:11 (ESV)",
        esvUrl: buildEsvUrl("Psalm 16:11 (ESV)"),
        explain: [
          "The deepest joy people chase is found in God Himself: His presence, His favor, His fellowship.",
          "Sin is the heart turning away from that true happiness and chasing broken joys that cannot satisfy.",
        ],
        sources: [
          "Jeremiah Burroughs, The Rare Jewel of Christian Contentment (contentment in God)",
          "Richard Sibbes, The Bruised Reed (sweetness of Christ to the weary)",
        ],
      },
    ],
  },
  {
    id: "story-sin",
    title: "Story: Sin (guilt, death, hell)",
    subtitle: "What sin earns, and why we cannot rescue ourselves.",
    passages: [
      {
        id: "rom-3-23-sin",
        reference: "Romans 3:23 (ESV)",
        esvUrl: buildEsvUrl("Romans 3:23 (ESV)"),
        explain: [
          "Sin is not merely mistakes. It is falling short of God’s glory; His rightful claim over us.",
          "When God is the standard, “good enough” disappears. Everyone needs grace, not excuses.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (sin defined by God’s law)",
          "Thomas Brooks, Heaven on Earth (false peace vs true conviction)",
        ],
      },
      {
        id: "rom-6-23",
        reference: "Romans 6:23 (ESV)",
        esvUrl: buildEsvUrl("Romans 6:23 (ESV)"),
        explain: [
          "Sin pays wages. What we earn is death: God’s judgment, not merely consequences inside this world.",
          "That makes the gospel urgent: the problem is not “low self-esteem,” but guilt before God and the sentence that follows.",
        ],
        sources: [
          "Richard Baxter, A Call to the Unconverted (urgency of repentance)",
          "Thomas Watson, A Body of Divinity (curse of sin; need of Christ)",
        ],
      },
      {
        id: "2th-1-9",
        reference: "2 Thessalonians 1:9 (ESV)",
        esvUrl: buildEsvUrl("2 Thessalonians 1:9 (ESV)"),
        explain: [
          "Judgment is real and lasting: separation from the Lord and the loss of His favor.",
          "If sin deserves this, then the cross is not decoration; it is necessity. Only a Savior can deliver from the coming wrath.",
        ],
        sources: [
          "Richard Baxter, A Call to the Unconverted (warning and mercy)",
          "John Owen, The Mortification of Sin (sin’s seriousness; killing sin)",
        ],
      },
    ],
  },
  {
    id: "story-christ",
    title: "Story: Jesus Christ (truly God, truly man, sinless)",
    subtitle: "A real Savior: God the Son in flesh, without sin.",
    passages: [
      {
        id: "john-1-14",
        reference: "John 1:14 (ESV)",
        esvUrl: buildEsvUrl("John 1:14 (ESV)"),
        explain: [
          "Christianity begins with an event: the eternal Son truly took our nature; God came near in Jesus.",
          "This is not a symbol. God dealt with our problem by sending a real Mediator into history.",
        ],
        sources: [
          "John Flavel, The Fountain of Life (Christ’s person and work)",
          "Richard Sibbes, The Bruised Reed (Christ’s gentleness to sinners)",
        ],
      },
      {
        id: "phil-2-6-8",
        reference: "Philippians 2:6–8 (ESV)",
        esvUrl: buildEsvUrl("Philippians 2:6-8 (ESV)"),
        explain: [
          "The Son did not stop being God; He humbled Himself by taking the form of a servant and embracing the cross.",
          "The gospel is not “God helps the worthy,” but “God stoops to save the unworthy.”",
        ],
        sources: [
          "John Flavel, The Fountain of Life (Christ’s humiliation)",
          "Thomas Watson, A Body of Divinity (Christ’s condescension and love)",
        ],
      },
      {
        id: "heb-4-15",
        reference: "Hebrews 4:15 (ESV)",
        esvUrl: buildEsvUrl("Hebrews 4:15 (ESV)"),
        explain: [
          "Jesus understands weakness without sharing our guilt. He was tempted, yet without sin.",
          "A guilty person cannot pay another’s debt. A spotless Savior can stand in the sinner’s place.",
        ],
        sources: [
          "John Owen, Hebrews (Christ’s priesthood and sympathy)",
          "Thomas Goodwin, The Heart of Christ (Christ’s compassion for believers)",
        ],
      },
    ],
  },
  {
    id: "story-cross",
    title: "Story: The Cross (substitution, justice, righteousness credited)",
    subtitle: "How God forgives without denying justice.",
    passages: [
      {
        id: "isa-53-6",
        reference: "Isaiah 53:6 (ESV)",
        esvUrl: buildEsvUrl("Isaiah 53:6 (ESV)"),
        explain: [
          "We all wander; sin is universal. Each person chooses their own way instead of God’s.",
          "The hope is substitution: God lays our guilt on the Servant. Salvation is not denial; it is a transfer: our sin to Christ.",
        ],
        sources: [
          "John Owen, The Death of Death in the Death of Christ (substitution)",
          "Thomas Watson, A Body of Divinity (Christ bearing the curse)",
        ],
      },
      {
        id: "2cor-5-21",
        reference: "2 Corinthians 5:21 (ESV)",
        esvUrl: buildEsvUrl("2 Corinthians 5:21 (ESV)"),
        explain: [
          "Here is the great exchange: our sin is counted to Christ; His righteousness is counted to us.",
          "That’s why salvation is not “do better.” It is receiving what Christ achieved and God freely credits to sinners.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (justification; imputed righteousness)",
          "John Owen, The Doctrine of Justification by Faith (righteousness credited)",
        ],
      },
      {
        id: "phil-3-9-cross",
        reference: "Philippians 3:9 (ESV)",
        esvUrl: buildEsvUrl("Philippians 3:9 (ESV)"),
        explain: [
          "The righteousness that saves is “not my own.” It comes from God through faith in Christ.",
          "So assurance can’t rest on your performance. It rests on Christ’s righteousness received by faith.",
        ],
        sources: [
          "John Owen, The Doctrine of Justification by Faith (faith receiving Christ)",
          "Thomas Brooks, A Cabinet of Choice Jewels (resting on Christ, not self)",
        ],
      },
    ],
  },
  {
    id: "story-resurrection",
    title: "Story: Resurrection (historical, bodily, victorious)",
    subtitle: "Christianity stands on a real resurrection.",
    passages: [
      {
        id: "1cor-15-4-6",
        reference: "1 Corinthians 15:4–6 (ESV)",
        esvUrl: buildEsvUrl("1 Corinthians 15:4-6 (ESV)"),
        explain: [
          "The resurrection was public: many witnesses saw the risen Christ, including over 500 at one time.",
          "Faith is not pretending; it is trusting what God has done in history and what He promises because of it.",
        ],
        sources: [
          "John Bunyan, The Resurrection of the Dead (hope grounded in resurrection)",
          "John Flavel, The Fountain of Life (Christ’s vindication)",
        ],
      },
      {
        id: "1cor-15-17",
        reference: "1 Corinthians 15:17 (ESV)",
        esvUrl: buildEsvUrl("1 Corinthians 15:17 (ESV)"),
        explain: [
          "If Christ did not rise, Christianity collapses and guilt remains. The resurrection is God’s public “Yes” to Christ’s work.",
          "So the resurrection is not an optional add-on; it is essential to the gospel.",
        ],
        sources: [
          "John Owen, The Glory of Christ (Christ exalted and vindicated)",
          "Thomas Watson, A Body of Divinity (necessity of Christ’s resurrection)",
        ],
      },
      {
        id: "acts-2-31-36",
        reference: "Acts 2:31–36 (ESV)",
        esvUrl: buildEsvUrl("Acts 2:31-36 (ESV)"),
        explain: [
          "The risen Jesus is exalted as Lord and Christ; He is not only a teacher; He is the reigning King.",
          "That means the gospel calls for surrender: faith is receiving a Savior and bowing to a Lord.",
        ],
        sources: [
          "John Flavel, The Fountain of Life (Christ’s exaltation)",
          "Thomas Watson, A Body of Divinity (Christ as King)",
        ],
      },
      {
        id: "rom-1-4",
        reference: "Romans 1:4 (ESV)",
        esvUrl: buildEsvUrl("Romans 1:4 (ESV)"),
        explain: [
          "The resurrection publicly declares Jesus as the Son of God in power.",
          "So the gospel is not “one path among many.” God has vindicated His Son and commands all to listen to Him.",
        ],
        sources: [
          "John Owen, The Glory of Christ (Christ revealed in power)",
          "Richard Baxter, A Call to the Unconverted (God’s authority over all)",
        ],
      },
    ],
  },
  {
    id: "story-response",
    title: "Story: Response (repent and believe)",
    subtitle: "How God commands people to respond to the gospel.",
    passages: [
      {
        id: "acts-17-30-31",
        reference: "Acts 17:30–31 (ESV)",
        esvUrl: buildEsvUrl("Acts 17:30-31 (ESV)"),
        explain: [
          "God commands repentance; this is not optional advice. It is the Creator’s command to His creatures.",
          "Judgment is coming, and the resurrection is God’s public assurance that Jesus is the appointed Judge.",
        ],
        sources: [
          "Richard Baxter, A Call to the Unconverted (repent and turn)",
          "Thomas Watson, The Doctrine of Repentance (true repentance)",
        ],
      },
      {
        id: "acts-16-31",
        reference: "Acts 16:31 (ESV)",
        esvUrl: buildEsvUrl("Acts 16:31 (ESV)"),
        explain: [
          "The call is simple: believe in the Lord Jesus and you will be saved.",
          "Faith is not confidence in your improvement plan. It is resting on a Person, Jesus Christ, as your only hope.",
        ],
        sources: [
          "John Bunyan, Come, and Welcome, to Jesus Christ (Christ receives sinners)",
          "Thomas Watson, A Body of Divinity (saving faith)",
        ],
      },
      {
        id: "rom-4-5",
        reference: "Romans 4:5 (ESV)",
        esvUrl: buildEsvUrl("Romans 4:5 (ESV)"),
        explain: [
          "God justifies the ungodly; meaning you don’t clean yourself up first and then qualify.",
          "Faith is the opposite of earning. It is leaning on Christ instead of leaning on works.",
        ],
        sources: [
          "John Owen, The Doctrine of Justification by Faith (faith and free grace)",
          "Thomas Watson, A Body of Divinity (grace, not merit)",
        ],
      },
      {
        id: "phil-3-9-response",
        reference: "Philippians 3:9 (ESV)",
        esvUrl: buildEsvUrl("Philippians 3:9 (ESV)"),
        explain: [
          "The righteousness you need is “not your own.” You receive it through faith in Christ.",
          "So the response is to abandon self-trust and rest in Christ alone for acceptance with God.",
        ],
        sources: [
          "John Owen, The Doctrine of Justification by Faith (resting in Christ)",
          "Thomas Brooks, A Cabinet of Choice Jewels (self-righteousness exposed)",
        ],
      },
      {
        id: "rom-8-1-response",
        reference: "Romans 8:1 (ESV)",
        esvUrl: buildEsvUrl("Romans 8:1 (ESV)"),
        explain: [
          "If you are in Christ, there is no condemnation; God’s courtroom verdict has changed.",
          "This comfort is rooted in Christ’s finished work, not in your moods or your record of performance.",
        ],
        sources: [
          "John Owen, Communion with God (assurance grounded in Christ)",
          "Thomas Watson, A Body of Divinity (peace of conscience in justification)",
        ],
      },
    ],
  },

  // --- Questions proof texts (curated, not exhaustive) ---
  {
    id: "wsc-scripture",
    title: "Questions: Scripture (our rule for faith and life)",
    subtitle:
      "Proof texts commonly used to support these questions about Scripture.",
    passages: [
      {
        id: "2tim-3-16-17",
        reference: "2 Timothy 3:16–17 (ESV)",
        esvUrl: buildEsvUrl("2 Timothy 3:16–17 (ESV)"),
        explain: [
          "The Bible is God-breathed: its authority comes from God, not from the church’s approval or our preferences.",
          "Scripture doesn’t only inform; it trains; correcting us and shaping us into people fitted for good works.",
        ],
        sources: [
          "William Perkins, The Art of Prophesying (Scripture’s authority and use)",
          "Richard Baxter, The Reformed Pastor (Word shaping life and ministry)",
        ],
      },
      {
        id: "2pet-1-20-21",
        reference: "2 Peter 1:20–21 (ESV)",
        esvUrl: buildEsvUrl("2 Peter 1:20–21 (ESV)"),
        explain: [
          "Scripture did not originate in human imagination. God spoke through human authors by the Holy Spirit.",
          "That means the Bible is trustworthy: it carries God’s intent and God’s authority.",
        ],
        sources: [
          "William Perkins, The Art of Prophesying (Spirit and Word)",
          "John Owen, The Spirit and the Word (Spirit’s role in revelation and understanding)",
        ],
      },
      {
        id: "ps-19-7-11",
        reference: "Psalm 19:7–11 (ESV)",
        esvUrl: buildEsvUrl("Psalm 19:7–11 (ESV)"),
        explain: [
          "God’s Word revives and restores: it converts the soul and gives wisdom where we are blind.",
          "It both warns and rewards; exposing sin and showing the sweetness of walking with God.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (Word as means of grace)",
          "Thomas Manton, Psalm 119 sermons (sweetness and power of the Word)",
        ],
      },
      {
        id: "john-17-17",
        reference: "John 17:17 (ESV)",
        esvUrl: buildEsvUrl("John 17:17 (ESV)"),
        explain: [
          "God makes people holy by truth; not by vague inspiration. The Word is God’s chosen instrument to sanctify.",
          "So spiritual growth is not mainly technique; it is living under the Word with faith and obedience.",
        ],
        sources: [
          "John Owen, Of the Mortification of Sin (holiness through the Spirit using the Word)",
          "Richard Baxter, The Saints’ Everlasting Rest (Word leading to holiness and hope)",
        ],
      },
    ],
  },
  {
    id: "wsc-god",
    title: "Questions: God (one God, three persons)",
    subtitle:
      "Proof texts commonly used to support these questions about God and the Trinity.",
    passages: [
      {
        id: "deut-6-4",
        reference: "Deuteronomy 6:4 (ESV)",
        esvUrl: buildEsvUrl("Deuteronomy 6:4 (ESV)"),
        explain: [
          "God is one: there is no rival, no equal, and no other true God.",
          "That means worship can’t be divided; God is not first among many, but the only Lord.",
        ],
        sources: [
          "Stephen Charnock, The Existence and Attributes of God (God’s unity and supremacy)",
          "Thomas Watson, A Body of Divinity (first commandment; exclusive worship)",
        ],
      },
      {
        id: "john-4-24",
        reference: "John 4:24 (ESV)",
        esvUrl: buildEsvUrl("John 4:24 (ESV)"),
        explain: [
          "God is Spirit. He is not limited like created things, and He can’t be contained or reduced to an image.",
          "True worship is not mainly location or ritual; it is heart-level worship in truth.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (spiritual worship)",
          "Stephen Charnock, The Existence and Attributes of God (God as Spirit)",
        ],
      },
      {
        id: "matt-28-19",
        reference: "Matthew 28:19 (ESV)",
        esvUrl: buildEsvUrl("Matthew 28:19 (ESV)"),
        explain: [
          "The one Name is shared by Father, Son, and Holy Spirit: one God, three persons.",
          "Christian faith is not generic theism. It is fellowship with the triune God.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (the Trinity)",
          "John Owen, Communion with God (distinct communion with Father, Son, Spirit)",
        ],
      },
      {
        id: "2cor-13-14",
        reference: "2 Corinthians 13:14 (ESV)",
        esvUrl: buildEsvUrl("2 Corinthians 13:14 (ESV)"),
        explain: [
          "Paul blesses the church with grace (from the Son), love (from the Father), and fellowship (by the Spirit).",
          "This is not abstract theology: the Trinity is the shape of Christian comfort and life with God.",
        ],
        sources: [
          "John Owen, Communion with God (life with the triune God)",
          "Thomas Goodwin, The Work of the Holy Spirit in Our Salvation (Spirit’s fellowship)",
        ],
      },
    ],
  },
  {
    id: "wsc-providence",
    title: "Questions; God’s plan and providence",
    subtitle:
      "Proof texts for God’s sovereign plan and His wise governance of all things.",
    passages: [
      {
        id: "eph-1-11",
        reference: "Ephesians 1:11 (ESV)",
        esvUrl: buildEsvUrl("Ephesians 1:11 (ESV)"),
        explain: [
          "God works all things according to His will. History is not random, and your life is not outside His rule.",
          "This doesn’t make us passive; it makes us secure. God is wise and purposeful, even when we can’t see the whole plan.",
        ],
        sources: [
          "Stephen Charnock, The Existence and Attributes of God (wisdom and sovereignty)",
          "John Flavel, The Mystery of Providence (God’s governance in trials)",
        ],
      },
      {
        id: "rom-11-36",
        reference: "Romans 11:36 (ESV)",
        esvUrl: buildEsvUrl("Romans 11:36 (ESV)"),
        explain: [
          "Everything is from God, through God, and to God. He is the source, sustainer, and goal of all things.",
          "That puts us in our place: life is not ultimately about our glory, but His.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (God’s glory as the end of all)",
          "Stephen Charnock, The Existence and Attributes of God (God’s supremacy)",
        ],
      },
      {
        id: "matt-10-29-31",
        reference: "Matthew 10:29–31 (ESV)",
        esvUrl: buildEsvUrl("Matthew 10:29–31 (ESV)"),
        explain: [
          "God’s providence reaches down to sparrows; and up to you. Nothing is overlooked; nothing is outside His care.",
          "This is meant to quiet fear: your Father’s rule is personal, not cold.",
        ],
        sources: [
          "John Flavel, The Mystery of Providence (comfort under providence)",
          "Richard Sibbes, The Bruised Reed (Christ’s tenderness to the fearful)",
        ],
      },
    ],
  },
  {
    id: "wsc-fall",
    title: "Questions: The fall (sin and misery)",
    subtitle:
      "Proof texts for humanity’s fall in Adam, our guilt, corruption, and misery apart from grace.",
    passages: [
      {
        id: "gen-2-16-17",
        reference: "Genesis 2:16–17 (ESV)",
        esvUrl: buildEsvUrl("Genesis 2:16–17 (ESV)"),
        explain: [
          "God gave Adam a real command with a real consequence. Sin is not inevitable fate; it is disobedience to a holy Lord.",
          "The warning shows that God’s rule is just: life under His word brings life; rejecting His word brings death.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (sin as transgression; law and curse)",
          "John Flavel, The Fountain of Life (need for a Mediator after the fall)",
        ],
      },
      {
        id: "rom-5-12",
        reference: "Romans 5:12 (ESV)",
        esvUrl: buildEsvUrl("Romans 5:12 (ESV)"),
        explain: [
          "Sin entered through one man, and death through sin. The Bible treats Adam as a representative head, not a private individual.",
          "This explains why the problem is deeper than bad examples: we are born into a world and a nature damaged by sin.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (original sin and guilt)",
          "John Owen, The Mortification of Sin (indwelling sin’s depth)",
        ],
      },
      {
        id: "eph-2-1-3",
        reference: "Ephesians 2:1–3 (ESV)",
        esvUrl: buildEsvUrl("Ephesians 2:1–3 (ESV)"),
        explain: [
          "Apart from Christ, we are spiritually dead; unable to revive ourselves by effort or good intentions.",
          "Our problem is not only what we do; it is what we are by nature: bent away from God and deserving His wrath.",
        ],
        sources: [
          "Richard Baxter, A Call to the Unconverted (deadness and need of grace)",
          "Thomas Brooks, Precious Remedies (sin’s deceitfulness)",
        ],
      },
    ],
  },
  {
    id: "wsc-christ",
    title: "Questions: Christ (Prophet, Priest, and King)",
    subtitle:
      "Proof texts for Christ’s offices and His work as the only Redeemer.",
    passages: [
      {
        id: "deut-18-15",
        reference: "Deuteronomy 18:15 (ESV)",
        esvUrl: buildEsvUrl("Deuteronomy 18:15 (ESV)"),
        explain: [
          "God promised a greater Prophet; one who would speak God’s word with final authority.",
          "So saving faith listens: Christ does not merely offer advice; He reveals God’s will for our salvation.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (Christ as Prophet)",
          "John Owen, The Glory of Christ (Christ’s authority and revelation)",
        ],
      },
      {
        id: "heb-7-25",
        reference: "Hebrews 7:25 (ESV)",
        esvUrl: buildEsvUrl("Hebrews 7:25 (ESV)"),
        explain: [
          "Jesus saves completely, not halfway, because He lives to intercede. His priesthood is living and lasting.",
          "Believers’ confidence rests not in the strength of their grip on God, but in Christ’s ongoing ministry for them.",
        ],
        sources: [
          "John Owen, Hebrews (Christ’s priesthood and intercession)",
          "Thomas Goodwin, The Heart of Christ (Christ’s continuing care)",
        ],
      },
      {
        id: "ps-110-1-2",
        reference: "Psalm 110:1–2 (ESV)",
        esvUrl: buildEsvUrl("Psalm 110:1–2 (ESV)"),
        explain: [
          "The Messiah reigns at God’s right hand. Christ is not only Savior; He is King over all.",
          "His rule is for the good of His people; subduing enemies and keeping His church.",
        ],
        sources: [
          "John Flavel, The Fountain of Life (Christ’s exaltation and reign)",
          "Thomas Watson, A Body of Divinity (Christ as King)",
        ],
      },
    ],
  },
  {
    id: "wsc-salvation",
    title: "Questions: Salvation applied (calling, faith, justification)",
    subtitle:
      "Proof texts for grace applying redemption: faith, repentance, and justification by Christ.",
    passages: [
      {
        id: "eph-2-8-9",
        reference: "Ephesians 2:8–9 (ESV)",
        esvUrl: buildEsvUrl("Ephesians 2:8–9 (ESV)"),
        explain: [
          "Salvation is by grace, not by achievement. Faith receives; it does not earn.",
          "This kills boasting and comforts the weak: the ground of salvation is God’s gift, not your résumé.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (free grace, not merit)",
          "John Owen, The Doctrine of Justification by Faith (faith receiving Christ)",
        ],
      },
      {
        id: "rom-3-24-26",
        reference: "Romans 3:24–26 (ESV)",
        esvUrl: buildEsvUrl("Romans 3:24–26 (ESV)"),
        explain: [
          "God justifies sinners freely, yet righteously: Christ’s blood satisfies justice so God can pardon without becoming unjust.",
          "The cross shows God’s righteousness; He does not ignore sin; He deals with it in the Substitute.",
        ],
        sources: [
          "John Owen, The Death of Death in the Death of Christ (atonement and justice)",
          "Thomas Watson, A Body of Divinity (justification and satisfaction)",
        ],
      },
      {
        id: "rom-5-1",
        reference: "Romans 5:1 (ESV)",
        esvUrl: buildEsvUrl("Romans 5:1 (ESV)"),
        explain: [
          "Justification brings peace with God; not merely inner calm, but the end of hostility and guilt in God’s courtroom.",
          "This peace comes through faith, because faith unites us to Christ; the Peace-maker.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (peace of conscience)",
          "Thomas Brooks, Heaven on Earth (true peace vs false peace)",
        ],
      },
      {
        id: "watson-repentance-proof",
        reference: "Acts 3:19 (ESV)",
        esvUrl: buildEsvUrl("Acts 3:19 (ESV)"),
        explain: [
          "Repentance is a real turning: not excuses, not penance, but a change of mind and direction toward God.",
          "God promises refreshing mercy to those who turn; repentance is the doorway to comfort, not despair.",
        ],
        sources: [
          "Thomas Watson, The Doctrine of Repentance (turning from sin to God)",
          "Richard Baxter, A Call to the Unconverted (urgent turning and promise of mercy)",
        ],
      },
    ],
  },
  {
    id: "wsc-law",
    title: "Questions; God’s law and the Ten Commandments",
    subtitle:
      "Passages that summarize the moral law and highlight God’s heart for love, truth, and worship.",
    passages: [
      {
        id: "matt-22-37-40",
        reference: "Matthew 22:37–40 (ESV)",
        esvUrl: buildEsvUrl("Matthew 22:37–40 (ESV)"),
        explain: [
          "God’s law is love: wholehearted love for God and real love for neighbor.",
          "This shows how deep sin is: we don’t merely fail rules; we fail love; and we need a changed heart, not a paint job.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (ten commandments and love)",
          "William Gurnall, The Christian in Complete Armour (law and heart warfare)",
        ],
      },
      {
        id: "ex-20-3",
        reference: "Exodus 20:3 (ESV)",
        esvUrl: buildEsvUrl("Exodus 20:3 (ESV)"),
        explain: [
          "The first commandment forbids rivals: God must be God to you, not an accessory.",
          "Idolatry is not only statues; it is the heart trusting, fearing, and loving something more than God.",
        ],
        sources: [
          "Thomas Watson, The Ten Commandments (idolatry of the heart)",
          "Thomas Brooks, Precious Remedies (idols and self-deceit)",
        ],
      },
      {
        id: "ex-20-8",
        reference: "Exodus 20:8 (ESV)",
        esvUrl: buildEsvUrl("Exodus 20:8 (ESV)"),
        explain: [
          "God commands time set apart for worship and rest; not because He needs it, but because we do.",
          "A weekly pattern trains the soul: God is central, and our lives are not meant to be endless self-driven striving.",
        ],
        sources: [
          "Thomas Watson, The Ten Commandments (Sabbath as holy time)",
          "Richard Baxter, The Reformed Pastor (keeping worship central)",
        ],
      },
      {
        id: "rom-13-9-10",
        reference: "Romans 13:9–10 (ESV)",
        esvUrl: buildEsvUrl("Romans 13:9–10 (ESV)"),
        explain: [
          "Love fulfills the law: not love as sentiment, but love that refuses harm and actively seeks neighbor’s good.",
          "This guards against both legalism (rules without love) and lawlessness (love without obedience).",
        ],
        sources: [
          "Thomas Watson, The Ten Commandments (law and love together)",
          "Richard Sibbes, The Bruised Reed (truth with tenderness)",
        ],
      },
    ],
  },
  {
    id: "wsc-sacraments",
    title: "Questions: Sacraments (baptism and the Lord’s Supper)",
    subtitle:
      "Proof texts for Christ’s appointed signs and seals: baptism and communion.",
    passages: [
      {
        id: "acts-2-38-39",
        reference: "Acts 2:38–39 (ESV)",
        esvUrl: buildEsvUrl("Acts 2:38–39 (ESV)"),
        explain: [
          "Baptism is tied to repentance and faith, and God’s covenant promise reaches to households through generations.",
          "The sign doesn’t save by itself; it points to the saving Christ and calls us to embrace Him.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (means of grace; sacraments as signs)",
          "Richard Baxter, The Saints’ Everlasting Rest (ordinances and faith)",
        ],
      },
      {
        id: "rom-6-3-4",
        reference: "Romans 6:3–4 (ESV)",
        esvUrl: buildEsvUrl("Romans 6:3–4 (ESV)"),
        explain: [
          "Baptism pictures union with Christ: sharing in His death to sin and His resurrection life.",
          "The sign calls for reality: a new walk, not a new label only.",
        ],
        sources: [
          "John Owen, The Mortification of Sin (death to sin and new life)",
          "Thomas Watson, A Body of Divinity (sanctification flowing from union with Christ)",
        ],
      },
      {
        id: "1cor-11-23-26",
        reference: "1 Corinthians 11:23–26 (ESV)",
        esvUrl: buildEsvUrl("1 Corinthians 11:23–26 (ESV)"),
        explain: [
          "The Supper proclaims Christ’s death: it’s a preached gospel in bread and cup.",
          "It nourishes faith as we remember and receive Christ by faith, and it points forward to His return.",
        ],
        sources: [
          "Thomas Watson, A Body of Divinity (Lord’s Supper as gospel sign)",
          "John Owen, Communion with God (fellowship with Christ in the means)",
        ],
      },
    ],
  },
  {
    id: "wsc-prayer",
    title: "Questions: Prayer (asking our Father)",
    subtitle:
      "Proof texts for prayer and the Lord’s Prayer as a model for Christian asking.",
    passages: [
      {
        id: "matt-6-9-13",
        reference: "Matthew 6:9–13 (ESV)",
        esvUrl: buildEsvUrl("Matthew 6:9–13 (ESV)"),
        explain: [
          "The Lord’s Prayer teaches priorities: God’s name and kingdom first, then daily needs, forgiveness, and deliverance.",
          "It trains us to pray as children to a Father: reverent, dependent, and hopeful.",
        ],
        sources: [
          "Thomas Manton, Exposition of the Lord’s Prayer (structure and meaning)",
          "Thomas Watson, The Lord’s Prayer (plain and searching application)",
        ],
      },
      {
        id: "phil-4-6-7",
        reference: "Philippians 4:6–7 (ESV)",
        esvUrl: buildEsvUrl("Philippians 4:6–7 (ESV)"),
        explain: [
          "Prayer is the believer’s antidote to anxious spinning: bring requests to God with thanksgiving.",
          "God’s peace is not denial of trouble; it is a guarded heart under God’s fatherly care.",
        ],
        sources: [
          "Jeremiah Burroughs, The Rare Jewel of Christian Contentment (peace under God’s hand)",
          "Richard Sibbes, The Bruised Reed (comfort for the weak)",
        ],
      },
      {
        id: "1john-5-14-15",
        reference: "1 John 5:14–15 (ESV)",
        esvUrl: buildEsvUrl("1 John 5:14–15 (ESV)"),
        explain: [
          "Confidence in prayer rests on God’s will and God’s character, not on our mood.",
          "We ask as children under His word, trusting He hears and wisely answers.",
        ],
        sources: [
          "Thomas Watson, The Lord’s Prayer (confidence and submission)",
          "John Owen, Communion with God (access to the Father through Christ)",
        ],
      },
    ],
  },
];
