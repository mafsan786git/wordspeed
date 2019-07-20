window.addEventListener('load', init);

//globals
// const levels = {
// 	easy: 5,
// 	medium: 3,
// 	hard: 2,
// };
// const currentLevel = levels.easy;

let time;
let score = 0;
let isPlaying;

//Dom Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//array of words 872 length
const word = [
	'so',
	'aid',
	'for',
	'job',
	'key',
	'may',
	'odd',
	'set',
	'sex',
	'sum',
	'use',
	'via',
	'area',
	'bias',
	'body',
	'bond',
	'bulk',
	'cite',
	'clue',
	'code',
	'copy',
	'core',
	'data',
	'deny',
	'draw',
	'edit',
	'fact',
	'fees',
	'file',
	'form',
	'levy',
	'link',
	'list',
	'main',
	'mean',
	'mode',
	'more',
	'note',
	'pace',
	'plan',
	'plot',
	'plus',
	'rank',
	'rare',
	'role',
	'root',
	'rule',
	'scan',
	'show',
	'site',
	'skim',
	'task',
	'team',
	'term',
	'test',
	'text',
	'tone',
	'vary',
	'view',
	'alter',
	'apply',
	'argue',
	'aware',
	'brief',
	'Burke',
	'cause',
	'chart',
	'cited',
	'civil',
	'claim',
	'class',
	'cycle',
	'draft',
	'equal',
	'error',
	'essay',
	'event',
	'final',
	'focus',
	'frame',
	'funds',
	'genre',
	'goals',
	'grade',
	'graph',
	'hence',
	'image',
	'imply',
	'index',
	'infer',
	'input',
	'irony',
	'items',
	'judge',
	'label',
	'layer',
	'legal',
	'logic',
	'major',
	'media',
	'model',
	'never',
	'norms',
	'occur',
	'order',
	'panel',
	'phase',
	'place',
	'point',
	'posed',
	'prime',
	'prior',
	'prose',
	'prove',
	'quote',
	'range',
	'ratio',
	'refer',
	'rigid',
	'route',
	'scope',
	'score',
	'shift',
	'solve',
	'state',
	'study',
	'style',
	'table',
	'tapes',
	'theme',
	'topic',
	'trace',
	'trait',
	'valid',
	'Visit',
	'voice',
	'access',
	'adults',
	'affect',
	'albeit',
	'always',
	'annual',
	'assert',
	'assess',
	'assume',
	'author',
	'behalf',
	'ceases',
	'clause',
	'common',
	'convey',
	'couple',
	'create',
	'credit',
	'debate',
	'deduce',
	'defend',
	'define',
	'demand',
	'denote',
	'depict',
	'derive',
	'design',
	'detail',
	'detect',
	'device',
	'devise',
	'direct',
	'domain',
	'effect',
	'employ',
	'enable',
	'energy',
	'ensure',
	'estate',
	'ethnic',
	'exceed',
	'expert',
	'export',
	'factor',
	'figure',
	'finite',
	'footer',
	'format',
	'former',
	'gender',
	'global',
	'header',
	'impact',
	'income',
	'inform',
	'injury',
	'insert',
	'intent',
	'issues',
	'labour',
	'likely',
	'locate',
	'manual',
	'margin',
	'mature',
	'medium',
	'mental',
	'method',
	'modify',
	'mutual',
	'normal',
	'notice',
	'notion',
	'offset',
	'oppose',
	'option',
	'output',
	'period',
	'policy',
	'prefix',
	'prompt',
	'pursue',
	'random',
	'rarely',
	'recall',
	'reduce',
	'refine',
	'regime',
	'region',
	'relate',
	'report',
	'reveal',
	'review',
	'revise',
	'scheme',
	'sector',
	'select',
	'series',
	'signal',
	'simile',
	'called',
	'solely',
	'sought',
	'source',
	'sphere',
	'stance',
	'status',
	'stress',
	'styles',
	'survey',
	'target',
	'theory',
	'thesis',
	'unique',
	'verify',
	'vision',
	'visual',
	'volume',
	'abandon',
	'achieve',
	'acronym',
	'address',
	'analogy',
	'analyse',
	'analyze',
	'arrange',
	'aspects',
	'benefit',
	'capable',
	'caption',
	'channel',
	'chapter',
	'clarify',
	'compare',
	'compile',
	'complex',
	'compose',
	'concept',
	'concise',
	'conduct',
	'confirm',
	'consent',
	'consist',
	'consult',
	'contact',
	'contend',
	'context',
	'control',
	'convert',
	'crucial',
	'decades',
	'decline',
	'derived',
	'despite',
	'develop',
	'devoted',
	'diction',
	'discuss',
	'display',
	'dynamic',
	'edition',
	'emerged',
	'erosion',
	'ethical',
	'examine',
	'example',
	'excerpt',
	'exclude',
	'exhibit',
	'explain',
	'explore',
	'extract',
	'factors',
	'feature',
	'federal',
	'formula',
	'founded',
	'general',
	'granted',
	'graphic',
	'heading',
	'ignored',
	'imitate',
	'implies',
	'imposed',
	'include',
	'induced',
	'initial',
	'inquire',
	'invoked',
	'involve',
	'isolate',
	'italics',
	'journal',
	'lecture',
	'liberal',
	'licence',
	'literal',
	'logical',
	'maximum',
	'measure',
	'medical',
	'minimal',
	'minimum',
	'monitor',
	'network',
	'neutral',
	'nuclear',
	'observe',
	'obvious',
	'ongoing',
	'opinion',
	'origins',
	'outline',
	'overall',
	'overlap',
	'passage',
	'passive',
	'pattern',
	'percent',
	'perform',
	'portion',
	'portray',
	'precise',
	'predict',
	'prepare',
	'presume',
	'preview',
	'primary',
	'process',
	'produce',
	'profile',
	'project',
	'promote',
	'propose',
	'purpose',
	'radical',
	'reflect',
	'regular',
	'relaxed',
	'release',
	'removed',
	'request',
	'require',
	'respond',
	'restate',
	'restore',
	'results',
	'revenue',
	'reverse',
	'section',
	'setting',
	'similar',
	'spatial',
	'subject',
	'suggest',
	'summary',
	'support',
	'survive',
	'synonym',
	'tension',
	'thereby',
	'trigger',
	'undergo',
	'unified',
	'uniform',
	'utilise',
	'utility',
	'utilize',
	'vehicle',
	'version',
	'visible',
	'welfare',
	'whereas',
	'whereby',
	'abstract',
	'academic',
	'accurate',
	'adequate',
	'adjacent',
	'advocate',
	'analysis',
	'annotate',
	'apparent',
	'appendix',
	'approach',
	'argument',
	'assemble',
	'assembly',
	'assigned',
	'attached',
	'attained',
	'audience',
	'capacity',
	'category',
	'chemical',
	'citation',
	'coherent',
	'coincide',
	'collapse',
	'comments',
	'compiled',
	'complete',
	'comprise',
	'computer',
	'conceive',
	'conclude',
	'concrete',
	'confined',
	'conflict',
	'consider',
	'constant',
	'consumer',
	'contract',
	'contrary',
	'contrast',
	'credible',
	'criteria',
	'critique',
	'cultural',
	'currency',
	'definite',
	'describe',
	'detected',
	'diminish',
	'discover',
	'disposal',
	'document',
	'domestic',
	'dominant',
	'dramatic',
	'duration',
	'economic',
	'elements',
	'emphasis',
	'enhanced',
	'enormous',
	'entities',
	'equation',
	'estimate',
	'evaluate',
	'evidence',
	'excluded',
	'exercise',
	'explicit',
	'exposure',
	'external',
	'features',
	'fragment',
	'function',
	'identify',
	'ideology',
	'implicit',
	'inclined',
	'indicate',
	'indirect',
	'inferred',
	'inherent',
	'insights',
	'instance',
	'integral',
	'interact',
	'internal',
	'interval',
	'involved',
	'isolated',
	'likewise',
	'location',
	'marginal',
	'metaphor',
	'military',
	'ministry',
	'modified',
	'narrator',
	'negative',
	'notation',
	'obtained',
	'optional',
	'organize',
	'outcomes',
	'overseas',
	'paradigm',
	'parallel',
	'persuade',
	'physical',
	'positive',
	'possible',
	'preclude',
	'previous',
	'priority',
	'probable',
	'property',
	'prospect',
	'protocol',
	'purchase',
	'rational',
	'reaction',
	'recovery',
	'rejected',
	'relevant',
	'reliance',
	'rephrase',
	'required',
	'research',
	'resident',
	'response',
	'retained',
	'revealed',
	'revision',
	'scenario',
	'schedule',
	'security',
	'sequence',
	'somewhat',
	'specific',
	'standard',
	'strategy',
	'succinct',
	'symbolic',
	'timeline',
	'transfer',
	'validity',
	'according',
	'aggregate',
	'ambiguous',
	'amendment',
	'analogous',
	'arbitrary',
	'associate',
	'assurance',
	'attitudes',
	'authentic',
	'authority',
	'available',
	'calculate',
	'challenge',
	'character',
	'classical',
	'classroom',
	'coherence',
	'commenced',
	'commodity',
	'community',
	'compounds',
	'conceived',
	'confirmed',
	'continuum',
	'converted',
	'convinced',
	'corporate',
	'correlate',
	'deduction',
	'determine',
	'deviation',
	'dimension',
	'distorted',
	'diversity',
	'eliminate',
	'emphasize',
	'empirical',
	'equipment',
	'essential',
	'establish',
	'evolution',
	'expansion',
	'financial',
	'formulate',
	'framework',
	'generated',
	'guarantee',
	'highlight',
	'identical',
	'incentive',
	'incidence',
	'influence',
	'institute',
	'integrate',
	'integrity',
	'intensity',
	'intention',
	'interpret',
	'intrinsic',
	'introduce',
	'mechanism',
	'mediation',
	'migration',
	'minimised',
	'narrative',
	'objective',
	'paragraph',
	'perceived',
	'plausible',
	'potential',
	'preceding',
	'predicted',
	'principal',
	'principle',
	'procedure',
	'proofread',
	'published',
	'quotation',
	'reluctant',
	'represent',
	'requisite',
	'resources',
	'specified',
	'speculate',
	'stability',
	'statement',
	'structure',
	'submitted',
	'summarize',
	'suspended',
	'symbolize',
	'technical',
	'technique',
	'temporary',
	'translate',
	'typically',
	'variables',
	'variation',
	'viewpoint',
	'violation',
	'virtually',
	'voluntary',
	'abbreviate',
	'adaptation',
	'adjustment',
	'allocation',
	'anticipate',
	'articulate',
	'assessment',
	'assistance',
	'assumption',
	'attributed',
	'background',
	'brainstorm',
	'categories',
	'chronology',
	'colleagues',
	'commission',
	'commitment',
	'complement',
	'components',
	'conclusion',
	'concurrent',
	'conditions',
	'conference',
	'conformity',
	'consistent',
	'contradict',
	'convention',
	'conversely',
	'correspond',
	'cumulative',
	'definition',
	'depression',
	'dimensions',
	'diminished',
	'discipline',
	'discretion',
	'distortion',
	'equivalent',
	'evaluation',
	'eventually',
	'exaggerate',
	'expository',
	'facilitate',
	'figurative',
	'foreshadow',
	'foundation',
	'frequently',
	'generation',
	'guidelines',
	'hypothesis',
	'identified',
	'illustrate',
	'individual',
	'inevitably',
	'inhibition',
	'innovation',
	'inspection',
	'invariably',
	'investment',
	'irrelevant',
	'minorities',
	'monitoring',
	'motivation',
	'parameters',
	'paraphrase',
	'persistent',
	'phenomenon',
	'philosophy',
	'plagiarism',
	'prohibited',
	'proportion',
	'psychology',
	'registered',
	'reinforced',
	'resolution',
	'restraints',
	'restricted',
	'revolution',
	'simulation',
	'statistics',
	'strategies',
	'subjective',
	'subsequent',
	'subsidiary',
	'substitute',
	'successive',
	'sufficient',
	'synthesize',
	'techniques',
	'technology',
	'transition',
	'ultimately',
	'underlying',
	'undertaken',
	'accompanied',
	'acquisition',
	'alternative',
	'anticipated',
	'application',
	'appropriate',
	'approximate',
	'composition',
	'consequence',
	'constitutes',
	'constraints',
	'controversy',
	'cooperative',
	'demonstrate',
	'distinction',
	'distinguish',
	'encountered',
	'enforcement',
	'environment',
	'established',
	'flexibility',
	'forthcoming',
	'fundamental',
	'furthermore',
	'highlighted',
	'hypothesize',
	'illustrated',
	'immigration',
	'inclination',
	'incorporate',
	'information',
	'initiatives',
	'integration',
	'interaction',
	'investigate',
	'legislation',
	'maintenance',
	'nonetheless',
	'orientation',
	'partnership',
	'perspective',
	'preliminary',
	'presumption',
	'publication',
	'qualitative',
	'regulations',
	'responsible',
	'significant',
	'subordinate',
	'sustainable',
	'termination',
	'traditional',
	'accumulation',
	'acknowledged',
	'appreciation',
	'approximated',
	'characterize',
	'compensation',
	'consequences',
	'considerable',
	'consistently',
	'construction',
	'consultation',
	'contemporary',
	'contribution',
	'coordination',
	'discriminate',
	'displacement',
	'distribution',
	'exploitation',
	'fluctuations',
	'hierarchical',
	'implications',
	'incompatible',
	'incorporated',
	'instructions',
	'intelligence',
	'intermediate',
	'intermittent',
	'intervention',
	'introduction',
	'manipulation',
	'nevertheless',
	'occupational',
	'professional',
	'relationship',
	'significance',
	'substitution',
	'transmission',
	'accommodation',
	'automatically',
	'circumstances',
	'communication',
	'comprehensive',
	'concentration',
	'contradiction',
	'corresponding',
	'differentiate',
	'investigation',
	'justification',
	'participation',
	'practitioners',
	'predominantly',
	'supplementary',
	'administration',
	'characteristic',
	'constitutional',
	'discrimination',
	'implementation',
	'infrastructure',
	'interpretation',
	'transformation',
	'transporttrend',
	'differentiation',
	'notwithstanding',
	'straightforward',
];

