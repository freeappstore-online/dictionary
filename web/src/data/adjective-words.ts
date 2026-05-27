import type { WordEntry } from "./types";

/** 50 descriptive adjectives */
export const adjectiveWords: WordEntry[] = [
  {
    word: "beautiful",
    phonetic: "/ˈbjuːtɪfʊl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Pleasing the senses or mind aesthetically.", example: "The sunset over the ocean was beautiful.", synonyms: ["gorgeous", "stunning", "lovely", "exquisite"], antonyms: ["ugly", "hideous", "unsightly"] },
    ],
    etymology: "From Middle English 'beautefull', from 'beaute' (beauty) + '-full'.",
    frequency: "common",
  },
  {
    word: "brilliant",
    phonetic: "/ˈbrɪljənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Exceptionally clever or talented.", example: "She is a brilliant scientist with numerous patents.", synonyms: ["genius", "gifted", "exceptional", "outstanding"], antonyms: ["stupid", "dull", "mediocre"] },
      { text: "Very bright; sparkling.", example: "The ring had a brilliant diamond at its center.", synonyms: ["bright", "radiant", "dazzling", "luminous"], antonyms: ["dim", "dull"] },
    ],
    etymology: "From French 'brillant', from Italian 'brillante' meaning sparkling.",
    frequency: "common",
  },
  {
    word: "enormous",
    phonetic: "/ɪˈnɔːrməs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Very large in size, quantity, or extent.", example: "The enormous whale surfaced beside the boat.", synonyms: ["huge", "immense", "vast", "colossal"], antonyms: ["tiny", "minuscule", "small"] },
    ],
    etymology: "From Latin 'enormis' meaning out of the norm, from 'e-' (out of) + 'norma' (pattern).",
    frequency: "common",
  },
  {
    word: "gentle",
    phonetic: "/ˈdʒɛntəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Mild in temperament or behavior; kind.", example: "He has a gentle manner with children and animals.", synonyms: ["tender", "soft", "kind", "mild"], antonyms: ["harsh", "rough", "cruel"] },
    ],
    etymology: "From Old French 'gentil' meaning noble or courteous, from Latin 'gentilis' meaning of the same clan.",
    frequency: "common",
  },
  {
    word: "fierce",
    phonetic: "/fɪərs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Having or displaying an intense or ferocious aggressiveness.", example: "The fierce lion protected its cubs from intruders.", synonyms: ["ferocious", "savage", "intense", "violent"], antonyms: ["gentle", "mild", "calm"] },
    ],
    etymology: "From Old French 'fers' meaning brave or proud, from Latin 'ferus' meaning wild.",
    frequency: "common",
  },
  {
    word: "elegant",
    phonetic: "/ˈɛlɪɡənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Pleasingly graceful and stylish in appearance or manner.", example: "She wore an elegant dress to the gala.", synonyms: ["graceful", "stylish", "refined", "sophisticated"], antonyms: ["clumsy", "inelegant", "crude"] },
    ],
    etymology: "From French 'elegant', from Latin 'elegantem' meaning choice or fine.",
    frequency: "common",
  },
  {
    word: "ancient",
    phonetic: "/ˈeɪnʃənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Belonging to the very distant past.", example: "The ancient ruins told stories of a forgotten civilization.", synonyms: ["old", "archaic", "antique", "primeval"], antonyms: ["modern", "new", "contemporary"] },
    ],
    etymology: "From Old French 'ancien', from Latin 'ante' meaning before.",
    frequency: "common",
  },
  {
    word: "vivid",
    phonetic: "/ˈvɪvɪd/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Producing powerful feelings or strong, clear images in the mind.", example: "She has vivid memories of her childhood home.", synonyms: ["striking", "graphic", "intense", "vibrant"], antonyms: ["vague", "dull", "faint"] },
    ],
    etymology: "From Latin 'vividus' meaning animated or lively, from 'vivere' meaning to live.",
    frequency: "common",
  },
  {
    word: "peculiar",
    phonetic: "/pɪˈkjuːliər/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Strange or odd; unusual.", example: "There was a peculiar smell coming from the basement.", synonyms: ["strange", "odd", "unusual", "bizarre"], antonyms: ["normal", "ordinary", "typical"] },
      { text: "Belonging exclusively to a particular person or place.", example: "Kangaroos are peculiar to Australia.", synonyms: ["distinctive", "characteristic", "unique"], antonyms: ["common", "universal"] },
    ],
    etymology: "From Latin 'peculiaris' meaning of private property, from 'peculium' meaning private property.",
    frequency: "uncommon",
  },
  {
    word: "serene",
    phonetic: "/sɪˈriːn/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Calm, peaceful, and untroubled.", example: "The serene lake reflected the mountains perfectly.", synonyms: ["calm", "peaceful", "tranquil", "placid"], antonyms: ["agitated", "turbulent", "chaotic"] },
    ],
    etymology: "From Latin 'serenus' meaning clear or bright (of weather).",
    frequency: "uncommon",
  },
  {
    word: "ominous",
    phonetic: "/ˈɒmɪnəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Giving the impression that something bad is going to happen.", example: "Dark ominous clouds gathered on the horizon.", synonyms: ["threatening", "menacing", "foreboding", "sinister"], antonyms: ["promising", "auspicious", "encouraging"] },
    ],
    etymology: "From Latin 'ominosus' meaning full of foreboding, from 'omen'.",
    frequency: "uncommon",
  },
  {
    word: "resilient",
    phonetic: "/rɪˈzɪliənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Able to withstand or recover quickly from difficult conditions.", example: "Children are remarkably resilient and adapt to change well.", synonyms: ["tough", "hardy", "adaptable", "durable"], antonyms: ["fragile", "weak", "vulnerable"] },
    ],
    etymology: "From Latin 'resilientem' meaning rebounding, from 'resilire' meaning to jump back.",
    frequency: "uncommon",
  },
  {
    word: "meticulous",
    phonetic: "/mɪˈtɪkjələs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Showing great attention to detail; very careful and precise.", example: "Her meticulous planning ensured the event ran smoothly.", synonyms: ["careful", "precise", "thorough", "painstaking"], antonyms: ["careless", "sloppy", "negligent"] },
    ],
    etymology: "From Latin 'meticulosus' meaning fearful, from 'metus' meaning fear.",
    frequency: "advanced",
  },
  {
    word: "ethereal",
    phonetic: "/ɪˈθɪəriəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Extremely delicate and light in a way that seems not of this world.", example: "The dancer moved with an ethereal grace across the stage.", synonyms: ["delicate", "otherworldly", "heavenly", "celestial"], antonyms: ["earthly", "mundane", "substantial"] },
    ],
    etymology: "From Latin 'aethereus', from Greek 'aitherios' meaning of the upper air.",
    frequency: "advanced",
  },
  {
    word: "candid",
    phonetic: "/ˈkændɪd/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Truthful and straightforward; frank.", example: "She gave a candid assessment of the company's prospects.", synonyms: ["frank", "honest", "direct", "forthright"], antonyms: ["evasive", "dishonest", "guarded"] },
    ],
    etymology: "From Latin 'candidus' meaning white or pure.",
    frequency: "uncommon",
  },
  {
    word: "gregarious",
    phonetic: "/ɡrɪˈɡɛəriəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Fond of company; sociable.", example: "He is a gregarious person who loves hosting dinner parties.", synonyms: ["sociable", "outgoing", "convivial", "affable"], antonyms: ["introverted", "reclusive", "antisocial"] },
    ],
    etymology: "From Latin 'gregarius' meaning of a flock, from 'grex' meaning flock.",
    frequency: "advanced",
  },
  {
    word: "tenacious",
    phonetic: "/tɪˈneɪʃəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Tending to keep a firm hold of something; persistent.", example: "Her tenacious determination helped her finish the marathon.", synonyms: ["persistent", "determined", "resolute", "dogged"], antonyms: ["irresolute", "yielding", "feeble"] },
    ],
    etymology: "From Latin 'tenax' meaning holding fast, from 'tenere' meaning to hold.",
    frequency: "advanced",
  },
  {
    word: "magnificent",
    phonetic: "/mæɡˈnɪfɪsənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Impressively beautiful, elaborate, or extravagant.", example: "The palace was a magnificent example of baroque architecture.", synonyms: ["splendid", "grand", "majestic", "superb"], antonyms: ["humble", "modest", "ordinary"] },
    ],
    etymology: "From Latin 'magnificus' meaning great in deeds, from 'magnus' (great) + 'facere' (to make).",
    frequency: "common",
  },
  {
    word: "obscure",
    phonetic: "/əbˈskjʊər/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Not discovered or known about; uncertain.", example: "The origins of the tradition remain obscure.", synonyms: ["unknown", "unclear", "mysterious", "cryptic"], antonyms: ["clear", "obvious", "well-known"] },
      { text: "Not clearly expressed or easily understood.", example: "The poet's meaning was deliberately obscure.", synonyms: ["vague", "ambiguous", "enigmatic"], antonyms: ["plain", "explicit"] },
    ],
    etymology: "From Old French 'oscur', from Latin 'obscurus' meaning dark.",
    frequency: "uncommon",
  },
  {
    word: "jubilant",
    phonetic: "/ˈdʒuːbɪlənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Feeling or expressing great happiness and triumph.", example: "The jubilant crowd celebrated the team's victory.", synonyms: ["joyful", "triumphant", "elated", "exultant"], antonyms: ["despondent", "sorrowful", "dejected"] },
    ],
    etymology: "From Latin 'jubilare' meaning to shout with joy.",
    frequency: "uncommon",
  },
  {
    word: "nonchalant",
    phonetic: "/ˌnɒnʃəˈlɒnt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Feeling or appearing casually calm and relaxed.", example: "He tried to appear nonchalant despite his nervousness.", synonyms: ["casual", "relaxed", "indifferent", "unconcerned"], antonyms: ["anxious", "concerned", "worried"] },
    ],
    etymology: "From French 'nonchalant', from 'non' (not) + 'chaloir' (to concern).",
    frequency: "advanced",
  },
  {
    word: "diligent",
    phonetic: "/ˈdɪlɪdʒənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Having or showing care and conscientiousness in one's work or duties.", example: "A diligent student always completes assignments on time.", synonyms: ["hardworking", "industrious", "conscientious", "assiduous"], antonyms: ["lazy", "idle", "negligent"] },
    ],
    etymology: "From Latin 'diligentem' meaning attentive or careful, from 'diligere' meaning to esteem highly.",
    frequency: "uncommon",
  },
  {
    word: "eloquent",
    phonetic: "/ˈɛləkwənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Fluent or persuasive in speaking or writing.", example: "The lawyer delivered an eloquent closing argument.", synonyms: ["articulate", "fluent", "expressive", "persuasive"], antonyms: ["inarticulate", "tongue-tied", "mumbling"] },
    ],
    etymology: "From Latin 'eloquentem' meaning speaking out, from 'eloqui' meaning to speak out.",
    frequency: "advanced",
  },
  {
    word: "humble",
    phonetic: "/ˈhʌmbəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Having a modest or low view of one's importance.", example: "Despite his fame, he remained a humble person.", synonyms: ["modest", "unassuming", "meek", "unpretentious"], antonyms: ["arrogant", "proud", "conceited"] },
    ],
    etymology: "From Old French 'humle', from Latin 'humilis' meaning low or lowly, from 'humus' meaning earth.",
    frequency: "common",
  },
  {
    word: "prudent",
    phonetic: "/ˈpruːdənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Acting with or showing care and thought for the future.", example: "It would be prudent to save money for emergencies.", synonyms: ["wise", "sensible", "cautious", "judicious"], antonyms: ["reckless", "foolish", "imprudent"] },
    ],
    etymology: "From Old French 'prudent', from Latin 'prudentem' meaning foreseeing, from 'providere'.",
    frequency: "advanced",
  },
  {
    word: "spontaneous",
    phonetic: "/spɒnˈteɪniəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Performed or occurring as a result of a sudden inner impulse without premeditation.", example: "Their spontaneous road trip turned out to be the best weekend ever.", synonyms: ["impulsive", "unplanned", "impromptu", "instinctive"], antonyms: ["planned", "deliberate", "calculated"] },
    ],
    etymology: "From Late Latin 'spontaneus', from Latin 'sponte' meaning of one's own accord.",
    frequency: "uncommon",
  },
  {
    word: "abundant",
    phonetic: "/əˈbʌndənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Existing or available in large quantities; plentiful.", example: "The garden produced an abundant harvest this year.", synonyms: ["plentiful", "copious", "ample", "bountiful"], antonyms: ["scarce", "sparse", "meager"] },
    ],
    etymology: "From Latin 'abundantem' meaning overflowing, from 'abundare' meaning to overflow.",
    frequency: "uncommon",
  },
  {
    word: "courageous",
    phonetic: "/kəˈreɪdʒəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Not deterred by danger or pain; brave.", example: "The courageous firefighter rescued the family from the burning building.", synonyms: ["brave", "valiant", "bold", "fearless"], antonyms: ["cowardly", "timid", "fearful"] },
    ],
    etymology: "From Old French 'corageus', from 'corage' meaning heart or innermost feelings.",
    frequency: "common",
  },
  {
    word: "skeptical",
    phonetic: "/ˈskɛptɪkəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Not easily convinced; having doubts.", example: "She was skeptical of the salesman's claims.", synonyms: ["doubtful", "dubious", "questioning", "cynical"], antonyms: ["trusting", "credulous", "gullible"] },
    ],
    etymology: "From Greek 'skeptikos' meaning inquiring or reflective, from 'skeptesthai' meaning to look about.",
    frequency: "uncommon",
  },
  {
    word: "tranquil",
    phonetic: "/ˈtræŋkwɪl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Free from disturbance; calm.", example: "They spent the afternoon by the tranquil river.", synonyms: ["calm", "peaceful", "serene", "quiet"], antonyms: ["turbulent", "agitated", "noisy"] },
    ],
    etymology: "From Latin 'tranquillus' meaning quiet or calm.",
    frequency: "uncommon",
  },
  {
    word: "voracious",
    phonetic: "/vəˈreɪʃəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Wanting or devouring great quantities of food or information.", example: "She is a voracious reader who finishes a book every week.", synonyms: ["insatiable", "ravenous", "avid", "greedy"], antonyms: ["moderate", "indifferent"] },
    ],
    etymology: "From Latin 'vorax' meaning greedy, from 'vorare' meaning to devour.",
    frequency: "advanced",
  },
  {
    word: "whimsical",
    phonetic: "/ˈwɪmzɪkəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Playfully quaint or fanciful, especially in an appealing way.", example: "The garden was decorated with whimsical sculptures.", synonyms: ["playful", "fanciful", "quirky", "capricious"], antonyms: ["serious", "practical", "mundane"] },
    ],
    etymology: "From 'whimsy', of uncertain origin, possibly Scandinavian.",
    frequency: "uncommon",
  },
  {
    word: "arduous",
    phonetic: "/ˈɑːrdjuəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Involving or requiring strenuous effort; difficult and tiring.", example: "The arduous climb to the summit took eight hours.", synonyms: ["difficult", "strenuous", "grueling", "laborious"], antonyms: ["easy", "effortless", "simple"] },
    ],
    etymology: "From Latin 'arduus' meaning steep or difficult.",
    frequency: "advanced",
  },
  {
    word: "luminous",
    phonetic: "/ˈluːmɪnəs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Giving off light; bright or shining.", example: "The luminous moon lit up the night sky.", synonyms: ["bright", "shining", "radiant", "glowing"], antonyms: ["dark", "dim", "dull"] },
    ],
    etymology: "From Latin 'luminosus' meaning full of light, from 'lumen' meaning light.",
    frequency: "uncommon",
  },
  {
    word: "austere",
    phonetic: "/ɒˈstɪər/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Severe or strict in manner, attitude, or appearance.", example: "The monastery had an austere atmosphere.", synonyms: ["severe", "stern", "strict", "spartan"], antonyms: ["luxurious", "lavish", "indulgent"] },
    ],
    etymology: "From Old French 'austere', from Latin 'austerus' meaning harsh, from Greek 'austeros' meaning bitter.",
    frequency: "advanced",
  },
  {
    word: "concise",
    phonetic: "/kənˈsaɪs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Giving a lot of information clearly and in a few words; brief but comprehensive.", example: "The professor gave a concise summary of the chapter.", synonyms: ["brief", "succinct", "terse", "pithy"], antonyms: ["verbose", "wordy", "lengthy"] },
    ],
    etymology: "From Latin 'concisus' meaning cut short, from 'concidere' meaning to cut up.",
    frequency: "uncommon",
  },
  {
    word: "fragile",
    phonetic: "/ˈfrædʒaɪl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Easily broken or damaged.", example: "Be careful with that vase; it is very fragile.", synonyms: ["delicate", "breakable", "brittle", "frail"], antonyms: ["sturdy", "robust", "durable"] },
    ],
    etymology: "From Latin 'fragilis' meaning easily broken, from 'frangere' meaning to break.",
    frequency: "common",
  },
  {
    word: "opulent",
    phonetic: "/ˈɒpjʊlənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Ostentatiously rich and luxurious.", example: "The opulent ballroom was decorated with gold leaf and crystal chandeliers.", synonyms: ["luxurious", "lavish", "sumptuous", "extravagant"], antonyms: ["austere", "plain", "modest"] },
    ],
    etymology: "From Latin 'opulentus' meaning wealthy, from 'ops' meaning wealth.",
    frequency: "advanced",
  },
  {
    word: "petulant",
    phonetic: "/ˈpɛtjʊlənt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Childishly sulky or bad-tempered.", example: "The petulant child refused to eat dinner.", synonyms: ["irritable", "peevish", "sulky", "querulous"], antonyms: ["patient", "agreeable", "good-natured"] },
    ],
    etymology: "From Latin 'petulans' meaning impudent, from 'petere' meaning to seek.",
    frequency: "advanced",
  },
  {
    word: "zealous",
    phonetic: "/ˈzɛləs/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Having or showing great energy or enthusiasm in pursuit of a cause or objective.", example: "She is a zealous advocate for environmental protection.", synonyms: ["passionate", "fervent", "enthusiastic", "ardent"], antonyms: ["apathetic", "indifferent", "unenthusiastic"] },
    ],
    etymology: "From Late Latin 'zelosus', from 'zelus' meaning zeal, from Greek 'zelos' meaning ardor.",
    frequency: "advanced",
  },
  {
    word: "subtle",
    phonetic: "/ˈsʌtəl/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "So delicate or precise as to be difficult to analyze or describe.", example: "There was a subtle difference in flavor between the two wines.", synonyms: ["delicate", "fine", "understated", "nuanced"], antonyms: ["obvious", "blatant", "overt"] },
    ],
    etymology: "From Old French 'soutil', from Latin 'subtilis' meaning fine or thin.",
    frequency: "common",
  },
  {
    word: "naive",
    phonetic: "/naɪˈiːv/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Showing a lack of experience, wisdom, or judgment.", example: "It would be naive to think the problem will resolve itself.", synonyms: ["innocent", "unsophisticated", "inexperienced", "gullible"], antonyms: ["worldly", "sophisticated", "cynical"] },
    ],
    etymology: "From French 'naive' meaning natural or innocent, from Latin 'nativus' meaning native.",
    frequency: "uncommon",
  },
  {
    word: "robust",
    phonetic: "/roʊˈbʌst/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Strong and healthy; vigorous.", example: "The company reported robust sales growth in the third quarter.", synonyms: ["strong", "vigorous", "sturdy", "hearty"], antonyms: ["weak", "frail", "fragile"] },
    ],
    etymology: "From Latin 'robustus' meaning oaken or hard, from 'robur' meaning oak or strength.",
    frequency: "uncommon",
  },
  {
    word: "somber",
    phonetic: "/ˈsɒmbər/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Dark or dull in color or tone; gloomy.", example: "The room had a somber atmosphere after hearing the news.", synonyms: ["gloomy", "melancholy", "grave", "solemn"], antonyms: ["cheerful", "bright", "lively"] },
    ],
    etymology: "From French 'sombre' meaning dark or gloomy, probably from Latin 'sub umbra' meaning under shade.",
    frequency: "uncommon",
  },
  {
    word: "exquisite",
    phonetic: "/ɪkˈskwɪzɪt/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Extremely beautiful and delicate.", example: "The museum displayed an exquisite collection of porcelain.", synonyms: ["beautiful", "elegant", "refined", "superb"], antonyms: ["crude", "ugly", "rough"] },
    ],
    etymology: "From Latin 'exquisitus' meaning carefully sought out, from 'exquirere' meaning to search out.",
    frequency: "uncommon",
  },
  {
    word: "enigmatic",
    phonetic: "/ˌɛnɪɡˈmætɪk/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Difficult to interpret or understand; mysterious.", example: "The Mona Lisa's enigmatic smile has fascinated viewers for centuries.", synonyms: ["mysterious", "puzzling", "cryptic", "inscrutable"], antonyms: ["straightforward", "clear", "obvious"] },
    ],
    etymology: "From Greek 'ainigmatikos', from 'ainigma' meaning riddle.",
    frequency: "advanced",
  },
  {
    word: "lethargic",
    phonetic: "/lɪˈθɑːrdʒɪk/",
    partOfSpeech: "adjective",
    definitions: [
      { text: "Affected by a lack of energy or enthusiasm.", example: "The heat made everyone feel lethargic and unmotivated.", synonyms: ["sluggish", "listless", "languid", "drowsy"], antonyms: ["energetic", "lively", "vigorous"] },
    ],
    etymology: "From Greek 'lethargikos', from 'lethargia' meaning forgetfulness, from 'lethe' meaning oblivion.",
    frequency: "advanced",
  },
];
