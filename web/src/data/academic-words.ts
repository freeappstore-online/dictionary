import type { WordEntry } from "./types";

/** 50 academic words */
export const academicWords: WordEntry[] = [
  {
    word: "analyze",
    phonetic: "/ˈænəlaɪz/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To examine something methodically and in detail.", example: "Scientists analyze data to draw conclusions.", synonyms: ["examine", "investigate", "scrutinize", "dissect"], antonyms: ["ignore", "neglect"] },
    ],
    etymology: "From French 'analyser', from Medieval Latin 'analysis', from Greek 'analusis' meaning a breaking up.",
    frequency: "uncommon",
  },
  {
    word: "hypothesis",
    phonetic: "/haɪˈpɒθəsɪs/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A supposition or proposed explanation made on limited evidence as a starting point for investigation.", example: "The researcher tested her hypothesis through a series of experiments.", synonyms: ["theory", "proposition", "assumption", "conjecture"], antonyms: ["fact", "certainty", "proof"] },
    ],
    etymology: "From Greek 'hupothesis' meaning foundation or base, from 'hupo' (under) + 'thesis' (placing).",
    frequency: "uncommon",
  },
  {
    word: "paradigm",
    phonetic: "/ˈpærədaɪm/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A typical example or pattern of something; a model.", example: "The discovery represented a paradigm shift in physics.", synonyms: ["model", "framework", "pattern", "archetype"], antonyms: [] },
    ],
    etymology: "From Greek 'paradeigma' meaning pattern, from 'paradeiknunai' meaning to show side by side.",
    frequency: "advanced",
  },
  {
    word: "empirical",
    phonetic: "/ɪmˈpɪrɪkəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Based on observation or experience rather than theory or logic.", example: "The study relied on empirical evidence gathered over five years.", synonyms: ["observational", "experimental", "practical", "factual"], antonyms: ["theoretical", "hypothetical", "speculative"] },
    ],
    etymology: "From Latin 'empiricus', from Greek 'empeirikos' meaning experienced.",
    frequency: "advanced",
  },
  {
    word: "synthesize",
    phonetic: "/ˈsɪnθəsaɪz/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To combine components into a connected whole.", example: "The essay synthesizes ideas from multiple sources.", synonyms: ["combine", "integrate", "merge", "unify"], antonyms: ["analyze", "separate", "divide"] },
    ],
    etymology: "From Greek 'sunthesis' meaning composition, from 'suntithenai' meaning to put together.",
    frequency: "advanced",
  },
  {
    word: "abstract",
    phonetic: "/ˈæbstrækt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Existing in thought or as an idea but not having a physical existence.", example: "Justice is an abstract concept that people define differently.", synonyms: ["theoretical", "conceptual", "intangible", "notional"], antonyms: ["concrete", "tangible", "physical"] },
      { text: "A summary of the contents of a book, article, or speech.", example: "Please read the abstract before the full paper.", synonyms: ["summary", "synopsis", "overview"], antonyms: [] },
    ],
    etymology: "From Latin 'abstractus' meaning drawn away, past participle of 'abstrahere'.",
    frequency: "uncommon",
  },
  {
    word: "method",
    phonetic: "/ˈmɛθəd/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A particular procedure for accomplishing something.", example: "The scientific method is fundamental to research.", synonyms: ["approach", "technique", "procedure", "system"], antonyms: [] },
    ],
    etymology: "From Latin 'methodus', from Greek 'methodos' meaning pursuit of knowledge, from 'meta' (after) + 'hodos' (way).",
    frequency: "uncommon",
  },
  {
    word: "significant",
    phonetic: "/sɪɡˈnɪfɪkənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Sufficiently great or important to be worthy of attention.", example: "The study found a significant correlation between diet and health.", synonyms: ["important", "notable", "meaningful", "substantial"], antonyms: ["insignificant", "trivial", "negligible"] },
    ],
    etymology: "From Latin 'significantem' meaning indicating, from 'significare' meaning to signify.",
    frequency: "uncommon",
  },
  {
    word: "consequence",
    phonetic: "/ˈkɒnsɪkwəns/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A result or effect of an action or condition.", example: "One consequence of the policy was increased unemployment.", synonyms: ["result", "outcome", "effect", "repercussion"], antonyms: ["cause", "origin"] },
      { text: "Importance or relevance.", example: "The discovery was of great consequence to the field.", synonyms: ["importance", "significance", "weight"], antonyms: ["insignificance"] },
    ],
    etymology: "From Old French 'consequence', from Latin 'consequentia' meaning following closely.",
    frequency: "uncommon",
  },
  {
    word: "evaluate",
    phonetic: "/ɪˈvæljueɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To form an idea of the amount, number, or value of; assess.", example: "Teachers evaluate student performance throughout the semester.", synonyms: ["assess", "appraise", "judge", "gauge"], antonyms: ["ignore", "disregard"] },
    ],
    etymology: "From French 'evaluer', from 'e-' (out) + 'value'.",
    frequency: "uncommon",
  },
  {
    word: "derive",
    phonetic: "/dɪˈraɪv/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To obtain something from a specified source.", example: "Many English words derive from Latin and Greek.", synonyms: ["obtain", "extract", "gain", "acquire"], antonyms: [] },
      { text: "To base a concept on a logical extension of given facts.", example: "We can derive the formula from first principles.", synonyms: ["deduce", "infer", "conclude"], antonyms: [] },
    ],
    etymology: "From Old French 'deriver', from Latin 'derivare' meaning to lead or draw off water.",
    frequency: "uncommon",
  },
  {
    word: "context",
    phonetic: "/ˈkɒntɛkst/",
    partOfSpeech: "noun",
    definitions: [
      { text: "The circumstances that form the setting for an event or idea.", example: "You need to understand the historical context to appreciate the novel.", synonyms: ["background", "setting", "framework", "environment"], antonyms: [] },
    ],
    etymology: "From Latin 'contextus' meaning a joining together, from 'contexere' meaning to weave together.",
    frequency: "uncommon",
  },
  {
    word: "phenomenon",
    phonetic: "/fɪˈnɒmɪnɒn/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A fact or situation that is observed to exist or happen.", example: "The Northern Lights are a remarkable natural phenomenon.", synonyms: ["occurrence", "event", "happening", "spectacle"], antonyms: [] },
      { text: "A remarkable person, thing, or event.", example: "The band became a cultural phenomenon overnight.", synonyms: ["marvel", "wonder", "sensation", "prodigy"], antonyms: ["commonplace"] },
    ],
    etymology: "From Late Latin 'phaenomenon', from Greek 'phainomenon' meaning that which appears.",
    frequency: "advanced",
  },
  {
    word: "criteria",
    phonetic: "/kraɪˈtɪəriə/",
    partOfSpeech: "noun",
    definitions: [
      { text: "Principles or standards by which something may be judged.", example: "The selection criteria include experience and education.", synonyms: ["standards", "benchmarks", "measures", "guidelines"], antonyms: [] },
    ],
    etymology: "From Greek 'kriterion' meaning means of judging, from 'krites' meaning judge.",
    frequency: "uncommon",
  },
  {
    word: "implicit",
    phonetic: "/ɪmˈplɪsɪt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Implied though not plainly expressed.", example: "There was an implicit understanding between them.", synonyms: ["implied", "unspoken", "tacit", "inferred"], antonyms: ["explicit", "direct", "stated"] },
    ],
    etymology: "From Latin 'implicitus' meaning entangled, from 'implicare' meaning to enfold.",
    frequency: "advanced",
  },
  {
    word: "coherent",
    phonetic: "/koʊˈhɪərənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Logical and consistent; forming a unified whole.", example: "She presented a coherent argument that convinced the panel.", synonyms: ["logical", "consistent", "rational", "lucid"], antonyms: ["incoherent", "confused", "disjointed"] },
    ],
    etymology: "From Latin 'cohaerentem' meaning sticking together, from 'co-' (together) + 'haerere' (to stick).",
    frequency: "advanced",
  },
  {
    word: "fundamental",
    phonetic: "/ˌfʌndəˈmɛntəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Forming a necessary base or core; of central importance.", example: "Freedom of speech is a fundamental right.", synonyms: ["basic", "essential", "core", "primary"], antonyms: ["secondary", "peripheral", "minor"] },
    ],
    etymology: "From Late Latin 'fundamentalis', from Latin 'fundamentum' meaning foundation.",
    frequency: "uncommon",
  },
  {
    word: "perspective",
    phonetic: "/pərˈspɛktɪv/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A particular attitude toward or way of regarding something.", example: "Travel broadened her perspective on the world.", synonyms: ["viewpoint", "outlook", "standpoint", "angle"], antonyms: [] },
      { text: "The art of representing three-dimensional objects on a flat surface.", example: "The painting uses linear perspective to create depth.", synonyms: ["vista", "view", "panorama"], antonyms: [] },
    ],
    etymology: "From Latin 'perspectiva' meaning optical science, from 'perspicere' meaning to look through.",
    frequency: "uncommon",
  },
  {
    word: "interpret",
    phonetic: "/ɪnˈtɜːrprɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To explain the meaning of information or actions.", example: "Scholars interpret ancient texts in many different ways.", synonyms: ["explain", "elucidate", "construe", "decipher"], antonyms: ["misinterpret", "confuse"] },
    ],
    etymology: "From Latin 'interpretari' meaning explain or expound.",
    frequency: "uncommon",
  },
  {
    word: "ambiguous",
    phonetic: "/æmˈbɪɡjuəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Open to more than one interpretation; not having one obvious meaning.", example: "The contract contained several ambiguous clauses.", synonyms: ["vague", "unclear", "equivocal", "nebulous"], antonyms: ["clear", "unambiguous", "definite"] },
    ],
    etymology: "From Latin 'ambiguus' meaning having double meaning, from 'ambigere' meaning to go around.",
    frequency: "advanced",
  },
  {
    word: "correlate",
    phonetic: "/ˈkɒrəleɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To have a mutual relationship or connection between two or more things.", example: "Studies show that exercise correlates with improved mood.", synonyms: ["connect", "associate", "relate", "link"], antonyms: ["disconnect", "separate"] },
    ],
    etymology: "From Medieval Latin 'correlatus', from 'cor-' (together) + 'relatus' (related).",
    frequency: "advanced",
  },
  {
    word: "comprehensive",
    phonetic: "/ˌkɒmprɪˈhɛnsɪv/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Complete; including all or nearly all elements or aspects.", example: "The report provides a comprehensive overview of the industry.", synonyms: ["thorough", "exhaustive", "complete", "all-inclusive"], antonyms: ["partial", "incomplete", "limited"] },
    ],
    etymology: "From Late Latin 'comprehensivus', from Latin 'comprehendere' meaning to grasp.",
    frequency: "uncommon",
  },
  {
    word: "juxtapose",
    phonetic: "/ˌdʒʌkstəˈpoʊz/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To place close together for contrasting effect.", example: "The exhibit juxtaposes modern art with classical sculpture.", synonyms: ["contrast", "compare", "collocate", "adjoin"], antonyms: ["separate", "isolate"] },
    ],
    etymology: "From French 'juxtaposer', from Latin 'juxta' (beside) + French 'poser' (to place).",
    frequency: "advanced",
  },
  {
    word: "subsequent",
    phonetic: "/ˈsʌbsɪkwənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Coming after something in time; following.", example: "Subsequent events proved the decision was correct.", synonyms: ["following", "ensuing", "succeeding", "later"], antonyms: ["previous", "preceding", "prior"] },
    ],
    etymology: "From Latin 'subsequentem' meaning following closely, from 'subsequi' meaning to follow closely.",
    frequency: "uncommon",
  },
  {
    word: "collaborate",
    phonetic: "/kəˈlæbəreɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To work jointly on an activity or project.", example: "The two departments collaborated on the research paper.", synonyms: ["cooperate", "partner", "team up", "unite"], antonyms: ["compete", "oppose"] },
    ],
    etymology: "From Latin 'collaborare', from 'col-' (together) + 'laborare' (to work).",
    frequency: "uncommon",
  },
  {
    word: "elaborate",
    phonetic: "/ɪˈlæbərət/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Involving many carefully arranged parts or details; detailed and complicated.", example: "The chef prepared an elaborate five-course meal.", synonyms: ["detailed", "intricate", "complex", "ornate"], antonyms: ["simple", "plain", "basic"] },
    ],
    etymology: "From Latin 'elaboratus' meaning worked out, from 'e-' (out) + 'laborare' (to work).",
    frequency: "uncommon",
  },
  {
    word: "predominant",
    phonetic: "/prɪˈdɒmɪnənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Present as the strongest or main element.", example: "Blue is the predominant color in the painting.", synonyms: ["dominant", "chief", "principal", "primary"], antonyms: ["minor", "secondary", "subordinate"] },
    ],
    etymology: "From Medieval Latin 'praedominantem', from 'prae' (before) + 'dominare' (to rule).",
    frequency: "advanced",
  },
  {
    word: "allocate",
    phonetic: "/ˈæləkeɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To distribute resources or duties for a particular purpose.", example: "The committee will allocate funds to each department.", synonyms: ["assign", "distribute", "apportion", "designate"], antonyms: ["withhold", "retain"] },
    ],
    etymology: "From Medieval Latin 'allocatus', from 'ad-' (to) + 'locare' (to place).",
    frequency: "uncommon",
  },
  {
    word: "inevitable",
    phonetic: "/ɪnˈɛvɪtəbəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Certain to happen; unavoidable.", example: "Change is inevitable in a growing organization.", synonyms: ["unavoidable", "inescapable", "certain", "assured"], antonyms: ["avoidable", "preventable", "uncertain"] },
    ],
    etymology: "From Latin 'inevitabilis', from 'in-' (not) + 'evitabilis' (avoidable).",
    frequency: "uncommon",
  },
  {
    word: "preliminary",
    phonetic: "/prɪˈlɪmɪnəri/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Denoting an action or event preceding or preparing for the main one.", example: "The preliminary results suggest the treatment is effective.", synonyms: ["initial", "preparatory", "introductory", "opening"], antonyms: ["final", "concluding", "definitive"] },
    ],
    etymology: "From Modern Latin 'praeliminaris', from 'prae' (before) + 'limen' (threshold).",
    frequency: "uncommon",
  },
  {
    word: "accumulate",
    phonetic: "/əˈkjuːmjəleɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To gather together or acquire an increasing amount of.", example: "Dust tends to accumulate on bookshelves.", synonyms: ["gather", "collect", "amass", "stockpile"], antonyms: ["disperse", "scatter", "distribute"] },
    ],
    etymology: "From Latin 'accumulare' meaning to heap up, from 'ad-' (to) + 'cumulare' (to heap).",
    frequency: "uncommon",
  },
  {
    word: "relevant",
    phonetic: "/ˈrɛləvənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Closely connected or appropriate to what is being done or considered.", example: "Please include only information relevant to the case.", synonyms: ["pertinent", "applicable", "germane", "appropriate"], antonyms: ["irrelevant", "unrelated", "immaterial"] },
    ],
    etymology: "From Medieval Latin 'relevantem' meaning raising up, from 'relevare' meaning to raise.",
    frequency: "uncommon",
  },
  {
    word: "constraint",
    phonetic: "/kənˈstreɪnt/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A limitation or restriction.", example: "Budget constraints forced us to cut the project scope.", synonyms: ["restriction", "limitation", "curb", "check"], antonyms: ["freedom", "liberty"] },
    ],
    etymology: "From Old French 'constrainte', from 'constraindre' meaning to compel.",
    frequency: "uncommon",
  },
  {
    word: "diminish",
    phonetic: "/dɪˈmɪnɪʃ/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To make or become less.", example: "The pain will diminish over time with proper treatment.", synonyms: ["decrease", "reduce", "lessen", "decline"], antonyms: ["increase", "grow", "amplify"] },
    ],
    etymology: "From Old French 'diminuer', from Latin 'diminuere' meaning to break into small pieces.",
    frequency: "uncommon",
  },
  {
    word: "sufficient",
    phonetic: "/səˈfɪʃənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Enough; adequate.", example: "We have sufficient evidence to proceed with the case.", synonyms: ["enough", "adequate", "ample", "satisfactory"], antonyms: ["insufficient", "inadequate", "deficient"] },
    ],
    etymology: "From Latin 'sufficientem' meaning meeting the need, from 'sufficere' meaning to supply.",
    frequency: "uncommon",
  },
  {
    word: "acquire",
    phonetic: "/əˈkwaɪər/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To buy or obtain something.", example: "The museum acquired a rare painting from a private collector.", synonyms: ["obtain", "gain", "procure", "secure"], antonyms: ["lose", "forfeit", "surrender"] },
    ],
    etymology: "From Latin 'acquirere' meaning to get in addition, from 'ad-' (to) + 'quaerere' (to seek).",
    frequency: "uncommon",
  },
  {
    word: "consensus",
    phonetic: "/kənˈsɛnsəs/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A general agreement among a group.", example: "The committee reached a consensus on the proposal.", synonyms: ["agreement", "accord", "harmony", "unanimity"], antonyms: ["disagreement", "dissent", "discord"] },
    ],
    etymology: "From Latin 'consensus' meaning agreement, from 'consentire' meaning to feel together.",
    frequency: "uncommon",
  },
  {
    word: "pragmatic",
    phonetic: "/præɡˈmætɪk/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Dealing with things sensibly and realistically, in a way that is based on practical considerations.", example: "She took a pragmatic approach to solving the budget crisis.", synonyms: ["practical", "realistic", "sensible", "rational"], antonyms: ["idealistic", "impractical", "unrealistic"] },
    ],
    etymology: "From Greek 'pragmatikos' meaning fit for business, from 'pragma' meaning deed.",
    frequency: "advanced",
  },
  {
    word: "profound",
    phonetic: "/prəˈfaʊnd/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Very great or intense; having deep meaning.", example: "The book had a profound impact on her worldview.", synonyms: ["deep", "intense", "significant", "far-reaching"], antonyms: ["shallow", "superficial", "trivial"] },
    ],
    etymology: "From Old French 'profond', from Latin 'profundus' meaning deep, vast.",
    frequency: "advanced",
  },
  {
    word: "incentive",
    phonetic: "/ɪnˈsɛntɪv/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A thing that motivates or encourages one to do something.", example: "Tax breaks serve as an incentive for businesses to invest.", synonyms: ["motivation", "stimulus", "encouragement", "inducement"], antonyms: ["deterrent", "disincentive"] },
    ],
    etymology: "From Late Latin 'incentivum' meaning that which sets the tune, from 'incinere' meaning to sing.",
    frequency: "uncommon",
  },
  {
    word: "postulate",
    phonetic: "/ˈpɒstjʊleɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To suggest or assume the existence or truth of something as a basis for reasoning.", example: "Einstein postulated that the speed of light is constant.", synonyms: ["hypothesize", "propose", "assume", "posit"], antonyms: ["disprove", "refute"] },
    ],
    etymology: "From Latin 'postulare' meaning to demand or claim.",
    frequency: "advanced",
  },
  {
    word: "constitute",
    phonetic: "/ˈkɒnstɪtjuːt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To be a component or part of.", example: "These twelve songs constitute the entire album.", synonyms: ["comprise", "compose", "form", "make up"], antonyms: [] },
    ],
    etymology: "From Latin 'constituere' meaning to set up or establish, from 'con-' (together) + 'statuere' (to set).",
    frequency: "uncommon",
  },
  {
    word: "implement",
    phonetic: "/ˈɪmplɪmɛnt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To put a decision, plan, or agreement into effect.", example: "The government plans to implement the new policy next month.", synonyms: ["execute", "enact", "carry out", "apply"], antonyms: ["ignore", "disregard"] },
    ],
    etymology: "From Late Latin 'implementum' meaning a filling up, from 'implere' meaning to fill.",
    frequency: "uncommon",
  },
  {
    word: "versatile",
    phonetic: "/ˈvɜːrsətaɪl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Able to adapt or be adapted to many different functions or activities.", example: "She is a versatile musician who plays five instruments.", synonyms: ["adaptable", "flexible", "multitalented", "resourceful"], antonyms: ["limited", "inflexible", "specialized"] },
    ],
    etymology: "From Latin 'versatilis' meaning turning, revolving, from 'versare' meaning to turn.",
    frequency: "uncommon",
  },
  {
    word: "nuance",
    phonetic: "/ˈnjuːɑːns/",
    partOfSpeech: "noun",
    definitions: [
      { text: "A subtle difference in meaning, expression, or sound.", example: "The nuances of the language are difficult for beginners to grasp.", synonyms: ["subtlety", "shade", "distinction", "refinement"], antonyms: ["obviousness"] },
    ],
    etymology: "From French 'nuance' meaning shade of color, from 'nuer' meaning to shade, from 'nue' meaning cloud.",
    frequency: "advanced",
  },
  {
    word: "mitigate",
    phonetic: "/ˈmɪtɪɡeɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To make something less severe, serious, or painful.", example: "Wearing sunscreen can mitigate the risk of sunburn.", synonyms: ["alleviate", "reduce", "lessen", "diminish"], antonyms: ["aggravate", "intensify", "worsen"] },
    ],
    etymology: "From Latin 'mitigare' meaning to soften, from 'mitis' (soft) + 'agere' (to do).",
    frequency: "advanced",
  },
  {
    word: "substantiate",
    phonetic: "/səbˈstænʃieɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To provide evidence to support or prove the truth of.", example: "The witness was able to substantiate the defendant's alibi.", synonyms: ["verify", "confirm", "corroborate", "validate"], antonyms: ["disprove", "refute", "contradict"] },
    ],
    etymology: "From Medieval Latin 'substantiare' meaning to give substance to.",
    frequency: "advanced",
  },
  {
    word: "facilitate",
    phonetic: "/fəˈsɪlɪteɪt/",
    partOfSpeech: "verb",
    definitions: [
      { text: "To make an action or process easy or easier.", example: "Technology can facilitate communication across long distances.", synonyms: ["ease", "enable", "assist", "expedite"], antonyms: ["hinder", "impede", "obstruct"] },
    ],
    etymology: "From French 'faciliter', from Italian 'facilitare', from Latin 'facilis' meaning easy.",
    frequency: "uncommon",
  },
];