//initialize game

function init() {
	// Show number of seconds in UI
	// seconds.innerHTML = currentLevel;
	let wrd = showWord(word);
	if (wrd.length < 5) {
		seconds.innerHTML = 2;
		time = 2 + 1;
	} else if (wrd.length >= 5 && wrd.length < 9) {
		seconds.innerHTML = 3;
		time = 3 + 1;
	} else if (wrd.length >= 9 && wrd.length < 13) {
		seconds.innerHTML = 4;
		time = 4 + 1;
	} else if (wrd.length >= 13 && wrd.length < 16) {
		seconds.innerHTML = 5;
		time = 5 + 1;
	}
	// Load word from array
	//
	//start matching from input
	wordInput.addEventListener('input', startMatch);

	// Call countdown every second
	setInterval(countdown, 1000);
	// Check game status
	setInterval(checkStatus, 50);
}
//start match
function startMatch() {
	// message.innerHTML = wordInput.value;
	if (matchWords()) {
		isPlaying = true;
		let wrd = showWord(word);

		if (wrd.length < 5) {
			seconds.innerHTML = 2;
			time = 2 + 1;
		} else if (wrd.length >= 5 && wrd.length < 9) {
			seconds.innerHTML = 3;
			time = 3 + 1;
		} else if (wrd.length >= 9 && wrd.length < 13) {
			seconds.innerHTML = 4;
			time = 4 + 1;
		} else if (wrd.length >= 13 && wrd.length < 16) {
			seconds.innerHTML = 5;
			time = 5 + 1;
		}

		wordInput.value = '';
		score++;
	}
	// If score is -1, display 0
	if (score === -1) {
		scoreDisplay.innerHTML = 0;
	} else {
		scoreDisplay.innerHTML = score;
	}
}
function matchWords() {
	if (wordInput.value === currentWord.innerHTML) {
		message.innerHTML = 'Correct!!';
		message.style.color = "green";

		return true;
	} else {
		message.innerHTML = '';
		return false;
	}
}
function showWord(word) {
	//generate random array index
	const randIndex = Math.floor(Math.random() * word.length);
	currentWord.innerHTML = word[randIndex].charAt(0).toUpperCase() + word[randIndex].slice(1);
	return currentWord.innerHTML;
}
// Countdown timer
function countdown() {
	if (time > 0) {
		time--;
	} else if (time === 0) {
		isPlaying = false;
	}
	timeDisplay.innerHTML = time;
}
// Check game status

function checkStatus() {
	if (!isPlaying && time === 0) {
		message.innerHTML = 'Game Over';
		message.style.color = "red";
		score = -1;
	}
}
