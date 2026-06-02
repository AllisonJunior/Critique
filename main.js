const tabs = Array.from(document.querySelectorAll('.navbar__tab'));
const navbarDropdowns = Array.from(document.querySelectorAll('.navbar__dropdown'));
const panels = Array.from(document.querySelectorAll('.panel'));
const navbarHome = document.getElementById('navbar-home');
const exportDataHomeButton = document.getElementById('export-data-home');
const importDataHomeButton = document.getElementById('import-data-home');
const importDataInput = document.getElementById('import-data-input');
const clearLocalStorageHomeButton = document.getElementById('clear-localstorage-home');

const nameInput = document.getElementById('char-name');
const vidaInput = document.getElementById('char-vida');
const staggerInput = document.getElementById('char-stagger');
const speedInput = document.getElementById('char-speed');
const caInput = document.getElementById('char-ca');
const movementInput = document.getElementById('char-movement');
const notesInput = document.getElementById('char-notes');
const clearNotesButton = document.getElementById('clear-char-notes');
const keywordInput = document.getElementById('keyword-new');
const keywordAddButton = document.getElementById('keyword-add');
const keywordRegistryList = document.getElementById('keyword-registry-list');
const effectsNameInput = document.getElementById('effects-name');
const effectsTargetSelect = document.getElementById('effects-target');
const effectsTargetAddButton = document.getElementById('effects-target-add');
const effectsTargetList = document.getElementById('effects-target-list');
const effectsDescriptionInput = document.getElementById('effects-description');
const effectsDescriptionValueField = document.getElementById('effects-description-value-field');
const effectsDescriptionValueInput = document.getElementById('effects-description-value');
const effectsTriggerField = document.getElementById('effects-trigger-field');
const effectsTriggerSelect = document.getElementById('effects-trigger');
const effectsTriggerAddButton = document.getElementById('effects-trigger-add');
const effectsTriggerList = document.getElementById('effects-trigger-list');
const effectsHowField = document.getElementById('effects-how-field');
const effectsHowSelect = document.getElementById('effects-how');
const effectsPropertiesSelect = document.getElementById('effects-properties');
const effectsPropertiesModeInputs = Array.from(document.querySelectorAll('input[name="effects-properties-mode"]'));
const effectsBehaviorInputs = Array.from(document.querySelectorAll('input[name="effects-behavior"]'));
const effectsModifierHowField = document.getElementById('effects-modifier-how-field');
const effectsModifierHowSelect = document.getElementById('effects-modifier-how');
const effectsModifierPropertiesField = document.getElementById('effects-modifier-properties-field');
const effectsModifierPropertiesSelect = document.getElementById('effects-modifier-properties');
const effectsStandardFields = document.getElementById('effects-standard-fields');
const effectsActivationSelect = document.getElementById('effects-activation');
const effectsModifierDefinitionField = document.getElementById('effects-modifier-definition-field');
const effectsModifierDefinitionSelect = document.getElementById('effects-modifier-definition');
const effectsAddButton = document.getElementById('effects-add');
const effectsRegistryList = document.getElementById('effects-registry-list');
const effectsForm = document.getElementById('effects-form');
const effectsPanelHeading = document.querySelector('#efeitos .panel__heading');
const effectsOpenFormButton = document.getElementById('effects-open-form');
const effectsCancelButton = document.getElementById('effects-cancel');
const effectsChooseImageButton = document.getElementById('effects-choose-image');
const effectsRemoveImageButton = document.getElementById('effects-remove-image');
const effectsImageInput = document.getElementById('effects-image');
const effectsImagePreview = document.getElementById('effects-image-preview');
const effectsImagePlaceholder = document.getElementById('effects-image-placeholder');
const createKeywordSelect = document.getElementById('char-keyword-select');
const createKeywordAddButton = document.getElementById('char-keyword-add');
const createKeywordSelectedList = document.getElementById('char-keyword-selected');
const slashInput = document.getElementById('char-slash');
const pierceInput = document.getElementById('char-pierce');
const bluntInput = document.getElementById('char-blunt');
const slashCustomInput = document.getElementById('char-slash-custom');
const pierceCustomInput = document.getElementById('char-pierce-custom');
const bluntCustomInput = document.getElementById('char-blunt-custom');
const chooseImageButton = document.getElementById('choose-image');
const removeImageButton = document.getElementById('remove-image');
const imageInput = document.getElementById('char-image');
const imagePreview = document.getElementById('image-preview');
const imagePlaceholder = document.getElementById('image-placeholder');
const saveButton = document.getElementById('save-character');
let lastSelectedMesaCharacter = '';

const clearCharacterFormButton = document.getElementById('clear-character-form');
const characterList = document.getElementById('character-list');
const characterDetails = document.getElementById('character-details');
const viewerContainer = document.querySelector('.viewer');
const mesaTab = document.querySelector('.navbar__tab[data-target="mesa"]');
const mesaCharacterSelect = document.getElementById('mesa-character');
const mesaSelectContainer = document.querySelector('.mesa__select-container');
const mesaInstanceBar = document.getElementById('mesa-instance-bar');
const mesaLoadCharacterButton = document.getElementById('mesa-load-character');
const mesaStatus = document.getElementById('mesa-status');
const mesaInfo = document.getElementById('mesa-info');
let mesaCharacterImage = document.getElementById('mesa-character-image');
let mesaImagePlaceholder = document.getElementById('mesa-image-placeholder');
const mesaContentWrapper = document.getElementById('mesa-content-wrapper');
const mesaRightContent = document.getElementById('mesa-right-content');
const mesaVerticalSeparator = document.getElementById('mesa-vertical-separator');
const mesaDamageCard = document.getElementById('mesa-damage-card');
const mesaDamageInput = document.getElementById('mesa-damage');
const mesaDamageSlashToggle = document.getElementById('mesa-damage-slash-toggle');
const mesaDamagePierceToggle = document.getElementById('mesa-damage-pierce-toggle');
const mesaDamageBluntToggle = document.getElementById('mesa-damage-blunt-toggle');
let mesaCharacterStaggerOverlay = document.getElementById('mesa-character-stagger-overlay');
const mesaAttackButton = document.getElementById('mesa-attack-button');
const mesaStaggerAttackButton = document.getElementById('mesa-stagger-attack-button');
const mesaLifeAttackButton = document.getElementById('mesa-life-attack-button');
const mesaHealInput = document.getElementById('mesa-heal');
const mesaHealButton = document.getElementById('mesa-heal-button');
const mesaShieldButton = document.getElementById('mesa-shield-button');
const mesaBonusShieldButton = document.getElementById('mesa-bonus-shield-button');
const mesaHealLifeToggle = document.getElementById('mesa-heal-life-toggle');
const mesaHealStaggerToggle = document.getElementById('mesa-heal-stagger-toggle');
const mesaEffectSelect = document.getElementById('mesa-effect-select');
const mesaEffectAddButton = document.getElementById('mesa-effect-add-button');
const mesaEffectsList = document.getElementById('mesa-effects-list');
const mesaCombatEffectsTab = document.getElementById('mesa-combat-effects-tab');
const mesaCombatDescriptionsTab = document.getElementById('mesa-combat-descriptions-tab');
const mesaCombatSinsTab = document.getElementById('mesa-combat-sins-tab');
const mesaCombatEffectsPanel = document.getElementById('mesa-combat-effects-panel');
const mesaCombatDescriptionsPanel = document.getElementById('mesa-combat-descriptions-panel');
const mesaCombatSinsPanel = document.getElementById('mesa-combat-sins-panel');
const mesaCommentsInput = document.getElementById('mesa-comments');
const mesaMpInput = document.getElementById('mesa-mp-value');
const captionModal = document.getElementById('caption-modal');
const captionTitle = document.getElementById('caption-title');
const captionMessage = document.getElementById('caption-message');
const captionCancelButton = document.getElementById('caption-cancel');
const captionConfirmButton = document.getElementById('caption-confirm');
const imageHoverPreview = document.getElementById('image-hover-preview');
const imageHoverPreviewImg = document.getElementById('image-hover-preview-img');
const imageHoverPreviewLabel = document.getElementById('image-hover-preview-label');
const imageHoverPreviewClose = document.getElementById('image-hover-preview-close');
const imageHoverPreviewReset = document.getElementById('image-hover-preview-reset');
const editContent = document.getElementById('edit-content');
const editCharacterSelect = document.getElementById('edit-character-select');
const editEmptyState = document.getElementById('edit-empty-state');
const editCharacterForm = document.getElementById('edit-character-form');
const editNameInput = document.getElementById('edit-char-name');
const editVidaInput = document.getElementById('edit-char-vida');
const editStaggerInput = document.getElementById('edit-char-stagger');
const editSpeedInput = document.getElementById('edit-char-speed');
const editCaInput = document.getElementById('edit-char-ca');
const editMovementInput = document.getElementById('edit-char-movement');
const editNotesInput = document.getElementById('edit-char-notes');
const clearEditNotesButton = document.getElementById('clear-edit-char-notes');
const editKeywordSelect = document.getElementById('edit-char-keyword-select');
const editKeywordAddButton = document.getElementById('edit-char-keyword-add');
const editKeywordSelectedList = document.getElementById('edit-char-keyword-selected');
const editSlashInput = document.getElementById('edit-char-slash');
const editPierceInput = document.getElementById('edit-char-pierce');
const editBluntInput = document.getElementById('edit-char-blunt');
const editSlashCustomInput = document.getElementById('edit-char-slash-custom');
const editPierceCustomInput = document.getElementById('edit-char-pierce-custom');
const editBluntCustomInput = document.getElementById('edit-char-blunt-custom');
const editChooseImageButton = document.getElementById('edit-choose-image');
const editRemoveImageButton = document.getElementById('edit-remove-image');
const editImageInput = document.getElementById('edit-char-image');
const editImagePreview = document.getElementById('edit-image-preview');
const editImagePlaceholder = document.getElementById('edit-image-placeholder');
const editSaveButton = document.getElementById('edit-save-character');

const MESA_COMBAT_TABS = new Set(['effects', 'descriptions', 'sins']);
const MESA_SIN_FIELDS = [
	{ key: 'pride', label: 'Pride', icon: 'res/sins/pride.png' },
	{ key: 'envy', label: 'Envy', icon: 'res/sins/envy.png' },
	{ key: 'wrath', label: 'Wrath', icon: 'res/sins/wrath.png' },
	{ key: 'sloth', label: 'Sloth', icon: 'res/sins/sloth.png' },
	{ key: 'gluttony', label: 'Gluttony', icon: 'res/sins/gluttony.png' },
	{ key: 'lust', label: 'Lust', icon: 'res/sins/lust.png' },
	{ key: 'gloom', label: 'Gloom', icon: 'res/sins/gloom.png' }
];

const mesaSinInputs = Object.fromEntries(
	MESA_SIN_FIELDS.map((sinField) => [sinField.key, document.getElementById(`mesa-sin-${sinField.key}`)])
);

const LOCAL_STORAGE_KEY = 'critique.characters';
const KEYWORDS_STORAGE_KEY = 'critique.keywords';
const EFFECTS_STORAGE_KEY = 'critique.effects';
const MESA_STATE_KEY = 'critique.mesaState';
const MESA_INSTANCES_KEY = 'critique.mesaInstances';
const NO_CHARACTERS_MESSAGE = 'Sem Personagens Criados';
const RESISTANCE_LABELS = {
	'2.0': 'Vulnerável',
	'1.0': 'Normal',
	'0.5': 'Resistente'
};
const EFFECT_TARGET_LABELS = {
	life: 'Reduz Pontos de Vida',
	stagger: 'Reduz Pontos de Stagger',
	'life-and-stagger': 'Reduz Pontos de Vida e Stagger',
	speed: 'Reduz Speed',
	ca: 'Reduz CA',
	none: 'Apenas listagem'
};

const DEFAULT_RESISTANCE_VALUE = '1.0';
const CUSTOM_RESISTANCE_VALUE = 'custom';
const DEFAULT_MESA_DAMAGE_TYPE = 'slash';
const STAGGER_DAMAGE_MULTIPLIER = 2.0;
const DEFAULT_EFFECT_TARGET = 'life';
const DEFAULT_MESA_EFFECT_POWER = 1;
const DEFAULT_MESA_EFFECT_COUNT = 1;
let keywordRegistry = [];
let createSelectedKeywords = [];
let editSelectedKeywords = [];
let effectsRegistry = [];

let selectedImageFile = null;
let previewObjectUrl = '';
let selectedEffectImageFile = null;
let effectPreviewObjectUrl = '';
let editEffectBaseImage = '';
let editingEffectId = '';
let editSelectedImageFile = null;
let editPreviewObjectUrl = '';
let editCharacterBaseImage = '';
let characters = [];
let activeCharacterIndex = 0;
let lastLoadedMesaCharacter = '';
let mesaOpenCharacterNames = [];
let mesaActiveCharacterName = '';
const mesaInitialStatsByCharacter = {};
const mesaEffectAdjustmentInputs = {};
let draggedMesaEffectInstanceId = '';
let dragOverMesaEffectInstanceId = '';
let dragOverMesaEffectInsertAfter = false;
let draggedEffectRegistryId = '';
let dragOverEffectRegistryId = '';
let dragOverEffectRegistryInsertAfter = false;
let captionResolver = null;
let imagePreviewScale = 1;
let imagePreviewOffsetX = 0;
let imagePreviewOffsetY = 0;
let imagePreviewIsDragging = false;
let imagePreviewDragStartX = 0;
let imagePreviewDragStartY = 0;

const mesaDamageTypeControls = [
	{ key: 'slash', input: mesaDamageSlashToggle },
	{ key: 'pierce', input: mesaDamagePierceToggle },
	{ key: 'blunt', input: mesaDamageBluntToggle }
];

function closeNavbarDropdowns() {
	navbarDropdowns.forEach((dropdown) => {
		dropdown.classList.remove('navbar__dropdown--open');
	});
}

function readFileAsDataURL(imageFile) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();

		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(reader.error);
		reader.readAsDataURL(imageFile);
	});
}

function getCharacterData() {
	return {
		nome: nameInput.value.trim(),
		vida: vidaInput.value,
		stagger: staggerInput.value,
		speed: speedInput.value.trim(),
		ca: caInput?.value || '',
		deslocamento: movementInput?.value.trim() || '',
		observacoes: notesInput?.value.trim() || '',
		palavrasChave: [...createSelectedKeywords],
		resistencias: {
			slash: getResistanceControlValue({ select: slashInput, custom: slashCustomInput }),
			pierce: getResistanceControlValue({ select: pierceInput, custom: pierceCustomInput }),
			blunt: getResistanceControlValue({ select: bluntInput, custom: bluntCustomInput })
		},
		imagem: ''
	};
}

function normalizeMesaEffectId(value) {
	return String(value ?? '').trim().toLowerCase();
}

function normalizeEffectTarget(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (normalizedValue === 'stagger') {
		return 'stagger';
	}

	if (normalizedValue === 'speed') {
		return 'speed';
	}

	if (normalizedValue === 'ca' || normalizedValue === 'ac') {
		return 'ca';
	}

	if (normalizedValue === 'movement' || normalizedValue === 'deslocamento' || normalizedValue === 'movimento') {
		return 'movement';
	}

	if (normalizedValue === 'none' || normalizedValue === 'nada') {
		return 'none';
	}

	if (normalizedValue === 'life-and-stagger' || normalizedValue === 'life_and_stagger' || normalizedValue === 'both') {
		return 'life-and-stagger';
	}

	return DEFAULT_EFFECT_TARGET;
}

function normalizeEffectProperties(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (normalizedValue === 'power-and-count') {
		return 'power-and-count';
	}

	if (normalizedValue === 'description' || normalizedValue === 'descricao') {
		return 'description';
	}

	return 'power';
}

function normalizeEffectBehavior(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (
		normalizedValue === 'modifier'
		|| normalizedValue === 'modificador'
		|| normalizedValue === 'effect-activation'
	) {
		return 'modifier';
	}

	if (
		normalizedValue === 'amplifier'
		|| normalizedValue === 'amplificador'
		|| normalizedValue === 'effect-amplifier'
	) {
		return 'amplifier';
	}

	return 'standard';
}

function normalizeEffectHow(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (normalizedValue === 'increase' || normalizedValue === 'aumenta' || normalizedValue === 'up') {
		return 'increase';
	}

	if (normalizedValue === 'reducao' || normalizedValue === 'redução' || normalizedValue === 'reduction') {
		return 'reducao';
	}

	return 'reduce';
}

function normalizeEffectActivation(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (normalizedValue === 'modifier') {
		return 'modifier';
	}

	return 'manual';
}

function normalizeEffectTrigger(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (
		normalizedValue === 'on-hit'
		|| normalizedValue === 'on_hit'
		|| normalizedValue === 'onhit'
		|| normalizedValue === 'damage'
		|| normalizedValue === 'apply-damage'
		|| normalizedValue === 'apply_damage'
		|| normalizedValue === 'aplicar-dano'
		|| normalizedValue === 'aplicar dano'
	) {
		return 'on-hit';
	}

	if (
		normalizedValue === 'effect-activation'
		|| normalizedValue === 'effect_activation'
		|| normalizedValue === 'on-effect-activation'
		|| normalizedValue === 'on_effect_activation'
		|| normalizedValue === 'on effect activation'
	) {
		return 'effect-activation';
	}

	return '';
}

function getEffectTriggerLabel(trigger) {
	const normalizedTrigger = normalizeEffectTrigger(trigger);
	if (normalizedTrigger === 'on-hit') {
		return 'Trigger: On Hit';
	}

	if (normalizedTrigger === 'effect-activation') {
		return 'Trigger: On Effect Activation';
	}

	return '';
}

function normalizeEffectTriggerList(value) {
	const rawValues = Array.isArray(value) ? value : (value == null ? [] : [value]);
	const nextValues = [];
	rawValues.forEach((entry) => {
		const normalizedEntry = normalizeEffectTrigger(entry);
		if (!normalizedEntry || nextValues.includes(normalizedEntry)) {
			return;
		}

		nextValues.push(normalizedEntry);
	});
	return nextValues;
}

function getMesaEffectTriggerValue(effect) {
	if (Array.isArray(effect?.triggers) && effect.triggers.length) {
		return normalizeEffectTrigger(effect.triggers[0]);
	}

	return normalizeEffectTrigger(effect?.trigger);
}

function normalizeEffectModifierDefinition(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (
		normalizedValue === 'heal'
		|| normalizedValue === 'attack-and-heal'
		|| normalizedValue === 'effect-activation'
		|| normalizedValue === 'effect_activation'
		|| normalizedValue === 'efeito'
	) {
		if (normalizedValue === 'effect_activation' || normalizedValue === 'efeito') {
			return 'effect-activation';
		}

		return normalizedValue;
	}

	return 'attack';
}

function doesModifierDefinitionMatchAction(modifierDefinition, action) {
	const normalizedDefinition = normalizeEffectModifierDefinition(modifierDefinition);
	if (action === 'attack') {
		return normalizedDefinition === 'attack' || normalizedDefinition === 'attack-and-heal';
	}

	if (action === 'heal') {
		return normalizedDefinition === 'heal' || normalizedDefinition === 'attack-and-heal';
	}

	if (action === 'effect-activation') {
		return normalizedDefinition === 'effect-activation';
	}

	return false;
}

function parseMesaArithmeticExpression(rawValue) {
	const expression = String(rawValue ?? '').replace(/,/g, '.').trim();
	if (!expression) {
		return null;
	}

	if (!/^[0-9+\-*/().\s.]+$/.test(expression)) {
		return null;
	}

	let index = 0;

	const skipWhitespace = () => {
		while (index < expression.length && /\s/.test(expression[index])) {
			index += 1;
		}
	};

	const parseNumber = () => {
		skipWhitespace();
		const startIndex = index;
		let sawDigit = false;
		let sawDecimalPoint = false;

		while (index < expression.length) {
			const char = expression[index];
			if (char >= '0' && char <= '9') {
				sawDigit = true;
				index += 1;
				continue;
			}

			if (char === '.' && !sawDecimalPoint) {
				sawDecimalPoint = true;
				index += 1;
				continue;
			}

			break;
		}

		if (!sawDigit) {
			return null;
		}

		const parsedNumber = Number.parseFloat(expression.slice(startIndex, index));
		return Number.isFinite(parsedNumber) ? parsedNumber : null;
	};

	const parseFactor = () => {
		skipWhitespace();
		const currentChar = expression[index];

		if (currentChar === '+' || currentChar === '-') {
			index += 1;
			const factor = parseFactor();
			if (factor === null) {
				return null;
			}

			return currentChar === '-' ? -factor : factor;
		}

		if (currentChar === '(') {
			index += 1;
			const innerValue = parseExpression();
			skipWhitespace();
			if (expression[index] !== ')') {
				return null;
			}

			index += 1;
			return innerValue;
		}

		return parseNumber();
	};

	const parseTerm = () => {
		let value = parseFactor();
		if (value === null) {
			return null;
		}

		while (true) {
			skipWhitespace();
			const operator = expression[index];
			if (operator !== '*' && operator !== '/') {
				break;
			}

			index += 1;
			const nextValue = parseFactor();
			if (nextValue === null) {
				return null;
			}

			value = operator === '*' ? value * nextValue : value / nextValue;
			if (!Number.isFinite(value)) {
				return null;
			}
		}

		return value;
	};

	const parseExpression = () => {
		let value = parseTerm();
		if (value === null) {
			return null;
		}

		while (true) {
			skipWhitespace();
			const operator = expression[index];
			if (operator !== '+' && operator !== '-') {
				break;
			}

			index += 1;
			const nextValue = parseTerm();
			if (nextValue === null) {
				return null;
			}

			value = operator === '+' ? value + nextValue : value - nextValue;
			if (!Number.isFinite(value)) {
				return null;
			}
		}

		return value;
	};

	const result = parseExpression();
	skipWhitespace();
	if (result === null || index !== expression.length) {
		return null;
	}

	return result;
}

function normalizeMesaCalculatedIntegerValue(value, defaultValue = 0) {
	const parsedValue = parseMesaArithmeticExpression(value);
	if (parsedValue === null) {
		return defaultValue;
	}

	const roundedValue = Math.round(parsedValue);
	if (!Number.isFinite(roundedValue)) {
		return defaultValue;
	}

	return Math.max(0, roundedValue);
}

function commitMesaCalculatedInputValue(inputElement, { dispatchInput = false } = {}) {
	const resolvedValue = resolveMesaCalculatedInputValue(inputElement?.value);
	if (resolvedValue === null) {
		return null;
	}

	inputElement.value = String(resolvedValue);
	if (dispatchInput) {
		inputElement.dispatchEvent(new Event('input', { bubbles: true }));
	}

	return resolvedValue;
}

function resolveMesaCalculatedInputValue(value) {
	const parsedValue = parseMesaArithmeticExpression(value);
	if (parsedValue === null) {
		return null;
	}

	return Math.max(0, Math.round(parsedValue));
}

function normalizeMesaEffectDescriptionValue(value) {
	const rawValue = String(value ?? '').trim();
	const resolvedValue = resolveMesaCalculatedInputValue(rawValue);
	if (resolvedValue !== null) {
		return String(resolvedValue);
	}

	return rawValue;
}

function normalizeNonNegativeIntOrDefault(value, defaultValue) {
	return normalizeMesaCalculatedIntegerValue(value, defaultValue);
}

function normalizeEffectName(value) {
	return String(value ?? '').trim();
}

function createEffectId(effectName) {
	const baseId = normalizeEffectName(effectName)
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '') || `efeito-${Date.now().toString(36)}`;

	let candidateId = baseId;
	let counter = 2;
	while (effectsRegistry.some((effect) => effect.id === candidateId)) {
		candidateId = `${baseId}-${counter}`;
		counter += 1;
	}

	return candidateId;
}

function getEffectTemplate(effectId) {
	const normalizedId = normalizeMesaEffectId(effectId);
	if (!normalizedId) {
		return null;
	}

	return effectsRegistry.find((effect) => effect.id === normalizedId) || null;
}

function createMesaEffectInstance(effectId) {
	const template = getEffectTemplate(effectId);
	if (!template) {
		return null;
	}

	const behavior = normalizeEffectBehavior(template.behavior);
	const properties = behavior === 'modifier' || behavior === 'amplifier'
		? 'power'
		: normalizeEffectProperties(template.properties);
	const valueEnabled = properties === 'description' && Boolean(template.valueEnabled);
	const triggers = behavior === 'modifier' || behavior === 'amplifier'
		? []
		: normalizeEffectTriggerList(template.triggers ?? template.trigger);

	return {
		instanceId: `${template.id}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
		id: template.id,
		name: template.name,
		icon: template.icon,
		behavior,
		target: behavior === 'modifier' ? 'life' : template.target,
		how: normalizeEffectHow(template.how),
		properties,
		valueEnabled,
		value: '',
		activation: behavior === 'modifier' ? 'modifier' : normalizeEffectActivation(template.activation),
		modifierDefinition: normalizeEffectModifierDefinition(template.modifierDefinition),
		triggers,
		trigger: triggers[0] || '',
		triggerEnabled: triggers.length > 0,
		active: false,
		preserveCount: Boolean(template.preserveCount ?? false),
		power: DEFAULT_MESA_EFFECT_POWER,
		count: properties === 'power-and-count' ? DEFAULT_MESA_EFFECT_COUNT : 0
	};
}

function normalizeMesaEffect(effect, index = 0) {
	if (!effect || typeof effect !== 'object' || Array.isArray(effect)) {
		return null;
	}

	const effectId = normalizeMesaEffectId(effect.id ?? effect.effectId ?? effect.name);
	const template = getEffectTemplate(effectId);
	if (!template) {
		return null;
	}

	const power = parseNonNegativeInt(effect.power ?? effect.potency ?? DEFAULT_MESA_EFFECT_POWER) || DEFAULT_MESA_EFFECT_POWER;
	const behavior = normalizeEffectBehavior(effect.behavior ?? effect.comportamento ?? template.behavior);
	const properties = behavior === 'modifier' || behavior === 'amplifier'
		? 'power'
		: normalizeEffectProperties(effect.properties ?? template.properties);
	const count = properties === 'power-and-count'
		? normalizeNonNegativeIntOrDefault(effect.count ?? effect.counts ?? effect.uses ?? DEFAULT_MESA_EFFECT_COUNT, DEFAULT_MESA_EFFECT_COUNT)
		: DEFAULT_MESA_EFFECT_COUNT;
	const normalizedTarget = normalizeEffectTarget(effect.target ?? template.target);
	const valueEnabled = properties === 'description'
		? Boolean(effect.valueEnabled ?? effect.hasValue ?? effect.valor ?? template.valueEnabled ?? false)
		: false;
	const triggers = behavior === 'modifier' || behavior === 'amplifier'
		? []
		: normalizeEffectTriggerList(effect.triggers ?? effect.trigger ?? effect.activationTrigger ?? template.triggers ?? template.trigger);
	const trigger = triggers[0] || '';
	const triggerEnabled = triggers.length > 0
		? Boolean(effect.triggerEnabled ?? effect.autoTriggerEnabled ?? effect.damageTriggerEnabled ?? true)
		: false;

	return {
		instanceId: String(effect.instanceId ?? effect.instance ?? effect.key ?? `${template.id}-${index}-${power}`),
		id: template.id,
		name: template.name,
		icon: template.icon,
		behavior,
		target: behavior === 'modifier' ? 'life' : normalizedTarget,
		how: normalizeEffectHow(effect.how ?? effect.como ?? template.how),
		properties,
		valueEnabled,
		value: properties === 'description'
			? normalizeMesaEffectDescriptionValue(effect.value ?? effect.valor ?? effect.text ?? '')
			: '',
		activation: behavior === 'modifier' ? 'modifier' : normalizeEffectActivation(effect.activation ?? template.activation),
		modifierDefinition: normalizeEffectModifierDefinition(effect.modifierDefinition ?? template.modifierDefinition),
		triggers,
		trigger,
		triggerEnabled,
		active: Boolean(effect.active ?? effect.ativo ?? false),
		preserveCount: Boolean(effect.preserveCount ?? effect.keepCount ?? effect.lockCount ?? effect.contagemFixa ?? false),
		power,
		count
	};
}

function normalizeSpeedRange(value) {
	const normalizedValue = String(value ?? '').trim();
	if (!normalizedValue) {
		return '';
	}

	const speedMatch = normalizedValue.match(/^(\d+)\s*(?:~|-|–|—)\s*(\d+)$/);
	if (!speedMatch) {
		return null;
	}

	return `${speedMatch[1]}~${speedMatch[2]}`;
}

function getSpeedRangeBounds(value) {
	const normalizedSpeed = normalizeSpeedRange(value);
	if (!normalizedSpeed) {
		return null;
	}

	const [minText, maxText] = normalizedSpeed.split('~');
	const min = Number.parseInt(minText, 10);
	const max = Number.parseInt(maxText, 10);
	if (!Number.isFinite(min) || !Number.isFinite(max)) {
		return null;
	}

	return {
		min: Math.min(min, max),
		max: Math.max(min, max)
	};
}

function rollSpeedRange(rangeBounds) {
	if (!rangeBounds) {
		return null;
	}

	const span = rangeBounds.max - rangeBounds.min + 1;
	return rangeBounds.min + Math.floor(Math.random() * span);
}

function getDefaultMesaSpeedFieldValue(character) {
	const speedValue = String(character?.speed ?? '').trim();
	if (!speedValue) {
		return '';
	}

	return getSpeedRangeBounds(speedValue) ? '' : speedValue;
}

function getDefaultMesaCaFieldValue(character) {
	return String(character?.ca ?? '').trim();
}

function getDefaultMesaMovementFieldValue(character) {
	return String(character?.deslocamento ?? '').trim();
}

function parseEditableStatValue(value, fallbackValue) {
	const parsedValue = Number.parseInt(String(value ?? '').trim(), 10);
	if (!Number.isFinite(parsedValue) || parsedValue < 0) {
		return Math.max(parseNonNegativeInt(fallbackValue), 0);
	}

	return parsedValue;
}

function normalizeResistanceValue(value) {
	const stringValue = String(value);
	if (Object.prototype.hasOwnProperty.call(RESISTANCE_LABELS, stringValue) || stringValue === CUSTOM_RESISTANCE_VALUE) {
		return stringValue;
	}

	return DEFAULT_RESISTANCE_VALUE;
}

function getResistanceDisplayLabel(value) {
	const stringValue = String(value ?? '').trim();
	if (!stringValue) {
		return '-';
	}

	const label = RESISTANCE_LABELS[stringValue] || 'Customizado';
	return `${label} (${stringValue})`;
}

function getResistanceDisplayData(value) {
	const stringValue = String(value ?? '').trim() || DEFAULT_RESISTANCE_VALUE;
	const label = RESISTANCE_LABELS[stringValue] || 'Customizado';

	let tone = 'custom';
	if (stringValue === '0.5') {
		tone = 'resistant';
	} else if (stringValue === '1.0') {
		tone = 'normal';
	} else if (stringValue === '2.0') {
		tone = 'vulnerable';
	}

	return {
		label,
		multiplier: stringValue,
		tone
	};
}

function setResistanceControlState(control, value) {
	if (!control.select || !control.custom) {
		return;
	}

	const stringValue = String(value ?? '');
	const isPreset = Object.prototype.hasOwnProperty.call(RESISTANCE_LABELS, stringValue);
	const isCustom = !isPreset && stringValue !== '';

	control.select.value = isCustom ? CUSTOM_RESISTANCE_VALUE : normalizeResistanceValue(stringValue || DEFAULT_RESISTANCE_VALUE);
	control.custom.hidden = !isCustom;
	control.custom.value = isCustom ? stringValue : '';
}

function renderMesaEffectOptions() {
	if (!mesaEffectSelect) {
		return;
	}

	const selectedValue = normalizeMesaEffectId(mesaEffectSelect.value);
	mesaEffectSelect.innerHTML = '';
	const placeholderOption = document.createElement('option');
	placeholderOption.value = '';
	placeholderOption.textContent = 'Selecione um efeito';
	placeholderOption.disabled = true;
	placeholderOption.hidden = true;
	mesaEffectSelect.appendChild(placeholderOption);

	if (!effectsRegistry.length) {
		placeholderOption.selected = true;
		mesaEffectSelect.disabled = true;
		if (mesaEffectAddButton) {
			mesaEffectAddButton.disabled = true;
		}
		return;
	}

	effectsRegistry.forEach((effect) => {
		const option = document.createElement('option');
		option.value = effect.id;
		option.textContent = effect.name;
		mesaEffectSelect.appendChild(option);
	});

	mesaEffectSelect.disabled = false;
	if (mesaEffectAddButton) {
		mesaEffectAddButton.disabled = false;
	}
	mesaEffectSelect.value = effectsRegistry.some((effect) => effect.id === selectedValue) ? selectedValue : '';
}

function getResistanceControlValue(control) {
	if (!control.select) {
		return DEFAULT_RESISTANCE_VALUE;
	}

	if (control.select.value === CUSTOM_RESISTANCE_VALUE) {
		const customValue = control.custom?.value.trim();
		return customValue || DEFAULT_RESISTANCE_VALUE;
	}

	return normalizeResistanceValue(control.select.value);
}

function closeCaptionModal(confirmed) {
	if (captionResolver) {
		const resolver = captionResolver;
		captionResolver = null;
		captionModal.hidden = true;
		resolver(confirmed);
	}
}

function showCaptionWindow({ title, message, confirmText = 'OK', cancelText = 'Cancelar', showCancel = true }) {
	return new Promise((resolve) => {
		captionResolver = resolve;
		captionTitle.textContent = title;
		captionMessage.textContent = message;
		captionConfirmButton.textContent = confirmText;
		captionCancelButton.textContent = cancelText;
		captionCancelButton.hidden = !showCancel;
		captionModal.hidden = false;
		captionConfirmButton.focus();
	});
}

function showCaptionInfo(title, message) {
	return showCaptionWindow({ title, message, confirmText: 'OK', showCancel: false });
}

function applyImagePreviewTransform() {
	if (!imageHoverPreviewImg) {
		return;
	}

	imageHoverPreviewImg.style.transform = `translate(${imagePreviewOffsetX}px, ${imagePreviewOffsetY}px) scale(${imagePreviewScale})`;
	if (imageHoverPreviewReset) {
		imageHoverPreviewReset.hidden = imagePreviewScale <= 1;
	}
}

function resetImagePreviewTransform() {
	imagePreviewScale = 1;
	imagePreviewOffsetX = 0;
	imagePreviewOffsetY = 0;
	imagePreviewIsDragging = false;
	imagePreviewDragStartX = 0;
	imagePreviewDragStartY = 0;
	if (imageHoverPreviewImg) {
		imageHoverPreviewImg.classList.remove('image-hover-preview--dragging');
	}
	applyImagePreviewTransform();
}

function showImagePreviewModal(imageElement) {
	if (!imageHoverPreview || !imageHoverPreviewImg || !imageHoverPreviewLabel) {
		return;
	}

	if (!imageElement.src || imageElement.hidden) {
		return;
	}

	imageHoverPreviewImg.src = imageElement.currentSrc || imageElement.src;
	imageHoverPreviewImg.alt = imageElement.alt || 'Preview do personagem';
	imageHoverPreviewLabel.textContent = imageElement.alt || 'Visualizacao do personagem';
	resetImagePreviewTransform();
	imageHoverPreview.hidden = false;
	document.body.classList.add('body--no-scroll');
}

function hideImagePreviewModal() {
	if (!imageHoverPreview || !imageHoverPreviewImg || !imageHoverPreviewLabel) {
		return;
	}

	imageHoverPreview.hidden = true;
	document.body.classList.remove('body--no-scroll');
	imageHoverPreviewImg.removeAttribute('src');
	imageHoverPreviewImg.alt = '';
	imageHoverPreviewLabel.textContent = '';
	if (imageHoverPreviewReset) {
		imageHoverPreviewReset.hidden = true;
	}
	resetImagePreviewTransform();
}

function resetCharacterForm() {
	nameInput.value = '';
	vidaInput.value = '';
	staggerInput.value = '';
	speedInput.value = '';
	if (caInput) {
		caInput.value = '';
	}
	if (movementInput) {
		movementInput.value = '';
	}
	if (notesInput) {
		notesInput.value = '';
	}
	createSelectedKeywords = [];
	renderSelectedKeywordList(createKeywordSelectedList, createSelectedKeywords, 'create');
	renderKeywordSelect(createKeywordSelect, createKeywordSelect?.value || '');
	setResistanceControlState({ select: slashInput, custom: slashCustomInput }, DEFAULT_RESISTANCE_VALUE);
	setResistanceControlState({ select: pierceInput, custom: pierceCustomInput }, DEFAULT_RESISTANCE_VALUE);
	setResistanceControlState({ select: bluntInput, custom: bluntCustomInput }, DEFAULT_RESISTANCE_VALUE);
	imageInput.value = '';
	selectedImageFile = null;
	updateImageButtonLabel();
	updateImagePreview();
	if (document.activeElement instanceof HTMLElement) {
		document.activeElement.blur();
	}
	window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
}

function removeSelectedCreateImage() {
	selectedImageFile = null;
	imageInput.value = '';
	updateImageButtonLabel();
	updateImagePreview();
}

function removeSelectedEditImage() {
	editSelectedImageFile = null;
	editCharacterBaseImage = '';
	editImageInput.value = '';
	clearEditPreviewObjectUrl();
	updateEditImageButtonLabel();
	setEditPreviewSource('');
}

function updateMesaAvailability() {
	const hasCharacters = characters.length > 0;
	syncMesaInstancesWithCharacters(characters);

	if (mesaTab) {
		mesaTab.disabled = !hasCharacters;
		mesaTab.setAttribute('aria-disabled', String(!hasCharacters));
		mesaTab.classList.toggle('navbar__tab--disabled', !hasCharacters);
	}

	if (!hasCharacters) {
		mesaOpenCharacterNames = [];
		mesaActiveCharacterName = '';
		lastLoadedMesaCharacter = '';
		lastSelectedMesaCharacter = '';
		writeMesaInstancesState({
			openCharacterNames: [],
			activeCharacterName: ''
		});
		clearMesaStatus();

		if (mesaCharacterSelect) {
			mesaCharacterSelect.value = '';
			mesaCharacterSelect.disabled = true;
		}

		const mesaIsActive = panels.some((panel) => panel.id === 'mesa' && panel.classList.contains('panel--active'));
		if (mesaIsActive) {
			setActivePanel('inicio');
		}
	}
}

function setActivePanel(targetId) {
	if (targetId === 'mesa' && !characters.length) {
		targetId = 'inicio';
	}

	tabs.forEach((tab) => {
		const isActive = tab.dataset.target === targetId;
		tab.classList.toggle('navbar__tab--active', isActive);
		tab.setAttribute('aria-selected', String(isActive));
	});

	closeNavbarDropdowns();

	panels.forEach((panel) => {
		const isActive = panel.id === targetId;
		panel.classList.toggle('panel--active', isActive);
		panel.hidden = !isActive;
	});

	if (window.location.hash !== `#${targetId}`) {
		window.history.replaceState(null, '', `#${targetId}`);
	}

	if (targetId === 'mesa') {
		renderMesaPanel();
	}

	if (targetId === 'editar-personagem') {
		renderEditCharacterPanel();
	}
}

function resolveCharacterImageSource(character) {
	const imageValue = character.imagem?.trim();

	if (!imageValue) {
		return '';
	}

	if (imageValue.startsWith('data:') || imageValue.startsWith('blob:') || imageValue.startsWith('http://') || imageValue.startsWith('https://')) {
		return imageValue;
	}

	if (imageValue.startsWith('res/') || imageValue.startsWith('chars/')) {
		return imageValue;
	}

	return `res/${imageValue}`;
}

function updateImageButtonLabel() {
	chooseImageButton.textContent = selectedImageFile ? 'Imagem Selecionada' : 'Escolher Imagem';
	imagePlaceholder.hidden = Boolean(selectedImageFile);
	if (removeImageButton) {
		removeImageButton.hidden = !selectedImageFile;
	}
}

function updateImagePreview() {
	if (previewObjectUrl) {
		URL.revokeObjectURL(previewObjectUrl);
		previewObjectUrl = '';
	}

	if (!selectedImageFile) {
		imagePreview.hidden = true;
		imagePreview.removeAttribute('src');
		imagePlaceholder.hidden = false;
		return;
	}

	previewObjectUrl = URL.createObjectURL(selectedImageFile);
	imagePreview.src = previewObjectUrl;
	imagePreview.hidden = false;
	imagePlaceholder.hidden = true;
}

function clearEditPreviewObjectUrl() {
	if (editPreviewObjectUrl) {
		URL.revokeObjectURL(editPreviewObjectUrl);
		editPreviewObjectUrl = '';
	}
}

function setEditPreviewSource(source) {
	if (!source) {
		editImagePreview.hidden = true;
		editImagePreview.removeAttribute('src');
		editImagePlaceholder.hidden = false;
		return;
	}

	editImagePreview.src = source;
	editImagePreview.hidden = false;
	editImagePlaceholder.hidden = true;
}

function updateEditImageButtonLabel() {
	editChooseImageButton.textContent = editSelectedImageFile ? 'Imagem Selecionada' : 'Escolher Imagem';
	if (editRemoveImageButton) {
		editRemoveImageButton.hidden = !(editSelectedImageFile || editCharacterBaseImage);
	}
}

function loadCharacterIntoEditForm(character) {
	if (!character) {
		return;
	}

	editNameInput.value = character.nome || '';
	editVidaInput.value = character.vida || '';
	editStaggerInput.value = character.stagger || '';
	editSpeedInput.value = character.speed || '';
	if (editCaInput) {
		editCaInput.value = character.ca || '';
	}
	if (editMovementInput) {
		editMovementInput.value = character.deslocamento || '';
	}
	if (editNotesInput) {
		editNotesInput.value = character.observacoes || '';
	}
	editSelectedKeywords = getCharacterKeywords(character);
	renderSelectedKeywordList(editKeywordSelectedList, editSelectedKeywords, 'edit');
	renderKeywordSelect(editKeywordSelect, editKeywordSelect?.value || '');
	setResistanceControlState({ select: editSlashInput, custom: editSlashCustomInput }, character.resistencias?.slash);
	setResistanceControlState({ select: editPierceInput, custom: editPierceCustomInput }, character.resistencias?.pierce);
	setResistanceControlState({ select: editBluntInput, custom: editBluntCustomInput }, character.resistencias?.blunt);

	clearEditPreviewObjectUrl();
	editCharacterBaseImage = character.imagem || '';
	editSelectedImageFile = null;
	editImageInput.value = '';
	updateEditImageButtonLabel();

	if (editCharacterBaseImage) {
		setEditPreviewSource(resolveCharacterImageSource(character));
	} else {
		setEditPreviewSource('');
	}
}

function renderEditCharacterPanel(preferredName) {
	if (!editContent || !editCharacterSelect || !editCharacterForm || !editEmptyState) {
		return;
	}

	const currentName = preferredName || editCharacterSelect.value;
	editCharacterSelect.innerHTML = '';

	characters.forEach((character) => {
		const option = document.createElement('option');
		option.value = character.nome;
		option.textContent = character.nome;
		editCharacterSelect.appendChild(option);
	});

	if (!characters.length) {
		editContent.hidden = true;
		editContent.style.display = 'none';
		editCharacterSelect.disabled = true;
		editCharacterForm.hidden = true;
		editEmptyState.hidden = false;
		editEmptyState.style.display = 'flex';
		if (editSaveButton) {
			editSaveButton.hidden = true;
		}
		setEditPreviewSource('');
		return;
	}

	editContent.hidden = false;
	editContent.style.display = 'grid';
	editCharacterSelect.disabled = false;
	editCharacterForm.hidden = false;
	editEmptyState.hidden = true;
	editEmptyState.style.display = 'none';
	if (editSaveButton) {
		editSaveButton.hidden = false;
	}

	const hasPreferred = characters.some((character) => character.nome === currentName);
	const selectedName = hasPreferred ? currentName : characters[0].nome;
	editCharacterSelect.value = selectedName;
	loadCharacterIntoEditForm(characters.find((character) => character.nome === selectedName));
}

function getEditedCharacterData() {
	return {
		nome: editNameInput.value.trim(),
		vida: editVidaInput.value,
		stagger: editStaggerInput.value,
		speed: editSpeedInput.value.trim(),
		ca: editCaInput?.value || '',
		deslocamento: editMovementInput?.value.trim() || '',
		observacoes: editNotesInput?.value.trim() || '',
		palavrasChave: [...editSelectedKeywords],
		resistencias: {
			slash: getResistanceControlValue({ select: editSlashInput, custom: editSlashCustomInput }),
			pierce: getResistanceControlValue({ select: editPierceInput, custom: editPierceCustomInput }),
			blunt: getResistanceControlValue({ select: editBluntInput, custom: editBluntCustomInput })
		},
		imagem: ''
	};
}

async function saveEditedCharacter() {
	const originalName = editCharacterSelect?.value;
	if (!originalName) {
		return;
	}

	const nextData = getEditedCharacterData();
	if (!nextData.nome) {
		await showCaptionInfo('Atencao', 'Digite o nome do personagem.');
		return;
	}

	const confirmedEdit = await showCaptionWindow({
		title: 'Confirmar Edicao',
		message: `Deseja salvar as alteracoes de ${originalName}?`,
		confirmText: 'Salvar'
	});

	if (!confirmedEdit) {
		return;
	}

	const nextCharacters = readStoredCharacters();
	const targetIndex = nextCharacters.findIndex((character) => character.nome === originalName);
	if (targetIndex < 0) {
		await showCaptionInfo('Atencao', 'Personagem nao encontrado para editar.');
		return;
	}

	const duplicateIndex = nextCharacters.findIndex((character, index) => index !== targetIndex && character.nome.toLowerCase() === nextData.nome.toLowerCase());
	if (duplicateIndex >= 0) {
		await showCaptionInfo('Atencao', 'Ja existe um personagem com esse nome.');
		return;
	}

	nextData.imagem = editSelectedImageFile ? await readFileAsDataURL(editSelectedImageFile) : editCharacterBaseImage;
	nextCharacters[targetIndex] = nextData;

	writeStoredCharacters(nextCharacters);
	characters = [...nextCharacters];
	syncMesaStateWithCharacters(characters);
	updateMesaAvailability();

	activeCharacterIndex = characters.findIndex((character) => character.nome === nextData.nome);
	if (activeCharacterIndex < 0) {
		activeCharacterIndex = characters.length ? 0 : -1;
	}

	renderCharacterList();
	renderCharacterDetails();
	renderMesaPanel();
	renderEditCharacterPanel(nextData.nome);
	await showCaptionInfo('Sucesso', 'Personagem atualizado com sucesso.');
}

function openEditFromViewer() {
	const character = characters[activeCharacterIndex];
	if (!character) {
		return;
	}

	setActivePanel('editar-personagem');
	renderEditCharacterPanel(character.nome);
}

function readStoredCharacters() {
	try {
		const storedCharacters = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (!storedCharacters) {
			return [];
		}

		const parsedCharacters = JSON.parse(storedCharacters);
		if (!Array.isArray(parsedCharacters)) {
			localStorage.removeItem(LOCAL_STORAGE_KEY);
			return [];
		}

		return parsedCharacters;
	} catch {
		localStorage.removeItem(LOCAL_STORAGE_KEY);
		return [];
	}
}

function writeStoredCharacters(nextCharacters) {
	if (!nextCharacters.length) {
		localStorage.removeItem(LOCAL_STORAGE_KEY);
		return;
	}

	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextCharacters));
}

function readStoredKeywords() {
	try {
		const storedKeywords = localStorage.getItem(KEYWORDS_STORAGE_KEY);
		if (!storedKeywords) {
			return [];
		}

		const parsedKeywords = JSON.parse(storedKeywords);
		if (!Array.isArray(parsedKeywords)) {
			localStorage.removeItem(KEYWORDS_STORAGE_KEY);
			return [];
		}

		return parsedKeywords
			.map((keyword) => String(keyword).trim())
			.filter(Boolean);
	} catch {
		localStorage.removeItem(KEYWORDS_STORAGE_KEY);
		return [];
	}
}

function writeStoredKeywords(nextKeywords) {
	const normalizedKeywords = nextKeywords
		.map((keyword) => String(keyword).trim())
		.filter(Boolean);

	if (!normalizedKeywords.length) {
		localStorage.removeItem(KEYWORDS_STORAGE_KEY);
		return;
	}

	localStorage.setItem(KEYWORDS_STORAGE_KEY, JSON.stringify(normalizedKeywords));
}

function readStoredEffects() {
	try {
		const storedEffects = localStorage.getItem(EFFECTS_STORAGE_KEY);
		if (!storedEffects) {
			return [];
		}

		const parsedEffects = JSON.parse(storedEffects);
		if (!Array.isArray(parsedEffects)) {
			localStorage.removeItem(EFFECTS_STORAGE_KEY);
			return [];
		}

		return parsedEffects
			.map((effect) => {
				if (!effect || typeof effect !== 'object' || Array.isArray(effect)) {
					return null;
				}

				const id = normalizeMesaEffectId(effect.id);
				const name = normalizeEffectName(effect.name ?? effect.nome);
				if (!id || !name) {
					return null;
				}

				const behavior = normalizeEffectBehavior(effect.behavior ?? effect.comportamento);
				const normalizedTarget = normalizeEffectTarget(effect.target);
				const storedProperties = effect.properties ?? effect.type ?? effect.tipo;
				const properties = behavior === 'modifier' || behavior === 'amplifier'
					? 'power'
					: (storedProperties == null ? 'power-and-count' : normalizeEffectProperties(storedProperties));
				const valueEnabled = Boolean(effect.valueEnabled ?? effect.hasValue ?? effect.valor ?? false);
				const triggers = behavior === 'modifier' || behavior === 'amplifier'
					? []
					: normalizeEffectTriggerList(effect.triggers ?? effect.trigger ?? effect.activationTrigger ?? effect.triggerMode ?? effect.trigger_mode);

				return {
					id,
					name,
					description: String(effect.description ?? effect.descricao ?? '').trim(),
					icon: String(effect.icon ?? effect.imagem ?? '').trim(),
					behavior,
					target: behavior === 'modifier' ? 'life' : normalizedTarget,
					how: normalizeEffectHow(effect.how ?? effect.como),
					properties,
					valueEnabled: properties === 'description' ? valueEnabled : false,
					activation: normalizeEffectActivation(effect.activation ?? effect.ativacao),
					modifierDefinition: normalizeEffectModifierDefinition(effect.modifierDefinition ?? effect.modifier_definition ?? effect.definicaoModificador),
					triggers,
					trigger: triggers[0] || '',
					triggerEnabled: Boolean(effect.triggerEnabled ?? effect.autoTriggerEnabled ?? effect.damageTriggerEnabled ?? false)
				};
			})
			.filter(Boolean);
	} catch {
		localStorage.removeItem(EFFECTS_STORAGE_KEY);
		return [];
	}
}

function writeStoredEffects(nextEffects) {
	if (!nextEffects.length) {
		localStorage.removeItem(EFFECTS_STORAGE_KEY);
		return;
	}

	localStorage.setItem(EFFECTS_STORAGE_KEY, JSON.stringify(nextEffects));
}

function reorderEffectsRegistry(draggedEffectId, targetEffectId = '', insertAfter = false) {
	const normalizedDraggedId = String(draggedEffectId ?? '').trim();
	const normalizedTargetId = String(targetEffectId ?? '').trim();
	if (!normalizedDraggedId) {
		return;
	}

	const sourceIndex = effectsRegistry.findIndex((effect) => effect.id === normalizedDraggedId);
	if (sourceIndex < 0) {
		return;
	}

	const nextEffects = [...effectsRegistry];
	const [movedEffect] = nextEffects.splice(sourceIndex, 1);
	if (!movedEffect) {
		return;
	}

	if (!normalizedTargetId) {
		nextEffects.push(movedEffect);
	} else {
		const targetIndex = nextEffects.findIndex((effect) => effect.id === normalizedTargetId);
		if (targetIndex < 0) {
			nextEffects.push(movedEffect);
		} else {
			const insertIndex = targetIndex + (insertAfter ? 1 : 0);
			nextEffects.splice(insertIndex, 0, movedEffect);
		}
	}

	const hasOrderChanged = nextEffects.some((effect, index) => effect.id !== effectsRegistry[index]?.id);
	if (!hasOrderChanged) {
		return;
	}

	effectsRegistry = nextEffects;
	writeStoredEffects(effectsRegistry);
	renderEffectsRegistry();
	renderMesaEffectOptions();
}

function clearEffectRegistryDropIndicators() {
	if (!effectsRegistryList) {
		return;
	}

	effectsRegistryList.querySelectorAll('.effects__item--drop-before, .effects__item--drop-after').forEach((card) => {
		card.classList.remove('effects__item--drop-before', 'effects__item--drop-after');
	});
}

function clearEffectRegistryDragState() {
	if (effectsRegistryList) {
		effectsRegistryList.querySelectorAll('.effects__item--dragging').forEach((card) => {
			card.classList.remove('effects__item--dragging');
		});
	}

	clearEffectRegistryDropIndicators();
	draggedEffectRegistryId = '';
	dragOverEffectRegistryId = '';
	dragOverEffectRegistryInsertAfter = false;
}

function createExportPayload() {
	return {
		version: 1,
		exportedAt: new Date().toISOString(),
		characters: readStoredCharacters(),
		keywords: readStoredKeywords(),
		effects: readStoredEffects()
	};
}

function downloadJsonFile(fileName, data) {
	const blob = new Blob([data], { type: 'application/json;charset=utf-8' });
	const objectUrl = URL.createObjectURL(blob);
	const link = document.createElement('a');
	link.href = objectUrl;
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	link.remove();
	URL.revokeObjectURL(objectUrl);
}

async function exportAppData() {
	const payload = createExportPayload();
	const fileName = `critique-export-${new Date().toISOString().slice(0, 10)}.json`;
	downloadJsonFile(fileName, JSON.stringify(payload, null, 2));
}

async function importAppDataFromFile(file) {
	if (!file) {
		return;
	}

	let importedData;
	try {
		importedData = JSON.parse(await file.text());
	} catch {
		await showCaptionInfo('Importacao invalida', 'O arquivo selecionado nao e um JSON valido.');
		return;
	}

	if (!importedData || typeof importedData !== 'object' || Array.isArray(importedData)) {
		await showCaptionInfo('Importacao invalida', 'O arquivo selecionado nao possui a estrutura esperada.');
		return;
	}

	const nextCharacters = Array.isArray(importedData.characters) ? importedData.characters : Array.isArray(importedData.personagens) ? importedData.personagens : null;
	const nextEffects = Array.isArray(importedData.effects) ? importedData.effects : Array.isArray(importedData.efeitos) ? importedData.efeitos : null;
	const nextKeywords = Array.isArray(importedData.keywords) ? importedData.keywords : Array.isArray(importedData.palavrasChave) ? importedData.palavrasChave : [];

	if (!nextCharacters || !nextEffects) {
		await showCaptionInfo('Importacao invalida', 'O arquivo precisa conter personagens e efeitos exportados pela aplicacao.');
		return;
	}

	const confirmedImport = await showCaptionWindow({
		title: 'Confirmar Importacao',
		message: 'Isso vai substituir os personagens, efeitos e palavras chave atuais. Continuar?',
		confirmText: 'Importar',
		cancelText: 'Cancelar',
		showCancel: true
	});

	if (!confirmedImport) {
		return;
	}

	writeStoredCharacters(nextCharacters);
	writeStoredKeywords(nextKeywords);
	writeStoredEffects(nextEffects);
	localStorage.removeItem(MESA_STATE_KEY);
	window.location.reload();
}

function clearEffectPreviewObjectUrl() {
	if (effectPreviewObjectUrl) {
		URL.revokeObjectURL(effectPreviewObjectUrl);
		effectPreviewObjectUrl = '';
	}
}

function updateEffectsImageButtonLabel() {
	if (effectsChooseImageButton) {
		effectsChooseImageButton.textContent = selectedEffectImageFile ? 'Imagem Selecionada' : 'Adicionar Imagem';
	}
	if (effectsImagePlaceholder) {
		effectsImagePlaceholder.hidden = Boolean(selectedEffectImageFile || editEffectBaseImage);
	}
	if (effectsRemoveImageButton) {
		effectsRemoveImageButton.hidden = !(selectedEffectImageFile || editEffectBaseImage);
	}
}

function updateEffectsImagePreview() {
	clearEffectPreviewObjectUrl();

	if (!selectedEffectImageFile) {
		if (editEffectBaseImage) {
			if (effectsImagePreview) {
				effectsImagePreview.src = editEffectBaseImage;
				effectsImagePreview.hidden = false;
			}
			if (effectsImagePlaceholder) {
				effectsImagePlaceholder.hidden = true;
			}
			return;
		}

		if (effectsImagePreview) {
			effectsImagePreview.hidden = true;
			effectsImagePreview.removeAttribute('src');
		}
		if (effectsImagePlaceholder) {
			effectsImagePlaceholder.hidden = false;
		}
		return;
	}

	effectPreviewObjectUrl = URL.createObjectURL(selectedEffectImageFile);
	if (effectsImagePreview) {
		effectsImagePreview.src = effectPreviewObjectUrl;
		effectsImagePreview.hidden = false;
	}
	if (effectsImagePlaceholder) {
		effectsImagePlaceholder.hidden = true;
	}
}

function resetEffectsForm() {
	if (effectsNameInput) {
		effectsNameInput.value = '';
	}
	if (effectsHowSelect) {
		effectsHowSelect.value = 'increase';
	}
	if (effectsModifierHowSelect) {
		effectsModifierHowSelect.value = 'reduce';
	}
	if (effectsTriggerSelect) {
		effectsTriggerSelect.value = 'on-hit';
	}

	// initialize fields
	setSelectedEffectTargets([]);
	setSelectedEffectTriggerList([]);
	setSelectedEffectPropertiesMode('power');
	editingEffectId = '';
	selectedEffectImageFile = null;
	editEffectBaseImage = '';
	clearEffectPreviewObjectUrl();
	if (effectsImageInput) {
		effectsImageInput.value = '';
	}
	if (effectsAddButton) {
		effectsAddButton.textContent = 'Salvar Efeito';
	}
	// clear description
	if (effectsDescriptionInput) {
		effectsDescriptionInput.value = '';
	}
	if (effectsDescriptionValueInput) {
		effectsDescriptionValueInput.checked = false;
	}
	updateEffectsBehaviorState();
	updateEffectsHowVisibility();
	updateEffectsImagePreview();
}

function getSelectedEffectPropertiesMode() {
	const selectedInput = effectsPropertiesModeInputs.find((input) => input.checked);
	return normalizeEffectProperties(selectedInput?.value ?? 'power');
}

function setSelectedEffectPropertiesMode(value) {
	const rawValue = String(value ?? '').trim().toLowerCase();
	const normalizedValue = rawValue === 'modifier' || rawValue === 'amplifier'
		? rawValue
		: normalizeEffectProperties(rawValue);
	effectsPropertiesModeInputs.forEach((input) => {
		input.checked = input.value === normalizedValue;
	});
}

function getSelectedEffectTrigger() {
	return getSelectedEffectTriggerList()[0] || '';
}

function setSelectedEffectTrigger(value) {
	const normalizedValue = normalizeEffectTrigger(value);
	setSelectedEffectTriggerList(normalizedValue ? [normalizedValue] : []);
}

function getSelectedEffectBehavior() {
	const selectedInput = effectsPropertiesModeInputs.find((input) => input.checked);
	return normalizeEffectBehavior(selectedInput?.value ?? 'power');
}

function getSelectedModifierHow() {
	return normalizeEffectHow(effectsModifierHowSelect?.value);
}

function getSelectedModifierProperties() {
	return 'power-and-count';
}

function setSelectedModifierProperties(value) {
	const normalizedValue = normalizeEffectProperties(value);
	if (effectsModifierPropertiesSelect) {
		effectsModifierPropertiesSelect.value = normalizedValue;
	}
}

function updateEffectsBehaviorState() {
	const behavior = getSelectedEffectBehavior();
	const shouldDisableStandardFields = behavior === 'modifier';
	const isDescriptionMode = getSelectedEffectPropertiesMode() === 'description';
	const shouldShowTriggerField = !shouldDisableStandardFields && !isDescriptionMode;
	if (effectsModifierHowField) {
		effectsModifierHowField.hidden = !shouldDisableStandardFields;
	}
	if (effectsModifierPropertiesField) {
		effectsModifierPropertiesField.hidden = !shouldDisableStandardFields;
	}
	if (effectsTriggerField) {
		effectsTriggerField.hidden = !shouldShowTriggerField;
	}
	if (effectsStandardFields) {
		effectsStandardFields.hidden = shouldDisableStandardFields || isDescriptionMode;
	}
	if (effectsDescriptionValueField) {
		effectsDescriptionValueField.hidden = !isDescriptionMode || shouldDisableStandardFields;
	}
	if (!isDescriptionMode && effectsDescriptionValueInput) {
		effectsDescriptionValueInput.checked = false;
	}

	if (effectsHowSelect) {
		effectsHowSelect.disabled = shouldDisableStandardFields;
	}
	if (effectsPropertiesSelect) {
		effectsPropertiesSelect.disabled = shouldDisableStandardFields;
	}
	if (effectsActivationSelect) {
		effectsActivationSelect.disabled = shouldDisableStandardFields;
	}
	if (effectsModifierDefinitionSelect) {
		effectsModifierDefinitionSelect.disabled = shouldDisableStandardFields;
	}
	if (effectsTriggerSelect) {
		effectsTriggerSelect.disabled = !shouldShowTriggerField;
	}
	if (effectsTriggerAddButton) {
		effectsTriggerAddButton.disabled = !shouldShowTriggerField;
	}
	if (shouldDisableStandardFields) {
		setSelectedModifierProperties('power-and-count');
		if (effectsModifierPropertiesSelect) {
			effectsModifierPropertiesSelect.disabled = true;
		}
		updateEffectsModifierHowVisibility();
		updateEffectsModifierDefinitionVisibility();
	} else if (effectsModifierPropertiesSelect) {
		effectsModifierPropertiesSelect.disabled = false;
	}
}

/* Targets (Afeta) helpers - select + add button with removable tags */
function getSelectedEffectTargets() {
	if (!effectsTargetList) {
		return [];
	}

	return Array.from(effectsTargetList.querySelectorAll('[data-value]')).map((el) => String(el.dataset.value));
}

function setSelectedEffectTargets(values) {
	if (!effectsTargetList) {
		return;
	}

	effectsTargetList.innerHTML = '';
	const wanted = Array.from(values || []).map((v) => String(v));
	wanted.forEach((val) => {
		const opt = Array.from(effectsTargetSelect?.options || []).find((o) => String(o.value) === String(val));
		const label = opt ? opt.textContent : String(val);
		addTargetTag(val, label);
	});
}

function getSelectedEffectTargetNormalized() {
	const selected = getSelectedEffectTargets();
	if (!selected.length) {
		return 'none';
	}

	const hasLife = selected.includes('life');
	const hasStagger = selected.includes('stagger');
	const hasSpeed = selected.includes('speed');
	const hasCa = selected.includes('ca');
	const hasMovement = selected.includes('movement');

	if (hasLife && hasStagger) return 'life-and-stagger';
	if (hasLife) return 'life';
	if (hasStagger) return 'stagger';
	if (hasSpeed) return 'speed';
	if (hasCa) return 'ca';
	if (hasMovement) return 'movement';

	return DEFAULT_EFFECT_TARGET;
}


function addTargetTag(value, label) {
	if (!effectsTargetList) return;
	const existing = effectsTargetList.querySelector(`[data-value="${CSS.escape(String(value))}"]`);
	if (existing) return;

	const chip = document.createElement('span');
	chip.className = 'creator__keyword-chip';
	chip.setAttribute('data-value', String(value));
	chip.textContent = label;

	const removeButton = document.createElement('button');
	removeButton.type = 'button';
	removeButton.className = 'creator__keyword-remove';
	removeButton.setAttribute('aria-label', `Remover ${label}`);
	removeButton.textContent = '×';
	removeButton.addEventListener('click', () => {
		chip.remove();
	});

	chip.appendChild(removeButton);
	effectsTargetList.appendChild(chip);
}

function addTriggerTag(value, label) {
	if (!effectsTriggerList) return;

	effectsTriggerList.innerHTML = '';

	const chip = document.createElement('span');
	chip.className = 'creator__keyword-chip';
	chip.setAttribute('data-value', String(value));
	chip.textContent = label;

	const removeButton = document.createElement('button');
	removeButton.type = 'button';
	removeButton.className = 'creator__keyword-remove';
	removeButton.setAttribute('aria-label', `Remover ${label}`);
	removeButton.textContent = 'Ã—';
	removeButton.addEventListener('click', () => {
		chip.remove();
		if (effectsTriggerSelect) {
			effectsTriggerSelect.value = 'on-hit';
		}
	});

	chip.appendChild(removeButton);
	effectsTriggerList.appendChild(chip);
}

function getSelectedEffectTriggerList() {
	if (!effectsTriggerList) {
		return [];
	}

	return Array.from(effectsTriggerList.querySelectorAll('[data-value]')).map((el) => normalizeEffectTrigger(el.dataset.value));
}

function setSelectedEffectTriggerList(values) {
	if (!effectsTriggerList) {
		return;
	}

	effectsTriggerList.innerHTML = '';
	const normalizedValues = Array.from(values || [])
		.map((value) => normalizeEffectTrigger(value))
		.filter(Boolean);
	if (!normalizedValues.length) {
		if (effectsTriggerSelect) {
			effectsTriggerSelect.value = 'on-hit';
		}
		return;
	}

	const uniqueValue = normalizedValues[0];
	const label = getEffectTriggerLabel(uniqueValue) || uniqueValue;
	addTriggerTag(uniqueValue, label);
	if (effectsTriggerSelect) {
		effectsTriggerSelect.value = uniqueValue;
	}
}

function getAllowedEffectTargetsForBehavior(behavior) {
	return normalizeEffectBehavior(behavior) === 'amplifier'
		? new Set(['life', 'stagger'])
		: null;
}

function updateEffectsTargetAvailability() {
	if (!effectsTargetSelect) {
		return;
	}

	const behavior = getSelectedEffectBehavior();
	const allowedTargets = getAllowedEffectTargetsForBehavior(behavior);
	const availableTargets = Array.from(effectsTargetSelect.options)
		.filter((option) => !allowedTargets || allowedTargets.has(option.value))
		.map((option) => option.value);

	Array.from(effectsTargetSelect.options).forEach((option) => {
		const isAllowed = !allowedTargets || allowedTargets.has(option.value);
		option.hidden = !isAllowed;
		option.disabled = !isAllowed;
	});

	if (!allowedTargets) {
		return;
	}

	const selectedTargets = getSelectedEffectTargets();
	const filteredTargets = selectedTargets.filter((value) => allowedTargets.has(value));
	if (filteredTargets.length !== selectedTargets.length) {
		setSelectedEffectTargets(filteredTargets.length ? filteredTargets : ['life']);
	}

	if (!availableTargets.includes(effectsTargetSelect.value)) {
		effectsTargetSelect.value = filteredTargets[0] || 'life';
	}
}

function updateEffectsModifierDefinitionVisibility() {
	if (!effectsModifierDefinitionField || !effectsActivationSelect) {
		return;
	}

	const isModifierActivation = effectsActivationSelect.value === 'modifier';
	effectsModifierDefinitionField.hidden = !isModifierActivation;
}

function updateEffectsHowVisibility() {
	if (!effectsHowField || !effectsTargetSelect || !effectsHowSelect) {
		return;
	}

	if (getSelectedEffectPropertiesMode() === 'description') {
		effectsHowField.hidden = true;
		effectsHowSelect.value = 'reduce';
		return;
	}

	const target = normalizeEffectTarget(effectsTargetSelect.value);
	const shouldShow = target !== 'none';
	effectsHowField.hidden = !shouldShow;
	if (!shouldShow) {
		effectsHowSelect.value = 'reduce';
	}
}

function updateEffectsModifierHowVisibility() {
	if (!effectsModifierHowField || !effectsModifierHowSelect) {
		return;
	}

	effectsModifierHowField.hidden = false;
}

function beginEditEffect(effectId) {
	const normalizedId = normalizeMesaEffectId(effectId);
	if (!normalizedId || !effectsNameInput) {
		return;
	}

	const existingEffect = effectsRegistry.find((effect) => effect.id === normalizedId);
	if (!existingEffect) {
		return;
	}

	editingEffectId = existingEffect.id;
	editEffectBaseImage = existingEffect.icon;
	selectedEffectImageFile = null;

	effectsNameInput.value = existingEffect.name;
	if (effectsHowSelect) {
		effectsHowSelect.value = normalizeEffectHow(existingEffect.how);
	}
	if (effectsModifierHowSelect) {
		effectsModifierHowSelect.value = normalizeEffectBehavior(existingEffect.behavior) === 'modifier'
			? normalizeEffectHow(existingEffect.how)
			: 'reduce';
	}
	setSelectedEffectPropertiesMode(existingEffect.behavior === 'modifier' ? 'modifier' : existingEffect.properties);
	setSelectedEffectTriggerList(Array.isArray(existingEffect.triggers) && existingEffect.triggers.length
		? existingEffect.triggers
		: (existingEffect.trigger ? [existingEffect.trigger] : []));

	// populate Afeta (targets) - support new `targets` array or legacy `target` string
	if (Array.isArray(existingEffect.targets) && existingEffect.targets.length) {
		setSelectedEffectTargets(existingEffect.targets);
	} else if (existingEffect.target) {
		if (existingEffect.target === 'life-and-stagger') {
			setSelectedEffectTargets(['life', 'stagger']);
		} else if (existingEffect.target === 'none') {
			setSelectedEffectTargets([]);
		} else {
			setSelectedEffectTargets([existingEffect.target]);
		}
	} else {
		// no targets present for this effect; leave empty so the list is hidden
		setSelectedEffectTargets([]);
	}
	if (effectsDescriptionInput) {
		effectsDescriptionInput.value = existingEffect.description || '';
	}
	if (effectsDescriptionValueInput) {
		effectsDescriptionValueInput.checked = Boolean(existingEffect.valueEnabled);
	}
	if (effectsImageInput) {
		effectsImageInput.value = '';
	}
	if (effectsAddButton) {
		effectsAddButton.textContent = 'Salvar Alterações';
	}

	updateEffectsImageButtonLabel();
	updateEffectsImagePreview();
	updateEffectsBehaviorState();
	updateEffectsHowVisibility();
	setEffectsFormOpen(true);
}

function setEffectsFormOpen(isOpen) {
	if (!effectsForm) {
		return;
	}

	effectsForm.hidden = !isOpen;
	if (effectsPanelHeading) {
		effectsPanelHeading.hidden = isOpen;
	}
	if (effectsRegistryList) {
		effectsRegistryList.hidden = isOpen;
	}
	if (effectsOpenFormButton) {
		effectsOpenFormButton.hidden = isOpen;
	}

	if (!isOpen) {
		resetEffectsForm();
		return;
	}

	effectsNameInput?.focus();
}

function removeSelectedEffectImage() {
	selectedEffectImageFile = null;
	editEffectBaseImage = '';
	if (effectsImageInput) {
		effectsImageInput.value = '';
	}
	updateEffectsImageButtonLabel();
	updateEffectsImagePreview();
}

function renderEffectsRegistry() {
	if (!effectsRegistryList) {
		return;
	}

	effectsRegistryList.innerHTML = '';
	if (!effectsRegistry.length) {
		const emptyState = document.createElement('p');
		emptyState.className = 'creator__keyword-empty';
		emptyState.textContent = 'Nenhum efeito cadastrado.';
		effectsRegistryList.appendChild(emptyState);
		return;
	}

	effectsRegistry.forEach((effect) => {
		const item = document.createElement('article');
		item.className = 'effects__item';
		item.dataset.effectId = effect.id;

		const image = document.createElement('img');
		image.className = 'effects__item-image';
		image.src = effect.icon;
		image.alt = effect.name;
		image.draggable = true;
		image.dataset.effectId = effect.id;
		image.title = 'Arraste para reordenar';

		const info = document.createElement('div');
		info.className = 'effects__item-info';

		const title = document.createElement('p');
		title.className = 'effects__item-name';
		title.textContent = effect.name;
		title.draggable = true;
		title.dataset.effectId = effect.id;
		title.title = 'Arraste para reordenar';

		const description = document.createElement('p');
		description.className = 'effects__item-target';
		const behaviorNorm = normalizeEffectBehavior(effect.behavior);
		let effectModeLabel = '';
		const triggerLabel = getEffectTriggerLabel(getMesaEffectTriggerValue(effect));
		if (behaviorNorm === 'reducao') {
			effectModeLabel = 'Redução';
		} else if (behaviorNorm === 'modifier') {
			const how = normalizeEffectHow(effect.how);
			effectModeLabel = how === 'increase' ? 'Aumentar Dano' : how === 'reducao' ? 'Redução' : 'Reduzir Dano';
		} else if (effect.properties === 'description') {
			effectModeLabel = effect.valueEnabled ? 'Description + Stack' : 'Description';
		} else if (effect.properties === 'power-and-count') {
			effectModeLabel = triggerLabel ? `Potency & Count - ${triggerLabel}` : 'Potency & Count';
		} else {
			effectModeLabel = triggerLabel ? `Potency - ${triggerLabel}` : 'Potency';
		}
		description.textContent = `${effectModeLabel} - ${String(effect.description ?? '').trim() || 'Sem descrição.'}`;

		const actions = document.createElement('div');
		actions.className = 'effects__item-actions';

		const editButton = document.createElement('button');
		editButton.type = 'button';
		editButton.className = 'effects__item-edit';
		editButton.dataset.effectId = effect.id;
		editButton.setAttribute('aria-label', `Editar ${effect.name}`);
		editButton.title = `Editar ${effect.name}`;
		editButton.textContent = '✎';

		const removeButton = document.createElement('button');
		removeButton.type = 'button';
		removeButton.className = 'creator__keyword-remove effects__item-remove';
		removeButton.dataset.effectId = effect.id;
		removeButton.setAttribute('aria-label', `Remover ${effect.name}`);
		removeButton.textContent = '×';

		info.append(title, description);
		actions.append(editButton, removeButton);
		item.append(image, info, actions);
		effectsRegistryList.appendChild(item);
	});
}

function syncMesaEffectsWithRegistry() {
	const validEffectIds = new Set(effectsRegistry.map((effect) => effect.id));
	const mesaState = readMesaState();
	let hasChanges = false;

	characters.forEach((character) => {
		const key = getCharacterKey(character.nome);
		if (!(key in mesaState)) {
			return;
		}

		const currentEntry = getMesaStateEntry(character, mesaState);
		const nextEffects = currentEntry.effects.filter((effect) => validEffectIds.has(effect.id));
		if (nextEffects.length === currentEntry.effects.length) {
			return;
		}

		setMesaStateEntry(character, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
		hasChanges = true;
	});

	if (hasChanges) {
		writeMesaState(mesaState);
	}
}

async function addEffect() {
	if (!effectsNameInput) {
		return;
	}

	const effectName = normalizeEffectName(effectsNameInput.value);
	if (!effectName) {
		await showCaptionInfo('Atencao', 'Digite o nome do efeito.');
		return;
	}

	if (!selectedEffectImageFile && !editEffectBaseImage) {
		await showCaptionInfo('Atencao', 'Escolha uma imagem para o efeito.');
		return;
	}

	const behavior = getSelectedEffectBehavior();
	const selectedTargets = behavior === 'modifier' ? ['life'] : getSelectedEffectTargets();
	const target = behavior === 'modifier' ? 'life' : getSelectedEffectTargetNormalized();
	const description = effectsDescriptionInput?.value?.trim() || '';
	const valueEnabled = Boolean(effectsDescriptionValueInput?.checked);
	const how = behavior === 'modifier'
		? getSelectedModifierHow()
		: normalizeEffectHow(effectsHowSelect?.value ?? 'increase');
	const properties = behavior === 'modifier'
		? 'power'
		: getSelectedEffectPropertiesMode();
	const selectedTrigger = properties === 'power' || properties === 'power-and-count'
		? getSelectedEffectTrigger()
		: '';
	const activation = behavior === 'modifier' ? 'modifier' : 'manual';
	const modifierDefinition = 'attack';
	const hasDuplicateName = effectsRegistry.some((effect) => {
		if (effect.id === editingEffectId) {
			return false;
		}

		return effect.name.toLowerCase() === effectName.toLowerCase();
	});
	if (hasDuplicateName) {
		await showCaptionInfo('Atencao', 'Ja existe um efeito com esse nome.');
		return;
	}

	const isEditing = Boolean(editingEffectId);

	const confirmedSave = await showCaptionWindow({
		title: isEditing ? 'Confirmar Edicao' : 'Confirmar Cadastro',
		message: isEditing
			? `Deseja salvar as alteracoes do efeito ${effectName}?`
			: `Deseja cadastrar o efeito ${effectName}?`,
		confirmText: isEditing ? 'Salvar' : 'Cadastrar'
	});

	if (!confirmedSave) {
		return;
	}

	const imageData = selectedEffectImageFile
		? await readFileAsDataURL(selectedEffectImageFile)
		: editEffectBaseImage;
	const nextEffect = {
		id: isEditing ? editingEffectId : createEffectId(effectName),
		name: effectName,
		description,
		icon: imageData,
		behavior,
		target,
		targets: selectedTargets,
		how,
		properties,
		valueEnabled: properties === 'description' ? valueEnabled : false,
		triggers: selectedTrigger ? [selectedTrigger] : [],
		trigger: selectedTrigger,
		triggerEnabled: Boolean(selectedTrigger),
		activation,
		modifierDefinition,
	};

	if (isEditing) {
		effectsRegistry = effectsRegistry.map((effect) => (effect.id === editingEffectId ? nextEffect : effect));
	} else {
		effectsRegistry = [nextEffect, ...effectsRegistry];
	}

	writeStoredEffects(effectsRegistry);
	renderEffectsRegistry();
	renderMesaEffectOptions();
	setEffectsFormOpen(false);
}

async function deleteEffect(effectId) {
	const normalizedId = normalizeMesaEffectId(effectId);
	if (!normalizedId) {
		return;
	}

	const existingEffect = effectsRegistry.find((effect) => effect.id === normalizedId);
	if (!existingEffect) {
		return;
	}

	const confirmedDelete = await showCaptionWindow({
		title: 'Confirmar Exclusao',
		message: `Deseja remover o efeito ${existingEffect.name}?`,
		confirmText: 'Remover'
	});

	if (!confirmedDelete) {
		return;
	}

	effectsRegistry = effectsRegistry.filter((effect) => effect.id !== normalizedId);
	writeStoredEffects(effectsRegistry);
	syncMesaEffectsWithRegistry();
	renderEffectsRegistry();
	renderMesaEffectOptions();
	renderMesaStatus();
}

function normalizeKeywordValue(value) {
	return String(value ?? '').trim();
}

function getCharacterKeywords(character) {
	if (Array.isArray(character?.palavrasChave)) {
		return character.palavrasChave
			.map((keyword) => normalizeKeywordValue(keyword))
			.filter(Boolean);
	}

	const legacyKeyword = normalizeKeywordValue(character?.palavraChave);
	return legacyKeyword ? [legacyKeyword] : [];
}

function renderKeywordSelect(selectElement, selectedValue) {
	if (!selectElement) {
		return;
	}

	const normalizedSelectedValue = normalizeKeywordValue(selectedValue);
	const hasSelectedValue = normalizedSelectedValue && !keywordRegistry.some((keyword) => keyword.toLowerCase() === normalizedSelectedValue.toLowerCase());

	selectElement.innerHTML = '';

	const placeholderOption = document.createElement('option');
	placeholderOption.value = '';
	placeholderOption.textContent = keywordRegistry.length ? 'Selecione uma palavra chave' : 'Cadastre uma palavra chave';
	placeholderOption.disabled = !keywordRegistry.length;
	placeholderOption.selected = !normalizedSelectedValue;
	selectElement.appendChild(placeholderOption);

	if (hasSelectedValue) {
		const orphanOption = document.createElement('option');
		orphanOption.value = normalizedSelectedValue;
		orphanOption.textContent = normalizedSelectedValue;
		selectElement.appendChild(orphanOption);
	}

	keywordRegistry.forEach((keyword) => {
		const option = document.createElement('option');
		option.value = keyword;
		option.textContent = keyword;
		selectElement.appendChild(option);
	});

	selectElement.disabled = !keywordRegistry.length;
	selectElement.value = normalizedSelectedValue || '';
}

function renderSelectedKeywordList(container, selectedKeywords, scope) {
	if (!container) {
		return;
	}

	container.innerHTML = '';
	if (!selectedKeywords.length) {
		const emptyState = document.createElement('p');
		emptyState.className = 'creator__keyword-empty';
		emptyState.textContent = 'Nenhuma palavra chave selecionada.';
		container.appendChild(emptyState);
		return;
	}

	selectedKeywords.forEach((keyword, index) => {
		const chip = document.createElement('span');
		chip.className = 'creator__keyword-chip';
		chip.textContent = keyword;

		const removeButton = document.createElement('button');
		removeButton.type = 'button';
		removeButton.className = 'creator__keyword-remove';
		removeButton.dataset.scope = scope;
		removeButton.dataset.index = String(index);
		removeButton.setAttribute('aria-label', `Remover ${keyword}`);
		removeButton.textContent = '×';

		chip.appendChild(removeButton);
		container.appendChild(chip);
	});
}

function addKeywordToSelection(scope) {
	const isCreateScope = scope === 'create';
	const selectElement = isCreateScope ? createKeywordSelect : editKeywordSelect;
	const selectedKeywords = isCreateScope ? createSelectedKeywords : editSelectedKeywords;

	if (!selectElement || !keywordRegistry.length) {
		return;
	}

	const selectedKeyword = normalizeKeywordValue(selectElement.value);
	if (!selectedKeyword) {
		return;
	}

	if (selectedKeywords.some((keyword) => keyword.toLowerCase() === selectedKeyword.toLowerCase())) {
		return;
	}

	selectedKeywords.push(selectedKeyword);

	if (isCreateScope) {
		renderSelectedKeywordList(createKeywordSelectedList, createSelectedKeywords, 'create');
	} else {
		renderSelectedKeywordList(editKeywordSelectedList, editSelectedKeywords, 'edit');
	}

	selectElement.value = '';
}

function removeKeywordFromSelection(scope, index) {
	const selectedKeywords = scope === 'create' ? createSelectedKeywords : editSelectedKeywords;
	if (index < 0 || index >= selectedKeywords.length) {
		return;
	}

	selectedKeywords.splice(index, 1);
	if (scope === 'create') {
		renderSelectedKeywordList(createKeywordSelectedList, createSelectedKeywords, 'create');
	} else {
		renderSelectedKeywordList(editKeywordSelectedList, editSelectedKeywords, 'edit');
	}
}

function renderKeywordRegistry() {
	if (keywordRegistryList) {
		keywordRegistryList.innerHTML = '';

		if (!keywordRegistry.length) {
			const emptyState = document.createElement('p');
			emptyState.className = 'creator__keyword-empty';
			emptyState.textContent = 'Nenhuma palavra chave cadastrada.';
			keywordRegistryList.appendChild(emptyState);
		} else {
			keywordRegistry.forEach((keyword) => {
				const chip = document.createElement('span');
				chip.className = 'creator__keyword-chip';
				chip.textContent = keyword;

				const removeButton = document.createElement('button');
				removeButton.type = 'button';
				removeButton.className = 'creator__keyword-remove';
				removeButton.dataset.keyword = keyword;
				removeButton.setAttribute('aria-label', `Remover ${keyword}`);
				removeButton.textContent = '×';

				chip.appendChild(removeButton);
				keywordRegistryList.appendChild(chip);
			});
		}
	}

	renderKeywordSelect(createKeywordSelect, createKeywordSelect?.value || '');
	renderKeywordSelect(editKeywordSelect, editKeywordSelect?.value || '');
	renderSelectedKeywordList(createKeywordSelectedList, createSelectedKeywords, 'create');
	renderSelectedKeywordList(editKeywordSelectedList, editSelectedKeywords, 'edit');
}

async function addKeyword() {
	if (!keywordInput) {
		return;
	}

	const nextKeyword = normalizeKeywordValue(keywordInput.value);
	if (!nextKeyword) {
		await showCaptionInfo('Atencao', 'Digite uma palavra chave.');
		return;
	}

	const existingKeyword = keywordRegistry.find((keyword) => keyword.toLowerCase() === nextKeyword.toLowerCase());
	if (existingKeyword) {
		await showCaptionInfo('Atencao', 'Essa palavra chave já foi cadastrada.');
		keywordInput.value = '';
		return;
	}

	keywordRegistry = [...keywordRegistry, nextKeyword].sort((left, right) => left.localeCompare(right, 'pt-BR', { sensitivity: 'base' }));
	writeStoredKeywords(keywordRegistry);
	keywordInput.value = '';
	renderKeywordRegistry();
	if (createKeywordSelect) {
		createKeywordSelect.value = nextKeyword;
	}
	if (editKeywordSelect) {
		editKeywordSelect.value = nextKeyword;
	}
}

async function deleteKeyword(keywordToDelete) {
	const normalizedKeyword = normalizeKeywordValue(keywordToDelete);
	if (!normalizedKeyword) {
		return;
	}

	const existingKeyword = keywordRegistry.find((keyword) => keyword.toLowerCase() === normalizedKeyword.toLowerCase());
	if (!existingKeyword) {
		return;
	}

	const confirmedDelete = await showCaptionWindow({
		title: 'Confirmar Exclusao',
		message: `Deseja remover a palavra chave ${existingKeyword}?`,
		confirmText: 'Remover'
	});

	if (!confirmedDelete) {
		return;
	}

	keywordRegistry = keywordRegistry.filter((keyword) => keyword.toLowerCase() !== existingKeyword.toLowerCase());
	writeStoredKeywords(keywordRegistry);

	createSelectedKeywords = createSelectedKeywords.filter((keyword) => keyword.toLowerCase() !== existingKeyword.toLowerCase());
	editSelectedKeywords = editSelectedKeywords.filter((keyword) => keyword.toLowerCase() !== existingKeyword.toLowerCase());

	const nextCharacters = readStoredCharacters().map((character) => {
		const nextCharacter = { ...character };

		if (Array.isArray(character.palavrasChave)) {
			nextCharacter.palavrasChave = character.palavrasChave.filter((keyword) => normalizeKeywordValue(keyword).toLowerCase() !== existingKeyword.toLowerCase());
		}

		if (normalizeKeywordValue(character.palavraChave).toLowerCase() === existingKeyword.toLowerCase()) {
			delete nextCharacter.palavraChave;
		}

		return nextCharacter;
	});

	writeStoredCharacters(nextCharacters);
	characters = [...nextCharacters];
	updateMesaAvailability();

	renderKeywordRegistry();
	renderCharacterDetails();
	renderEditCharacterPanel();

	await showCaptionInfo('Sucesso', 'Palavra chave removida com sucesso.');
}

function parseNonNegativeInt(value) {
	return normalizeMesaCalculatedIntegerValue(value, 0);
}

function getCharacterKey(characterName) {
	return characterName.trim().toLowerCase();
}

function getCharacterMaxLife(character) {
	return parseNonNegativeInt(character.vida);
}

function getDefaultMesaSinValues() {
	return Object.fromEntries(MESA_SIN_FIELDS.map(({ key }) => [key, 0]));
}

function normalizeMesaSinValues(rawValues) {
	const nextValues = getDefaultMesaSinValues();
	if (!rawValues || typeof rawValues !== 'object' || Array.isArray(rawValues)) {
		return nextValues;
	}

	for (const { key } of MESA_SIN_FIELDS) {
		nextValues[key] = parseNonNegativeInt(rawValues[key]);
	}

	return nextValues;
}

function createDefaultMesaStateEntry(character) {
	return {
		life: getCharacterMaxLife(character),
		stagger: getCharacterMaxStagger(character),
		shield: 0,
		bonusShield: 0,
		effects: [],
		speedValue: getDefaultMesaSpeedFieldValue(character),
		caValue: getDefaultMesaCaFieldValue(character),
		movementValue: getDefaultMesaMovementFieldValue(character),
		comments: '',
		mpValue: '',
		combatTab: 'effects',
		staggerDamageActive: false,
		sins: getDefaultMesaSinValues()
	};
}

function getCharacterMaxStagger(character) {
	return parseNonNegativeInt(character.stagger);
}

function getMesaStateEntry(character, mesaState) {
	const key = getCharacterKey(character.nome);
	const defaultEntry = createDefaultMesaStateEntry(character);

	if (!(key in mesaState)) {
		return defaultEntry;
	}

	const rawEntry = mesaState[key];
	if (typeof rawEntry === 'number' || typeof rawEntry === 'string') {
		return {
			...defaultEntry,
			life: Math.min(parseNonNegativeInt(rawEntry), defaultEntry.life)
		};
	}

	if (!rawEntry || typeof rawEntry !== 'object' || Array.isArray(rawEntry)) {
		return defaultEntry;
	}

	const effects = Array.isArray(rawEntry.effects)
		? rawEntry.effects.map((effect, index) => normalizeMesaEffect(effect, index)).filter(Boolean)
		: [];
	const sins = normalizeMesaSinValues(rawEntry.sins);

	return {
		...defaultEntry,
		life: Math.min(parseNonNegativeInt(rawEntry.life), defaultEntry.life),
		stagger: Math.min(parseNonNegativeInt(rawEntry.stagger), defaultEntry.stagger),
		shield: parseNonNegativeInt(rawEntry.shield),
		bonusShield: parseNonNegativeInt(rawEntry.bonusShield ?? rawEntry.yellowShield ?? rawEntry.extraShield),
		effects,
		speedValue: typeof rawEntry.speedValue === 'string' ? rawEntry.speedValue : getDefaultMesaSpeedFieldValue(character),
		caValue: typeof rawEntry.caValue === 'string' ? rawEntry.caValue : getDefaultMesaCaFieldValue(character),
		movementValue: typeof rawEntry.movementValue === 'string' ? rawEntry.movementValue : getDefaultMesaMovementFieldValue(character),
		comments: String(rawEntry.comments ?? rawEntry.observacoes ?? rawEntry.comment ?? '').trim(),
		mpValue: String(rawEntry.mpValue ?? rawEntry.mp ?? '').trim(),
		combatTab: MESA_COMBAT_TABS.has(String(rawEntry.combatTab ?? '').trim().toLowerCase()) ? String(rawEntry.combatTab).trim().toLowerCase() : 'effects',
		staggerDamageActive: Boolean(rawEntry.staggerDamageActive ?? rawEntry.staggerActive ?? false),
		sins
	};
}

function setMesaStateEntry(character, mesaState, nextLife, nextStagger, nextEffects, nextSpeedValue, nextCaValue, nextMovementValue, nextStaggerDamageActive, nextComments, nextCombatTab, nextShieldValue, nextSinsValues, nextMpValue, nextBonusShieldValue) {
	const maxLife = getCharacterMaxLife(character);
	const maxStagger = getCharacterMaxStagger(character);
	const key = getCharacterKey(character.nome);
	const currentEntry = getMesaStateEntry(character, mesaState);
	const clampedLife = Math.min(Math.max(parseNonNegativeInt(nextLife), 0), maxLife);
	const clampedStagger = Math.min(Math.max(parseNonNegativeInt(nextStagger), 0), maxStagger);
	const shieldValue = nextShieldValue === undefined ? currentEntry.shield : Math.max(parseNonNegativeInt(nextShieldValue), 0);
	const bonusShieldValue = nextBonusShieldValue === undefined ? currentEntry.bonusShield : Math.max(parseNonNegativeInt(nextBonusShieldValue), 0);
	const effects = Array.isArray(nextEffects)
		? nextEffects.map((effect, index) => normalizeMesaEffect(effect, index)).filter(Boolean)
		: currentEntry.effects;
	const speedValue = nextSpeedValue === undefined
		? currentEntry.speedValue
		: String(nextSpeedValue ?? '').trim();
	const caValue = nextCaValue === undefined
		? currentEntry.caValue
		: String(nextCaValue ?? '').trim();
	const movementValue = nextMovementValue === undefined
		? currentEntry.movementValue
		: String(nextMovementValue ?? '').trim();
	const staggerDamageActive = nextStaggerDamageActive === undefined
		? Boolean(currentEntry.staggerDamageActive)
		: Boolean(nextStaggerDamageActive);
	const comments = nextComments === undefined
		? currentEntry.comments
		: String(nextComments ?? '').trim();
	const mpValue = nextMpValue === undefined
		? currentEntry.mpValue
		: String(nextMpValue ?? '').trim();
	const combatTab = nextCombatTab === undefined
		? currentEntry.combatTab
		: (MESA_COMBAT_TABS.has(String(nextCombatTab ?? '').trim().toLowerCase()) ? String(nextCombatTab).trim().toLowerCase() : 'effects');
	const sins = nextSinsValues === undefined
		? currentEntry.sins
		: normalizeMesaSinValues(nextSinsValues);
	const defaultSpeedValue = getDefaultMesaSpeedFieldValue(character);
	const defaultCaValue = getDefaultMesaCaFieldValue(character);
	const defaultMovementValue = getDefaultMesaMovementFieldValue(character);

	if (
		clampedLife === maxLife
		&& clampedStagger === maxStagger
		&& !effects.length
		&& speedValue === defaultSpeedValue
		&& caValue === defaultCaValue
		&& movementValue === defaultMovementValue
		&& shieldValue === 0
		&& bonusShieldValue === 0
		&& !comments
		&& !mpValue
		&& combatTab === 'effects'
		&& !staggerDamageActive
		&& Object.values(sins).every((value) => value === 0)
	) {
		delete mesaState[key];
		return;
	}

	mesaState[key] = {
		life: clampedLife,
		stagger: clampedStagger,
		shield: shieldValue,
		bonusShield: bonusShieldValue,
		effects,
		speedValue,
		caValue,
		movementValue,
		comments,
		mpValue,
		combatTab,
		staggerDamageActive,
		sins
	};
}

function readMesaState() {
	try {
		const storedState = localStorage.getItem(MESA_STATE_KEY);
		if (!storedState) {
			return {};
		}

		const parsedState = JSON.parse(storedState);
		if (!parsedState || typeof parsedState !== 'object' || Array.isArray(parsedState)) {
			localStorage.removeItem(MESA_STATE_KEY);
			return {};
		}

		return parsedState;
	} catch {
		localStorage.removeItem(MESA_STATE_KEY);
		return {};
	}
}

function writeMesaState(nextState) {
	const stateKeys = Object.keys(nextState);
	if (!stateKeys.length) {
		localStorage.removeItem(MESA_STATE_KEY);
		return;
	}

	localStorage.setItem(MESA_STATE_KEY, JSON.stringify(nextState));
}

function readMesaInstancesState() {
	const emptyState = { openCharacterNames: [], activeCharacterName: '' };

	try {
		const storedState = localStorage.getItem(MESA_INSTANCES_KEY);
		if (!storedState) {
			return emptyState;
		}

		const parsedState = JSON.parse(storedState);
		if (!parsedState || typeof parsedState !== 'object' || Array.isArray(parsedState)) {
			localStorage.removeItem(MESA_INSTANCES_KEY);
			return emptyState;
		}

		const openCharacterNames = Array.isArray(parsedState.openCharacterNames)
			? parsedState.openCharacterNames.map((name) => String(name ?? '').trim()).filter(Boolean)
			: [];
		const activeCharacterName = String(parsedState.activeCharacterName ?? '').trim();

		return {
			openCharacterNames: Array.from(new Set(openCharacterNames)),
			activeCharacterName
		};
	} catch {
		localStorage.removeItem(MESA_INSTANCES_KEY);
		return emptyState;
	}
}

function writeMesaInstancesState(nextState) {
	const openCharacterNames = Array.isArray(nextState?.openCharacterNames)
		? Array.from(new Set(nextState.openCharacterNames.map((name) => String(name ?? '').trim()).filter(Boolean)))
		: [];
	const activeCharacterName = String(nextState?.activeCharacterName ?? '').trim();

	if (!openCharacterNames.length && !activeCharacterName) {
		localStorage.removeItem(MESA_INSTANCES_KEY);
		return;
	}

	localStorage.setItem(MESA_INSTANCES_KEY, JSON.stringify({
		openCharacterNames,
		activeCharacterName
	}));
}

function syncMesaInstancesWithCharacters(characterList) {
	const validCharacterNames = new Set(characterList.map((character) => character.nome));
	const nextOpenCharacterNames = mesaOpenCharacterNames.filter((name) => validCharacterNames.has(name));
	let nextActiveCharacterName = mesaActiveCharacterName;

	if (nextActiveCharacterName && !validCharacterNames.has(nextActiveCharacterName)) {
		nextActiveCharacterName = nextOpenCharacterNames[0] || '';
	}

	mesaOpenCharacterNames = nextOpenCharacterNames;
	mesaActiveCharacterName = nextActiveCharacterName;
	writeMesaInstancesState({
		openCharacterNames: mesaOpenCharacterNames,
		activeCharacterName: mesaActiveCharacterName
	});
}

function setMesaActiveCharacter(characterName, openIfNeeded = true) {
	const normalizedName = String(characterName ?? '').trim();
	if (!normalizedName) {
		mesaActiveCharacterName = '';
		lastLoadedMesaCharacter = '';
		if (mesaCharacterSelect) {
			mesaCharacterSelect.value = lastSelectedMesaCharacter && characters.some((character) => character.nome === lastSelectedMesaCharacter)
				? lastSelectedMesaCharacter
				: '';
		}
		writeMesaInstancesState({
			openCharacterNames: mesaOpenCharacterNames,
			activeCharacterName: ''
		});
		return;
	}

	if (openIfNeeded && !mesaOpenCharacterNames.includes(normalizedName)) {
		mesaOpenCharacterNames = [...mesaOpenCharacterNames, normalizedName];
	}

	mesaActiveCharacterName = normalizedName;
	lastLoadedMesaCharacter = normalizedName;
	if (mesaCharacterSelect) {
		mesaCharacterSelect.value = normalizedName;
	}
	writeMesaInstancesState({
		openCharacterNames: mesaOpenCharacterNames,
		activeCharacterName: mesaActiveCharacterName
	});
}

function closeMesaCharacterInstance(characterName) {
	const normalizedName = String(characterName ?? '').trim();
	if (!normalizedName) {
		return;
	}

	const wasActive = mesaActiveCharacterName === normalizedName;
	mesaOpenCharacterNames = mesaOpenCharacterNames.filter((name) => name !== normalizedName);

	if (!mesaOpenCharacterNames.length) {
		setMesaActiveCharacter('');
		clearMesaStatus();
		renderMesaInstanceBar();
		return;
	}

	if (wasActive) {
		const nextActiveCharacterName = mesaOpenCharacterNames[0];
		setMesaActiveCharacter(nextActiveCharacterName, false);
		renderMesaPanel();
		renderMesaStatus();
		return;
	}

	writeMesaInstancesState({
		openCharacterNames: mesaOpenCharacterNames,
		activeCharacterName: mesaActiveCharacterName
	});
	renderMesaInstanceBar();
}

function renderMesaInstanceBar() {
	if (!mesaInstanceBar) {
		return;
	}

	mesaInstanceBar.innerHTML = '';
	const hasOpenInstances = mesaOpenCharacterNames.length > 0;
	mesaInstanceBar.hidden = !hasOpenInstances;
	if (!hasOpenInstances) {
		return;
	}

	const fragment = document.createDocumentFragment();
	mesaOpenCharacterNames.forEach((characterName) => {
		const chip = document.createElement('button');
		chip.type = 'button';
		chip.className = 'mesa__instance-chip';
		if (characterName === mesaActiveCharacterName) {
			chip.classList.add('mesa__instance-chip--active');
		}
		chip.dataset.characterName = characterName;
		chip.textContent = characterName;
		fragment.appendChild(chip);
	});

	mesaInstanceBar.appendChild(fragment);
}

function syncMesaStateWithCharacters(characterList) {
	const mesaState = readMesaState();
	const validCharacterKeys = new Set(characterList.map((character) => getCharacterKey(character.nome)));
	let hasChanges = false;

	Object.keys(mesaState).forEach((key) => {
		if (!validCharacterKeys.has(key)) {
			delete mesaState[key];
			hasChanges = true;
		}
	});

	characterList.forEach((character) => {
		const key = getCharacterKey(character.nome);
		if (!(key in mesaState)) {
			return;
		}

		const maxLife = getCharacterMaxLife(character);
		const maxStagger = getCharacterMaxStagger(character);
		const normalizedEntry = getMesaStateEntry(character, mesaState);
		const hasDamageApplied = normalizedEntry.life < maxLife || normalizedEntry.stagger < maxStagger;
		const hasShieldApplied = normalizedEntry.shield > 0;
		const hasEffectsApplied = normalizedEntry.effects.length > 0;
		const hasSpeedOverride = normalizedEntry.speedValue !== getDefaultMesaSpeedFieldValue(character);
		const hasCaOverride = normalizedEntry.caValue !== getDefaultMesaCaFieldValue(character);
		const hasMovementOverride = normalizedEntry.movementValue !== getDefaultMesaMovementFieldValue(character);

		if (!hasDamageApplied && !hasShieldApplied && !hasEffectsApplied && !hasSpeedOverride && !hasCaOverride && !hasMovementOverride) {
			delete mesaState[key];
			hasChanges = true;
			return;
		}

		const existingEntry = mesaState[key];
		const needsRewrite = typeof existingEntry !== 'object'
			|| !existingEntry
			|| Array.isArray(existingEntry)
			|| parseNonNegativeInt(existingEntry.life) !== normalizedEntry.life
			|| parseNonNegativeInt(existingEntry.stagger) !== normalizedEntry.stagger
			|| parseNonNegativeInt(existingEntry.shield) !== normalizedEntry.shield
			|| JSON.stringify(existingEntry.effects ?? []) !== JSON.stringify(normalizedEntry.effects)
			|| String(existingEntry.speedValue ?? '') !== normalizedEntry.speedValue
			|| String(existingEntry.caValue ?? '') !== normalizedEntry.caValue
			|| String(existingEntry.movementValue ?? '') !== normalizedEntry.movementValue;

		if (needsRewrite) {
			mesaState[key] = {
				life: normalizedEntry.life,
				stagger: normalizedEntry.stagger,
				shield: normalizedEntry.shield,
				effects: normalizedEntry.effects,
				speedValue: normalizedEntry.speedValue,
				caValue: normalizedEntry.caValue,
				movementValue: normalizedEntry.movementValue
			};
			hasChanges = true;
		}
	});

	if (hasChanges) {
		writeMesaState(mesaState);
	}
}

function getSelectedMesaCharacter() {
	if (!characters.length) {
		return null;
	}

	const selectedName = String(mesaActiveCharacterName || lastLoadedMesaCharacter || '').trim();
	if (!selectedName) {
		return null;
	}

	return characters.find((character) => character.nome === selectedName) || null;
}

function getMesaCurrentLife(character, mesaState) {
	return getMesaStateEntry(character, mesaState).life;
}

function getMesaCurrentStagger(character, mesaState) {
	return getMesaStateEntry(character, mesaState).stagger;
}

function normalizeMesaCombatTab(value) {
	const normalizedTab = String(value ?? '').trim().toLowerCase();
	return MESA_COMBAT_TABS.has(normalizedTab) ? normalizedTab : 'effects';
}

function updateMesaCombatTabUI(combatTab) {
	const normalizedTab = normalizeMesaCombatTab(combatTab);
	if (mesaCombatEffectsTab) {
		mesaCombatEffectsTab.classList.toggle('mesa__combat-tab--active', normalizedTab === 'effects');
		mesaCombatEffectsTab.setAttribute('aria-selected', String(normalizedTab === 'effects'));
	}
	if (mesaCombatDescriptionsTab) {
		mesaCombatDescriptionsTab.classList.toggle('mesa__combat-tab--active', normalizedTab === 'descriptions');
		mesaCombatDescriptionsTab.setAttribute('aria-selected', String(normalizedTab === 'descriptions'));
	}
	if (mesaCombatSinsTab) {
		mesaCombatSinsTab.classList.toggle('mesa__combat-tab--active', normalizedTab === 'sins');
		mesaCombatSinsTab.setAttribute('aria-selected', String(normalizedTab === 'sins'));
	}
	if (mesaCombatEffectsPanel) {
		mesaCombatEffectsPanel.hidden = normalizedTab !== 'effects';
	}
	if (mesaCombatDescriptionsPanel) {
		mesaCombatDescriptionsPanel.hidden = normalizedTab !== 'descriptions';
	}
	if (mesaCombatSinsPanel) {
		mesaCombatSinsPanel.hidden = normalizedTab !== 'sins';
	}
}

function getMesaDamageStaggerState(character = getSelectedMesaCharacter()) {
	if (!character) {
		return false;
	}

	const mesaState = readMesaState();
	return Boolean(getMesaStateEntry(character, mesaState).staggerDamageActive);
}

function setMesaDamageStaggerState(character, isActive) {
	if (!character) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(character, mesaState);
	setMesaStateEntry(
		character,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		isActive
	);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function setMesaCombatTab(character, combatTab) {
	if (!character) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(character, mesaState);
	setMesaStateEntry(
		character,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		currentEntry.staggerDamageActive,
		currentEntry.comments,
		combatTab
	);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function persistMesaSinFields() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const nextSinsValues = Object.fromEntries(
		MESA_SIN_FIELDS.map(({ key }) => [
			key,
			mesaSinInputs[key] instanceof HTMLInputElement ? mesaSinInputs[key].value : currentEntry.sins[key]
		])
	);

	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		currentEntry.staggerDamageActive,
		currentEntry.comments,
		currentEntry.combatTab,
		undefined,
		nextSinsValues
	);
	writeMesaState(mesaState);
}

function setMesaDamageTypeSelection(activeType) {
	mesaDamageTypeControls.forEach(({ key, input }) => {
		if (!input) {
			return;
		}

		input.checked = key === activeType;
	});

	updateMesaDamagePreviewOverlay();
}

function getMesaDamageTypeSelection() {
	const selectedControl = mesaDamageTypeControls.find(({ input }) => input?.checked);
	return selectedControl?.key || DEFAULT_MESA_DAMAGE_TYPE;
}

function getMesaDamageResistanceMultiplier(character, damageType) {
	if (damageType === 'stagger') {
		return STAGGER_DAMAGE_MULTIPLIER;
	}

	const rawResistanceValue = String(character?.resistencias?.[damageType] ?? DEFAULT_RESISTANCE_VALUE).replace(',', '.').trim();
	const resistanceValue = Number.parseFloat(rawResistanceValue);
	return Number.isFinite(resistanceValue) ? resistanceValue : Number.parseFloat(DEFAULT_RESISTANCE_VALUE);
}

function updateMesaDamagePreviewOverlay() {
	if (!mesaCharacterStaggerOverlay || !mesaCharacterImage) {
		return;
	}

	const selectedCharacter = getSelectedMesaCharacter();
	const shouldShowOverlay = Boolean(selectedCharacter && !mesaCharacterImage.hidden && getMesaDamageStaggerState(selectedCharacter));
	mesaCharacterStaggerOverlay.hidden = !shouldShowOverlay;

	mesaDamageTypeControls.forEach(({ input }) => {
		if (input) {
			input.disabled = shouldShowOverlay;
		}
	});
}

function renderMesaEffects(selectedCharacter, mesaState) {
	if (!mesaEffectsList) {
		return;
	}

	mesaEffectsList.innerHTML = '';
	const effects = getMesaStateEntry(selectedCharacter, mesaState).effects;

	if (!effects.length) {
		const emptyState = document.createElement('p');
		emptyState.className = 'mesa__effect-empty';
		emptyState.textContent = 'Nenhum efeito adicionado.';
		mesaEffectsList.appendChild(emptyState);
		return;
	}

	effects.forEach((effect) => {
		const isDescriptionEffect = effect.properties === 'description';
		const isPowerOnlyEffect = effect.properties === 'power';
		const isPowerAndCountEffect = effect.properties === 'power-and-count';
		const isBehaviorModifier = normalizeEffectBehavior(effect.behavior) === 'modifier';
		const isModifierEffect = effect.activation === 'modifier' || isBehaviorModifier;
		const triggerValue = getMesaEffectTriggerValue(effect);
		const triggerLabel = getEffectTriggerLabel(triggerValue);
		const hasTrigger = Boolean(triggerLabel);
		const powerMinAttribute = isBehaviorModifier ? ' min="1"' : ' min="0"';
		const powerMaxAttribute = isBehaviorModifier ? ' max="10"' : '';
		const adjustmentValues = mesaEffectAdjustmentInputs[effect.instanceId] || {
			power: 1,
			count: 1,
			decreasePower: 1,
			decreaseCount: 1
		};
		const effectDescription = String(effect.description ?? getEffectTemplate(effect.id)?.description ?? '').trim() || 'Sem descrição.';
		const triggerRowMarkup = hasTrigger ? `
			<div class="mesa__effect-trigger-row">
				<label class="mesa__effect-trigger-toggle">
					<input type="checkbox" data-mesa-effect-trigger-enabled="${effect.instanceId}"${effect.triggerEnabled ? ' checked' : ''}>
					<span>${triggerLabel}</span>
				</label>
			</div>
		` : '';
		const effectCard = document.createElement('article');
		effectCard.className = `mesa__effect-card mesa__effect-card--${effect.id}`;
		effectCard.draggable = false;
		effectCard.dataset.mesaEffectInstance = effect.instanceId;
		if (isBehaviorModifier) {
			effectCard.innerHTML = `
				<div class="mesa__effect-card-header">
					<div class="mesa__effect-card-title-group mesa__effect-drag-handle" draggable="true">
						<img class="mesa__effect-icon" src="${effect.icon}" alt="" aria-hidden="true">
						<h3 class="mesa__effect-card-title">${effect.name}</h3>
					</div>
					<button class="mesa__effect-remove mesa__effect-remove--inline" type="button" data-mesa-effect-remove="${effect.instanceId}" aria-label="Remover ${effect.name}" title="Remover efeito">×</button>
				</div>
				<p class="mesa__effect-card-detail">${effectDescription}</p>
				<div class="mesa__effect-controls mesa__effect-controls--modifier">
					<label class="mesa__effect-field mesa__effect-potency-inline">
						<span class="mesa__effect-field-label">Potência</span>
						<input class="mesa__effect-input mesa__effect-input--compact" type="text" value="${effect.power}" data-mesa-effect-field="power" data-mesa-effect-instance="${effect.instanceId}">
					</label>
					<div class="mesa__effect-actions mesa__effect-actions--modifier">
						<label class="mesa__effect-modifier-toggle">
							<input type="checkbox" data-mesa-effect-active="${effect.instanceId}"${effect.active ? ' checked' : ''}>
							<span>Ativo</span>
						</label>
					</div>
				</div>
			`;
		} else if (isDescriptionEffect) {
			effectCard.innerHTML = `
				<div class="mesa__effect-card-header">
					<div class="mesa__effect-card-title-group mesa__effect-drag-handle" draggable="true">
						<img class="mesa__effect-icon" src="${effect.icon}" alt="" aria-hidden="true">
						<h3 class="mesa__effect-card-title">${effect.name}</h3>
					</div>
					<button class="mesa__effect-remove mesa__effect-remove--inline" type="button" data-mesa-effect-remove="${effect.instanceId}" aria-label="Remover ${effect.name}" title="Remover efeito">×</button>
				</div>
				<p class="mesa__effect-card-detail">${effectDescription}</p>
				${effect.valueEnabled ? `
				<label class="mesa__effect-field mesa__effect-description-value">
					<span class="mesa__effect-field-label">Stack</span>
					<input class="mesa__effect-input" type="text" value="${String(effect.value ?? '')}" data-mesa-effect-value="${effect.instanceId}" placeholder="Digite um valor">
				</label>
				` : ''}
			`;
		} else {
			effectCard.innerHTML = `
				<div class="mesa__effect-card-header">
					<div class="mesa__effect-card-title-group mesa__effect-drag-handle" draggable="true">
						<img class="mesa__effect-icon" src="${effect.icon}" alt="" aria-hidden="true">
						<h3 class="mesa__effect-card-title">${effect.name}</h3>
					</div>
					<button class="mesa__effect-remove mesa__effect-remove--inline" type="button" data-mesa-effect-remove="${effect.instanceId}" aria-label="Remover ${effect.name}" title="Remover efeito">×</button>
				</div>
				<p class="mesa__effect-card-detail">${effectDescription}</p>
				<div class="mesa__effect-controls${isPowerOnlyEffect ? ' mesa__effect-controls--power-only' : ' mesa__effect-controls--counted'}">
					${triggerRowMarkup}
					${isPowerOnlyEffect ? `
					<div class="mesa__effect-power-inline-row">
						<label class="mesa__effect-field mesa__effect-potency-inline">
							<span class="mesa__effect-field-label">Potência</span>
							<input class="mesa__effect-input mesa__effect-input--compact" type="text" value="${effect.power}" data-mesa-effect-field="power" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<button class="mesa__effect-apply mesa__effect-apply--primary" type="button" data-mesa-effect-apply="${effect.instanceId}">Ativar Efeito</button>
						<label class="mesa__effect-power-inline mesa__effect-power-adjustment-inline">
							<span class="mesa__effect-field-label">Aumentar / Diminuir</span>
							<input class="mesa__effect-input mesa__effect-input--compact" type="text" value="${adjustmentValues.power}" aria-label="Ajuste de potência" data-mesa-effect-adjustment-field="power" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<div class="mesa__effect-power-stepper" aria-label="Ajustar potência">
							<button class="mesa__effect-step-btn" type="button" data-mesa-effect-increase="${effect.instanceId}" data-mesa-effect-increase-field="power" aria-label="Aumentar potência" title="Aumentar potência">+</button>
							<button class="mesa__effect-step-btn" type="button" data-mesa-effect-decrease="${effect.instanceId}" data-mesa-effect-decrease-field="power" aria-label="Reduzir potência" title="Reduzir potência">-</button>
						</div>
					</div>
					` : `
					${hasTrigger ? `
					<div class="mesa__effect-trigger-row">
						<label class="mesa__effect-trigger-toggle">
							<input type="checkbox" data-mesa-effect-trigger-enabled="${effect.instanceId}"${effect.triggerEnabled ? ' checked' : ''}>
							<span>${triggerLabel}</span>
						</label>
					</div>
					` : ''}
					<label class="mesa__effect-field">
						<span class="mesa__effect-field-label">Potência</span>
						<input class="mesa__effect-input" type="text" value="${effect.power}" data-mesa-effect-field="power" data-mesa-effect-instance="${effect.instanceId}">
					</label>
					`}
					${isPowerOnlyEffect ? '' : `${(hasTrigger || isPowerAndCountEffect) ? `<button class="mesa__effect-apply mesa__effect-apply--primary" type="button" data-mesa-effect-apply="${effect.instanceId}"${effect.count <= 0 ? ' disabled' : ''}>Ativar Efeito</button>` : ''}`}
					${isPowerOnlyEffect ? '' : `
					<div class="mesa__effect-field mesa__effect-count-field">
						<div class="mesa__effect-count-header">
							<span class="mesa__effect-field-label">Count</span>
							<label class="mesa__effect-count-lock" title="Não reduzir o count ao ativar">
								<input type="checkbox" data-mesa-effect-preserve-count="${effect.instanceId}"${effect.preserveCount ? ' checked' : ''}>
								<span>Fixar</span>
							</label>
						</div>
						<input class="mesa__effect-input" type="text" value="${effect.count}" data-mesa-effect-field="count" data-mesa-effect-instance="${effect.instanceId}">
					</div>
					`}
					<div class="mesa__effect-actions${isModifierEffect ? ' mesa__effect-actions--modifier' : ''}">
						${isModifierEffect ? `
						<label class="mesa__effect-modifier-toggle">
							<input type="checkbox" data-mesa-effect-active="${effect.instanceId}"${effect.active ? ' checked' : ''}>
							<span>Ativo</span>
						</label>
						` : ''}
					</div>
				</div>
				<div class="mesa__effect-adjustments${isPowerOnlyEffect ? '' : ' mesa__effect-adjustments--with-count'}">
					${isPowerOnlyEffect ? '' : `
					<div class="mesa__effect-adjustment mesa__effect-adjustment--compact">
						<label class="mesa__effect-power-inline mesa__effect-power-adjustment-inline">
							<span class="mesa__effect-field-label">Aumentar / Diminuir Potência</span>
							<input class="mesa__effect-input mesa__effect-input--compact" type="text" value="${adjustmentValues.power}" aria-label="Ajuste de potência" data-mesa-effect-adjustment-field="power" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<div class="mesa__effect-power-stepper" aria-label="Ajustar potência">
							<button class="mesa__effect-step-btn" type="button" data-mesa-effect-increase="${effect.instanceId}" data-mesa-effect-increase-field="power" aria-label="Aumentar potência" title="Aumentar potência">+</button>
							<button class="mesa__effect-step-btn" type="button" data-mesa-effect-decrease="${effect.instanceId}" data-mesa-effect-decrease-field="power" aria-label="Reduzir potência" title="Reduzir potência">-</button>
						</div>
					</div>
					<div class="mesa__effect-adjustment mesa__effect-adjustment--compact">
						<label class="mesa__effect-power-inline mesa__effect-power-adjustment-inline">
							<span class="mesa__effect-field-label">Aumentar / Diminuir Count</span>
							<input class="mesa__effect-input mesa__effect-input--compact" type="text" value="${adjustmentValues.count}" aria-label="Ajuste de count" data-mesa-effect-adjustment-field="count" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<div class="mesa__effect-power-stepper" aria-label="Ajustar count">
							<button class="mesa__effect-step-btn" type="button" data-mesa-effect-increase="${effect.instanceId}" data-mesa-effect-increase-field="count" aria-label="Aumentar count" title="Aumentar count">+</button>
							<button class="mesa__effect-step-btn" type="button" data-mesa-effect-decrease="${effect.instanceId}" data-mesa-effect-decrease-field="count" aria-label="Reduzir count" title="Reduzir count">-</button>
						</div>
					</div>
					`}
				</div>
			`;
		}
		mesaEffectsList.appendChild(effectCard);
	});
}

function clearMesaEffectDropIndicators() {
	if (!mesaEffectsList) {
		return;
	}

	mesaEffectsList.querySelectorAll('.mesa__effect-card--drop-before, .mesa__effect-card--drop-after').forEach((card) => {
		card.classList.remove('mesa__effect-card--drop-before', 'mesa__effect-card--drop-after');
	});
}

function clearMesaEffectDragState() {
	if (mesaEffectsList) {
		mesaEffectsList.querySelectorAll('.mesa__effect-card--dragging').forEach((card) => {
			card.classList.remove('mesa__effect-card--dragging');
		});
	}

	clearMesaEffectDropIndicators();
	draggedMesaEffectInstanceId = '';
	dragOverMesaEffectInstanceId = '';
	dragOverMesaEffectInsertAfter = false;
}

function reorderMesaEffects(draggedInstanceId, targetInstanceId = '', insertAfter = false) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const normalizedDraggedId = String(draggedInstanceId ?? '').trim();
	const normalizedTargetId = String(targetInstanceId ?? '').trim();
	if (!normalizedDraggedId) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const sourceIndex = currentEntry.effects.findIndex((effect) => effect.instanceId === normalizedDraggedId);
	if (sourceIndex < 0) {
		return;
	}

	const nextEffects = [...currentEntry.effects];
	const [movedEffect] = nextEffects.splice(sourceIndex, 1);
	if (!movedEffect) {
		return;
	}

	if (!normalizedTargetId) {
		nextEffects.push(movedEffect);
	} else {
		const targetIndex = nextEffects.findIndex((effect) => effect.instanceId === normalizedTargetId);
		if (targetIndex < 0) {
			nextEffects.push(movedEffect);
		} else {
			const insertIndex = targetIndex + (insertAfter ? 1 : 0);
			nextEffects.splice(insertIndex, 0, movedEffect);
		}
	}

	const hasOrderChanged = nextEffects.some((effect, index) => effect.instanceId !== currentEntry.effects[index]?.instanceId);
	if (!hasOrderChanged) {
		return;
	}

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects, currentEntry.speedValue, currentEntry.caValue);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function removeMesaEffectFromCharacter(effectInstanceId) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const normalizedId = String(effectInstanceId ?? '').trim();
	if (!normalizedId) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const nextEffects = currentEntry.effects.filter((effect) => effect.instanceId !== normalizedId);
	if (nextEffects.length === currentEntry.effects.length) {
		return;
	}

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
	writeMesaState(mesaState);
	delete mesaEffectAdjustmentInputs[normalizedId];
	renderMesaStatus();
}

function updateMesaEffectInstanceField(effectInstanceId, field, value) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const normalizedId = String(effectInstanceId ?? '').trim();
	if (!normalizedId) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const currentEffect = currentEntry.effects.find((effect) => effect.instanceId === normalizedId);
	if (currentEffect?.properties === 'description' && (!currentEffect.valueEnabled || field !== 'value')) {
		return;
	}
	const nextEffects = currentEntry.effects.map((effect) => {
		if (effect.instanceId !== normalizedId) {
			return effect;
		}

		if (field === 'power') {
			const nextPower = normalizeNonNegativeIntOrDefault(value, effect.power ?? DEFAULT_MESA_EFFECT_POWER);
			if (normalizeEffectBehavior(effect.behavior) === 'modifier') {
				return { ...effect, power: Math.min(Math.max(nextPower, 1), 10) };
			}

			return { ...effect, power: nextPower };
		}

		if (field === 'count') {
			return { ...effect, count: normalizeNonNegativeIntOrDefault(value, effect.count ?? DEFAULT_MESA_EFFECT_COUNT) };
		}

		if (field === 'preserveCount') {
			return { ...effect, preserveCount: Boolean(value) };
		}

		if (field === 'triggerEnabled') {
			return { ...effect, triggerEnabled: Boolean(value) };
		}

		if (field === 'value') {
			return { ...effect, value: normalizeMesaEffectDescriptionValue(value) };
		}

		return effect;
	});

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
	writeMesaState(mesaState);
}

function incrementMesaEffectInstanceField(effectInstanceId, field, amount) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const normalizedId = String(effectInstanceId ?? '').trim();
	if (!normalizedId) {
		return;
	}

	const increment = normalizeNonNegativeIntOrDefault(amount, 1);
	if (increment <= 0) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const nextEffects = currentEntry.effects.map((effect) => {
		if (effect.instanceId !== normalizedId) {
			return effect;
		}

		if (field === 'power') {
			const nextPower = normalizeNonNegativeIntOrDefault(effect.power, DEFAULT_MESA_EFFECT_POWER) + increment;
			if (normalizeEffectBehavior(effect.behavior) === 'modifier') {
				return { ...effect, power: Math.min(Math.max(nextPower, 1), 10) };
			}

			return { ...effect, power: nextPower };
		}

		if (field === 'count') {
			return { ...effect, count: normalizeNonNegativeIntOrDefault(effect.count, DEFAULT_MESA_EFFECT_COUNT) + increment };
		}

		return effect;
	});

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function decrementMesaEffectInstanceField(effectInstanceId, field, amount) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const normalizedId = String(effectInstanceId ?? '').trim();
	if (!normalizedId) {
		return;
	}

	const decrement = normalizeNonNegativeIntOrDefault(amount, 1);
	if (decrement <= 0) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const nextEffects = currentEntry.effects.map((effect) => {
		if (effect.instanceId !== normalizedId) {
			return effect;
		}

		if (field === 'power') {
			return { ...effect, power: Math.max(normalizeNonNegativeIntOrDefault(effect.power, DEFAULT_MESA_EFFECT_POWER) - decrement, 1) };
		}

		if (field === 'count') {
			return { ...effect, count: Math.max(normalizeNonNegativeIntOrDefault(effect.count, DEFAULT_MESA_EFFECT_COUNT) - decrement, 1) };
		}

		return effect;
	});

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function setMesaEffectInstanceActive(effectInstanceId, isActive) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const normalizedId = String(effectInstanceId ?? '').trim();
	if (!normalizedId) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const nextEffects = currentEntry.effects.map((effect) => {
		if (effect.instanceId !== normalizedId) {
			return effect;
		}

		return {
			...effect,
			active: Boolean(isActive)
		};
	});

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function getMesaModifierEffectsForAction(mesaState, action) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return [];
	}

	const effects = getMesaStateEntry(selectedCharacter, mesaState).effects;
	return effects.filter((effect) => {
		if (effect.activation !== 'modifier' || !effect.active) {
			return false;
		}

		return doesModifierDefinitionMatchAction(effect.modifierDefinition, action);
	});
}

function getBehaviorModifierPower(effect) {
	const power = normalizeNonNegativeIntOrDefault(effect?.power, DEFAULT_MESA_EFFECT_POWER);
	return Math.min(Math.max(power, 1), 10);
}

function getActiveBehaviorModifiers(effects) {
	if (!Array.isArray(effects)) {
		return [];
	}

	return effects.filter((effect) => {
		if (normalizeEffectBehavior(effect?.behavior) !== 'modifier' || !effect?.active) {
			return false;
		}

		if (normalizeEffectProperties(effect?.properties) !== 'power-and-count') {
			return true;
		}

		return normalizeNonNegativeIntOrDefault(effect?.count, 0) > 0;
	});
}

function applyBehaviorDamageModifiers(baseDamage, target, effects) {
	const normalizedBaseDamage = Math.max(parseNonNegativeInt(baseDamage), 0);
	if (normalizedBaseDamage <= 0) {
		return 0;
	}

	let adjustedDamage = normalizedBaseDamage;
	getActiveBehaviorModifiers(effects).forEach((effect) => {
		const affectsTarget = effect.target === target
			|| effect.target === 'life-and-stagger'
			|| (target === 'stagger' && effect.target === 'life');
		if (!affectsTarget) {
			return;
		}

		// Skip flat reductions handled separately (behavior 'reducao')
		if (normalizeEffectHow(effect.how) === 'reducao') {
			return;
		}

		const factor = getBehaviorModifierPower(effect) / 10;
		if (normalizeEffectHow(effect.how) === 'increase') {
			adjustedDamage *= (1 + factor);
			return;
		}

		adjustedDamage *= Math.max(1 - factor, 0);
	});

	return Math.max(Math.round(adjustedDamage), 0);
}

function getMesaModifierPowerBonus(mesaState, action) {
	return getMesaModifierEffectsForAction(mesaState, action).reduce(
		(sum, effect) => sum + normalizeNonNegativeIntOrDefault(effect.power, DEFAULT_MESA_EFFECT_POWER),
		0
	);
}

function resolveMesaModifierAction(effects, action, excludedInstanceId = '', activationCount = 1) {
	let bonus = 0;
	let flatReduction = 0;
	let triggeredEffectsCount = 0;
	const nextEffects = [];
	const normalizedActivationCount = Math.max(parseNonNegativeInt(activationCount), 1);

	effects.forEach((effect) => {
		const isModifierEffect = effect.activation === 'modifier' && effect.active;
		if (!isModifierEffect) {
			nextEffects.push(effect);
			return;
		}

		if (excludedInstanceId && effect.instanceId === excludedInstanceId) {
			nextEffects.push(effect);
			return;
		}

		const matchesAction = doesModifierDefinitionMatchAction(effect.modifierDefinition, action);
		if (!matchesAction) {
			nextEffects.push(effect);
			return;
		}

		const power = normalizeNonNegativeIntOrDefault(effect.power, DEFAULT_MESA_EFFECT_POWER);
		const usesCount = effect.properties !== 'power';
		const isFlatReduction = normalizeEffectHow(effect.how) === 'reducao';

		if (usesCount) {
			const count = normalizeNonNegativeIntOrDefault(effect.count, DEFAULT_MESA_EFFECT_COUNT);
			const activationUses = Math.min(count, normalizedActivationCount);
			if (activationUses <= 0) {
				return;
			}

			const nextCount = count - activationUses;
			if (isFlatReduction) {
				flatReduction += power * activationUses;
			} else {
				bonus += power * activationUses;
			}
			triggeredEffectsCount += 1;
			if (nextCount > 0) {
				nextEffects.push({
					...effect,
					power,
					count: nextCount
				});
			}
			return;
		}

		if (isFlatReduction) {
			flatReduction += power * normalizedActivationCount;
		} else {
			bonus += power * normalizedActivationCount;
		}
		triggeredEffectsCount += 1;
		nextEffects.push({
			...effect,
			power
		});
	});

	if (action !== 'effect-activation' && triggeredEffectsCount > 0) {
		const chainActivationResult = resolveMesaModifierAction(nextEffects, 'effect-activation', excludedInstanceId, triggeredEffectsCount);
		return {
			bonus: bonus + (chainActivationResult.bonus || 0),
			flatReduction: flatReduction + (chainActivationResult.flatReduction || 0),
			nextEffects: chainActivationResult.nextEffects
		};
	}

	return { bonus, flatReduction, nextEffects };
}

function addMesaEffectToCharacter() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const effectId = normalizeMesaEffectId(mesaEffectSelect?.value);
	const template = getEffectTemplate(effectId);
	if (!template) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const hasExistingEffect = currentEntry.effects.some((effect) => effect.id === template.id);
	if (hasExistingEffect) {
		return;
	}
	const effectInstance = createMesaEffectInstance(template.id);
	if (!effectInstance) {
		return;
	}
	const nextEffects = [...currentEntry.effects, effectInstance];

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
	if (mesaEffectSelect) {
		mesaEffectSelect.value = '';
	}
}

function activateMesaDamageTriggeredEffects() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return false;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const triggeredEffects = currentEntry.effects.filter((effect) => {
		if (normalizeEffectBehavior(effect.behavior) !== 'standard') {
			return false;
		}

		if (normalizeEffectProperties(effect.properties) !== 'power' && normalizeEffectProperties(effect.properties) !== 'power-and-count') {
			return false;
		}

		if (getMesaEffectTriggerValue(effect) !== 'on-hit') {
			return false;
		}

		if (!Boolean(effect.triggerEnabled ?? true)) {
			return false;
		}

		if (normalizeEffectProperties(effect.properties) === 'power-and-count' && normalizeNonNegativeIntOrDefault(effect.count, 0) <= 0) {
			return false;
		}

		return true;
	});

	if (!triggeredEffects.length) {
		return false;
	}

	triggeredEffects.forEach((effect) => {
		applyMesaEffect(effect.instanceId, 'damage');
	});

	return true;
}

function activateMesaEffectActivationTriggeredEffects(sourceEffectInstanceId = '') {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return false;
	}

	const normalizedSourceEffectInstanceId = String(sourceEffectInstanceId ?? '').trim();
	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const triggeredEffects = currentEntry.effects.filter((effect) => {
		if (normalizeEffectBehavior(effect.behavior) !== 'standard') {
			return false;
		}

		if (normalizeEffectProperties(effect.properties) !== 'power' && normalizeEffectProperties(effect.properties) !== 'power-and-count') {
			return false;
		}

		if (getMesaEffectTriggerValue(effect) !== 'effect-activation') {
			return false;
		}

		if (!Boolean(effect.triggerEnabled ?? true)) {
			return false;
		}

		if (normalizedSourceEffectInstanceId && effect.instanceId === normalizedSourceEffectInstanceId) {
			return false;
		}

		if (normalizeEffectProperties(effect.properties) === 'power-and-count' && normalizeNonNegativeIntOrDefault(effect.count, 0) <= 0) {
			return false;
		}

		return true;
	});

	if (!triggeredEffects.length) {
		return false;
	}

	triggeredEffects.forEach((effect) => {
		applyMesaEffect(effect.instanceId, 'effect-activation', false);
	});

	return true;
}

function applyMesaEffect(effectInstanceId, source = 'manual', propagateEffectActivationTriggers = true) {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const effectIndex = currentEntry.effects.findIndex((effect) => effect.instanceId === effectInstanceId);

	if (effectIndex < 0) {
		return;
	}

	const effect = currentEntry.effects[effectIndex];
	const triggerValue = getMesaEffectTriggerValue(effect);
	const isTriggerConfigured = Boolean(triggerValue);
	if (isTriggerConfigured && !Boolean(effect.triggerEnabled ?? true)) {
		return;
	}
	if (source === 'damage' && triggerValue !== 'on-hit') {
		return;
	}
	if (source === 'manual' && triggerValue === 'on-hit') {
		return;
	}
	const power = normalizeNonNegativeIntOrDefault(effect.power, DEFAULT_MESA_EFFECT_POWER);
	const count = normalizeNonNegativeIntOrDefault(effect.count, DEFAULT_MESA_EFFECT_COUNT);
	const preserveCount = Boolean(effect.preserveCount);
	const effectHow = normalizeEffectHow(effect.how);
	const isIncrease = effectHow === 'increase';
	const isPowerOnlyEffect = effect.properties === 'power';
	const isModifierEffect = effect.activation === 'modifier';
	const isCountModifierEffect = isModifierEffect && !isPowerOnlyEffect;
	if (!isPowerOnlyEffect && count <= 0) {
		return;
	}

	const normalizedTarget = normalizeEffectTarget(effect.target);
	const affectsLife = normalizedTarget === 'life' || normalizedTarget === 'life-and-stagger';
	const affectsStagger = normalizedTarget === 'stagger' || normalizedTarget === 'life-and-stagger';
	const affectsSpeed = normalizedTarget === 'speed';
	const affectsCa = normalizedTarget === 'ca';
	const affectsMovement = normalizedTarget === 'movement';
	const speedRangeForEffect = getSpeedRangeBounds(selectedCharacter.speed);
	const speedFallbackValue = speedRangeForEffect
		? speedRangeForEffect.max
		: parseNonNegativeInt(selectedCharacter.speed);
	const movementFallbackValue = parseNonNegativeInt(selectedCharacter.deslocamento);
	const caFallbackValue = parseNonNegativeInt(selectedCharacter.ca);
	const currentSpeedValue = parseEditableStatValue(currentEntry.speedValue, speedFallbackValue);
	const currentMovementValue = parseEditableStatValue(currentEntry.movementValue, movementFallbackValue);
	const currentCaValue = parseEditableStatValue(currentEntry.caValue, caFallbackValue);
	const maxLife = getCharacterMaxLife(selectedCharacter);
	const maxStagger = getCharacterMaxStagger(selectedCharacter);
	const nextLife = affectsLife
		? (isIncrease ? Math.min(currentEntry.life + power, maxLife) : Math.max(currentEntry.life - power, 0))
		: currentEntry.life;
	const nextStagger = affectsStagger
		? (isIncrease ? Math.min(currentEntry.stagger + power, maxStagger) : Math.max(currentEntry.stagger - power, 0))
		: currentEntry.stagger;
	const speedMinimumValue = speedRangeForEffect ? speedRangeForEffect.min : 1;
	const nextSpeedValue = affectsSpeed
		? String(isIncrease ? currentSpeedValue + power : Math.max(currentSpeedValue - power, speedMinimumValue))
		: currentEntry.speedValue;
	const nextMovementValue = affectsMovement
		? String(isIncrease ? currentMovementValue + power : Math.max(currentMovementValue - power, 0))
		: currentEntry.movementValue;
	const nextCaValue = affectsCa
		? String(isIncrease ? currentCaValue + power : Math.max(currentCaValue - power, 0))
		: currentEntry.caValue;

	const nextEffects = [...currentEntry.effects];
	if (isPowerOnlyEffect) {
		nextEffects[effectIndex] = {
			...effect,
			power
		};
	} else if (isCountModifierEffect) {
		if (preserveCount) {
			nextEffects[effectIndex] = {
				...effect,
				power
			};
		} else {
			const nextCount = count - 1;
			if (nextCount <= 0) {
				nextEffects.splice(effectIndex, 1);
			} else {
				nextEffects[effectIndex] = {
					...effect,
					count: nextCount,
					power
				};
			}
		}
	} else {
		if (preserveCount) {
			nextEffects[effectIndex] = {
				...effect,
				power
			};
		} else {
			const nextCount = count - 1;
			if (nextCount <= 0) {
				nextEffects.splice(effectIndex, 1);
			} else {
				nextEffects[effectIndex] = {
					...effect,
					count: nextCount,
					power
				};
			}
		}
	}

	const modifierEffectActivationResolution = resolveMesaModifierAction(nextEffects, 'effect-activation', effect.instanceId);
	const chainBonus = normalizeNonNegativeIntOrDefault(modifierEffectActivationResolution.bonus, 0);
	const chainFlatReduction = normalizeNonNegativeIntOrDefault(modifierEffectActivationResolution.flatReduction, 0);

	// Also consider attack modifiers (modifiers defined for attacks) when an effect causes damage
	const attackModifierResolution = resolveMesaModifierAction(currentEntry.effects, 'attack');
	const attackBonus = normalizeNonNegativeIntOrDefault(attackModifierResolution.bonus, 0);
	const attackFlatReduction = normalizeNonNegativeIntOrDefault(attackModifierResolution.flatReduction, 0);

	const totalFlatReduction = Math.max(0, attackFlatReduction + chainFlatReduction);
	const totalBonus = Math.max(0, attackBonus + chainBonus);

	let nextLifeWithEffectActivation = nextLife;
	if (affectsLife && !isIncrease) {
		// For damage effects, apply flat reduction (from attack modifiers and activation chain) before subtracting
		const damageToApply = Math.max(power - totalFlatReduction, 0);
		nextLifeWithEffectActivation = Math.max(currentEntry.life - damageToApply - totalBonus, 0);
	} else if (affectsLife) {
		// healing or increase
		nextLifeWithEffectActivation = Math.max(nextLife - totalBonus, 0);
	} else {
		nextLifeWithEffectActivation = nextLife;
	}

	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		nextLifeWithEffectActivation,
		nextStagger,
		modifierEffectActivationResolution.nextEffects,
		nextSpeedValue,
		nextCaValue,
		nextMovementValue
	);
	writeMesaState(mesaState);
	renderMesaStatus();

	if (propagateEffectActivationTriggers && source !== 'effect-activation') {
		activateMesaEffectActivationTriggeredEffects(effect.instanceId);
	}
}

function applyMesaDamage({ staggerOnly = false, lifeOnly = false } = {}) {
	if (!mesaDamageInput) {
		return;
	}

	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const damage = parseNonNegativeInt(mesaDamageInput.value);
	if (damage <= 0) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const currentShield = currentEntry.shield;
	const currentBonusShield = currentEntry.bonusShield;
	const blockStaggerDamage = currentShield > 0 || currentBonusShield > 0;
	if (lifeOnly) {
		const bonusShieldConsumed = Math.min(currentBonusShield, damage);
		const remainingAfterBonusShield = Math.max(damage - bonusShieldConsumed, 0);
		const shieldConsumed = Math.min(currentShield, remainingAfterBonusShield);
		const damageToLife = Math.max(remainingAfterBonusShield - shieldConsumed, 0);
		const nextBonusShield = Math.max(currentBonusShield - bonusShieldConsumed, 0);
		const nextShield = Math.max(currentShield - shieldConsumed, 0);
		const nextLife = Math.max(currentEntry.life - damageToLife, 0);
		setMesaStateEntry(selectedCharacter, mesaState, nextLife, currentEntry.stagger, currentEntry.effects, undefined, undefined, undefined, undefined, undefined, undefined, nextShield, undefined, undefined, nextBonusShield);
		writeMesaState(mesaState);
		renderMesaStatus();
		mesaDamageInput.value = '';
		mesaDamageInput.focus();
		return;
	}

	if (staggerOnly) {
		const nextStagger = blockStaggerDamage ? currentEntry.stagger : Math.max(currentEntry.stagger - damage, 0);
		setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, nextStagger, currentEntry.effects);
		writeMesaState(mesaState);
		renderMesaStatus();
		mesaDamageInput.value = '';
		mesaDamageInput.focus();
		return;
	}

	const damageType = getMesaDamageTypeSelection();
	const resistanceMultiplier = currentEntry.staggerDamageActive
		? STAGGER_DAMAGE_MULTIPLIER
		: getMesaDamageResistanceMultiplier(selectedCharacter, damageType);
	const modifierAttackResolution = resolveMesaModifierAction(currentEntry.effects, 'attack');
	const flatReduction = normalizeNonNegativeIntOrDefault(modifierAttackResolution.flatReduction, 0);

	// Apply flat reductions before resistances
	const damageAfterFlat = Math.max(damage - flatReduction, 0);
	const appliedDamage = Math.max(Math.round(damageAfterFlat * resistanceMultiplier), 0);
	const currentLife = currentEntry.life;
	const currentStagger = currentEntry.stagger;
	const adjustedStaggerDamage = blockStaggerDamage
		? 0
		: applyBehaviorDamageModifiers(appliedDamage, 'stagger', modifierAttackResolution.nextEffects);
	const adjustedLifeDamage = staggerOnly
		? 0
		: applyBehaviorDamageModifiers(appliedDamage, 'life', modifierAttackResolution.nextEffects);
	const nextLife = staggerOnly
		? currentLife
		: Math.max(currentLife - Math.max(adjustedLifeDamage - currentBonusShield - currentShield, 0), 0);
	const bonusShieldConsumed = Math.min(currentBonusShield, adjustedLifeDamage);
	const remainingAfterBonusShield = Math.max(adjustedLifeDamage - bonusShieldConsumed, 0);
	const shieldConsumed = Math.min(currentShield, remainingAfterBonusShield);
	const nextBonusShield = staggerOnly
		? currentBonusShield
		: Math.max(currentBonusShield - bonusShieldConsumed, 0);
	const nextShield = staggerOnly
		? currentShield
		: Math.max(currentShield - shieldConsumed, 0);
	const nextStagger = Math.max(currentStagger - adjustedStaggerDamage, 0);

	setMesaStateEntry(selectedCharacter, mesaState, nextLife, nextStagger, modifierAttackResolution.nextEffects, undefined, undefined, undefined, undefined, undefined, undefined, nextShield, undefined, undefined, nextBonusShield);
	writeMesaState(mesaState);
	if (!activateMesaDamageTriggeredEffects()) {
		renderMesaStatus();
	}
	mesaDamageInput.value = '';
	mesaDamageInput.focus();
}

function applyMesaHeal() {
	if (!mesaHealInput) {
		return;
	}

	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const heal = parseNonNegativeInt(mesaHealInput.value);
	if (heal <= 0) {
		return;
	}

	const shouldHealLife = mesaHealLifeToggle?.checked ?? true;
	const shouldHealStagger = mesaHealStaggerToggle?.checked ?? true;
	if (!shouldHealLife && !shouldHealStagger) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const modifierHealResolution = resolveMesaModifierAction(currentEntry.effects, 'heal');
	const currentLife = currentEntry.life;
	const currentStagger = currentEntry.stagger;
	const maxLife = getCharacterMaxLife(selectedCharacter);
	const maxStagger = getCharacterMaxStagger(selectedCharacter);
	const healBonus = normalizeNonNegativeIntOrDefault(modifierHealResolution.bonus, 0);
	const nextLife = shouldHealLife ? Math.min(currentLife + heal + healBonus, maxLife) : currentLife;
	const nextStagger = shouldHealStagger ? Math.min(currentStagger + heal + healBonus, maxStagger) : currentStagger;

	setMesaStateEntry(selectedCharacter, mesaState, nextLife, nextStagger, modifierHealResolution.nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
	mesaHealInput.focus();
}

function applyMesaShield() {
	if (!mesaHealInput) {
		return;
	}

	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const shieldAmount = parseNonNegativeInt(mesaHealInput.value);
	if (shieldAmount <= 0) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const modifierHealResolution = resolveMesaModifierAction(currentEntry.effects, 'heal');
	const shieldBonus = normalizeNonNegativeIntOrDefault(modifierHealResolution.bonus, 0);
	const nextShield = currentEntry.shield + shieldAmount + shieldBonus;

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, modifierHealResolution.nextEffects, undefined, undefined, undefined, undefined, undefined, undefined, nextShield, undefined, undefined, currentEntry.bonusShield);
	writeMesaState(mesaState);
	renderMesaStatus();
	mesaHealInput.focus();
}

function applyMesaBonusShield() {
	if (!mesaHealInput) {
		return;
	}

	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const bonusShieldAmount = parseNonNegativeInt(mesaHealInput.value);
	if (bonusShieldAmount <= 0) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const modifierHealResolution = resolveMesaModifierAction(currentEntry.effects, 'heal');
	const shieldBonus = normalizeNonNegativeIntOrDefault(modifierHealResolution.bonus, 0);
	const nextBonusShield = currentEntry.bonusShield + bonusShieldAmount + shieldBonus;

	setMesaStateEntry(selectedCharacter, mesaState, currentEntry.life, currentEntry.stagger, modifierHealResolution.nextEffects, undefined, undefined, undefined, undefined, undefined, undefined, currentEntry.shield, undefined, undefined, nextBonusShield);
	writeMesaState(mesaState);
	renderMesaStatus();
	mesaHealInput.focus();
}

function applyMesaShieldRemoval() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	if (currentEntry.shield <= 0) {
		return;
	}

	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		currentEntry.staggerDamageActive,
		currentEntry.comments,
		currentEntry.combatTab,
		0,
		undefined,
		undefined,
		currentEntry.bonusShield
	);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function applyMesaBonusShieldRemoval() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	if (currentEntry.bonusShield <= 0) {
		return;
	}

	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		currentEntry.staggerDamageActive,
		currentEntry.comments,
		currentEntry.combatTab,
		currentEntry.shield,
		undefined,
		undefined,
		0
	);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function applyMesaReset() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const mesaState = readMesaState();
	const maxLife = getCharacterMaxLife(selectedCharacter);
	const maxStagger = getCharacterMaxStagger(selectedCharacter);

	setMesaStateEntry(selectedCharacter, mesaState, maxLife, maxStagger, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 0, undefined, undefined, 0);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function renderMesaStatus() {
	if (!mesaStatus) {
		return;
	}

	if (!characters.length) {
		clearMesaStatus();
		return;
	}

	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		clearMesaStatus();
		return;
	}

	lastLoadedMesaCharacter = selectedCharacter.nome;
	mesaActiveCharacterName = selectedCharacter.nome;
	if (mesaCharacterSelect) {
		mesaCharacterSelect.value = selectedCharacter.nome;
	}

	// Show the content wrapper
	if (mesaContentWrapper) {
		mesaContentWrapper.hidden = false;
	}

	if (mesaRightContent) {
		mesaRightContent.hidden = false;
	}

	if (mesaVerticalSeparator) {
		mesaVerticalSeparator.hidden = false;
	}

	if (mesaDamageCard) {
		mesaDamageCard.hidden = false;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const maxLife = getCharacterMaxLife(selectedCharacter);
	const currentLife = currentEntry.life;
	const currentShield = currentEntry.shield;
	const currentBonusShield = currentEntry.bonusShield;
	const healthPercent = maxLife > 0 ? Math.round((currentLife / maxLife) * 100) : 0;
	const staggerMax = getCharacterMaxStagger(selectedCharacter);
	const currentStagger = currentEntry.stagger;
	const staggerPercent = staggerMax > 0 ? Math.round((currentStagger / staggerMax) * 100) : 0;
	const staggerCurrentText = staggerMax > 0 ? String(currentStagger) : '-';
	const staggerMaxText = staggerMax > 0 ? String(staggerMax) : '-';

	const speedValue = selectedCharacter.speed || '-';
	const speedRangeBounds = getSpeedRangeBounds(selectedCharacter.speed);
	const speedRangeText = speedRangeBounds ? `(${speedValue})` : '';
	const characterKey = getCharacterKey(selectedCharacter.nome);
	let initialStats = mesaInitialStatsByCharacter[characterKey];
	if (!initialStats) {
		initialStats = {
			speed: String(currentEntry.speedValue || '').trim() || (speedRangeBounds ? String(rollSpeedRange(speedRangeBounds) ?? '') : String(selectedCharacter.speed || '').trim()),
			ca: String(selectedCharacter.ca ?? '').trim(),
			movement: String(selectedCharacter.deslocamento ?? '').trim()
		};
		mesaInitialStatsByCharacter[characterKey] = initialStats;

		setMesaStateEntry(
			selectedCharacter,
			mesaState,
			currentEntry.life,
			currentEntry.stagger,
			currentEntry.effects,
			initialStats.speed,
			initialStats.ca,
				initialStats.movement,
				undefined,
				undefined,
				undefined,
			currentEntry.shield,
			undefined,
			undefined,
			currentEntry.bonusShield
		);
		writeMesaState(mesaState);
	}

	const speedInitialResult = currentEntry.speedValue || initialStats.speed;
	const caBaseValue = String(selectedCharacter.ca ?? '').trim();
	const caDisplayValue = caBaseValue || '-';
	const caInputValue = currentEntry.caValue || initialStats.ca;
	const movementInputValue = currentEntry.movementValue || initialStats.movement;
	const slashResistance = getResistanceDisplayData(selectedCharacter.resistencias?.slash);
	const pierceResistance = getResistanceDisplayData(selectedCharacter.resistencias?.pierce);
	const bluntResistance = getResistanceDisplayData(selectedCharacter.resistencias?.blunt);
	const currentCombatTab = normalizeMesaCombatTab(currentEntry.combatTab);

	if (mesaSelectContainer) {
		mesaSelectContainer.hidden = false;
	}

		mesaStatus.innerHTML = `
			<div class="mesa__status-card">
				<div class="mesa__status-header">
					<h2 id="mesa-character-name" class="mesa__status-title mesa__status-title--button" role="button" tabindex="0" aria-label="Resetar Vida, Stagger e escudos do Personagem">${selectedCharacter.nome}</h2>
					<div class="mesa__status-actions">
						<button id="mesa-return-button" class="mesa__status-close-btn" type="button" aria-label="Voltar para a seleção de personagem" title="Voltar para a seleção de personagem">X</button>
					</div>
				</div>
			<div class="mesa__status-body">
				<div class="mesa__status-preview">
					<button class="image-maximize-btn" type="button" data-open-preview="mesa-character-image" aria-label="Maximizar imagem">⛶</button>
					<img id="mesa-character-image" src="" alt="Imagem do personagem" class="mesa__character-image" hidden>
					<img id="mesa-character-stagger-overlay" src="res/staggered.png" alt="" class="mesa__character-stagger-overlay" aria-hidden="true" hidden>
					<span id="mesa-image-placeholder" class="mesa__placeholder">Nenhuma imagem selecionada</span>
				</div>
				<div class="mesa__status-metrics">
				<div class="mesa__status-metric">
					<p class="mesa__status-text"><span class="mesa__status-label"><img src="res/hp.png" alt="" class="mesa__status-icon" aria-hidden="true">Vida</span> <span class="mesa__status-value">${currentLife} / ${maxLife}${currentBonusShield > 0 ? ` <span class="mesa__status-shield mesa__status-shield--bonus"><img src="res/shield.svg" alt="" class="mesa__status-icon" aria-hidden="true">${currentBonusShield}<button id="mesa-bonus-shield-remove-button" class="mesa__status-shield-remove" type="button" aria-label="Remover escudo adicional" title="Remover escudo adicional">x</button></span>` : ''}${currentShield > 0 ? ` <span class="mesa__status-shield"><img src="res/shield.svg" alt="" class="mesa__status-icon" aria-hidden="true">${currentShield}<button id="mesa-shield-remove-button" class="mesa__status-shield-remove" type="button" aria-label="Remover shield" title="Remover shield">x</button></span>` : ''}</span></p>
					<div class="mesa__hp-bar" role="progressbar" aria-label="Vida" aria-valuemin="0" aria-valuemax="${maxLife}" aria-valuenow="${currentLife}">
						<div class="mesa__hp-bar-fill mesa__hp-bar-fill--life" style="width: ${healthPercent}%;"></div>
					</div>
				</div>
				<div class="mesa__status-metric">
					<p class="mesa__status-text"><span class="mesa__status-label"><img src="res/stagger.png" alt="" class="mesa__status-icon" aria-hidden="true">Stagger</span> <span class="mesa__status-value">${staggerCurrentText} / ${staggerMaxText}</span></p>
					<div class="mesa__hp-bar" role="progressbar" aria-label="Stagger" aria-valuemin="0" aria-valuemax="${staggerMax || 0}" aria-valuenow="${currentStagger}">
						<div class="mesa__hp-bar-fill mesa__hp-bar-fill--stagger" style="width: ${staggerPercent}%;"></div>
					</div>
				</div>
				<div class="mesa__status-metrics-row">
					<div class="mesa__status-metric mesa__status-metric--simple">
						<p class="mesa__status-text"><span id="mesa-speed-roll-trigger" class="mesa__status-label mesa__status-label--button" role="button" tabindex="0" aria-label="Rolar speed">Speed</span> <img id="mesa-speed-reset-icon" src="res/speed.png" alt="Resetar speed" class="mesa__status-icon mesa__status-icon--reset" role="button" tabindex="0" title="Resetar speed para o valor inicial"> <span id="mesa-speed-value" class="mesa__status-value">${speedRangeText}</span> <input id="mesa-speed-result" class="mesa__speed-input" type="text" value="${speedInitialResult}" aria-label="Resultado da rolagem de speed"></p>
					</div>
					<div class="mesa__status-metric mesa__status-metric--simple">
						<p class="mesa__status-text"><span class="mesa__status-label">CA</span> <img id="mesa-ca-reset-icon" src="res/ca.png" alt="Resetar CA" class="mesa__status-icon mesa__status-icon--reset" role="button" tabindex="0" title="Resetar CA para o valor inicial"> <span class="mesa__status-value">${caDisplayValue}</span> <input id="mesa-ca-value" class="mesa__speed-input" type="text" value="${caInputValue}" aria-label="Campo de CA"></p>
					</div>
					<div class="mesa__status-metric mesa__status-metric--simple">
						<p class="mesa__status-text"><span class="mesa__status-label">Deslocamento</span> <img id="mesa-movement-reset-icon" src="res/movement.png" alt="Resetar deslocamento" class="mesa__status-icon mesa__status-icon--reset" role="button" tabindex="0" title="Resetar deslocamento para o valor inicial"> <input id="mesa-movement-value" class="mesa__speed-input" type="text" value="${movementInputValue}" aria-label="Campo de Deslocamento"></p>
					</div>
				</div>
				<div class="mesa__status-divider" role="separator" aria-hidden="true"></div>
				<div class="mesa__status-resistances">
					<div class="mesa__resistances-row">
						<div class="mesa__resistance-item mesa__resistance-item--${slashResistance.tone}">
							<span class="mesa__resistance-type">Slash</span>
							<span class="mesa__resistance-main"><img src="res/slash.png" alt="" class="mesa__status-icon" aria-hidden="true"><strong class="mesa__resistance-label">${slashResistance.label}</strong> <span class="mesa__resistance-multiplier">(${slashResistance.multiplier})</span></span>
						</div>
						<div class="mesa__resistance-item mesa__resistance-item--${pierceResistance.tone}">
							<span class="mesa__resistance-type">Pierce</span>
							<span class="mesa__resistance-main"><img src="res/pierce.png" alt="" class="mesa__status-icon" aria-hidden="true"><strong class="mesa__resistance-label">${pierceResistance.label}</strong> <span class="mesa__resistance-multiplier">(${pierceResistance.multiplier})</span></span>
						</div>
						<div class="mesa__resistance-item mesa__resistance-item--${bluntResistance.tone}">
							<span class="mesa__resistance-type">Blunt</span>
							<span class="mesa__resistance-main"><img src="res/blunt.png" alt="" class="mesa__status-icon" aria-hidden="true"><strong class="mesa__resistance-label">${bluntResistance.label}</strong> <span class="mesa__resistance-multiplier">(${bluntResistance.multiplier})</span></span>
						</div>
					</div>
				</div>
				<!--
				<div class="mesa__combat-tabs" role="tablist" aria-label="Painel de combate">
					<button id="mesa-combat-effects-tab" class="mesa__combat-tab${currentCombatTab === 'effects' ? ' mesa__combat-tab--active' : ''}" type="button" role="tab" aria-selected="${currentCombatTab === 'effects'}" aria-controls="mesa-combat-effects-panel" data-mesa-combat-tab="effects">Efeitos</button>
					<button id="mesa-combat-descriptions-tab" class="mesa__combat-tab${currentCombatTab === 'descriptions' ? ' mesa__combat-tab--active' : ''}" type="button" role="tab" aria-selected="${currentCombatTab === 'descriptions'}" aria-controls="mesa-combat-descriptions-panel" data-mesa-combat-tab="descriptions">Descrições</button>
				</div>
				<div id="mesa-combat-effects-panel" class="mesa__combat-panel" role="tabpanel" aria-labelledby="mesa-combat-effects-tab"${currentCombatTab === 'effects' ? '' : ' hidden'}>
					<div class="mesa__field mesa__damage-section">
						<div class="mesa__effect-control-row">
							<div class="mesa__effect-picker">
								<select id="mesa-effect-select" aria-label="Selecionar efeito">
								<option value="" disabled selected hidden>Selecione um efeito</option>
								</select>
							</div>
							<div class="mesa__effect-separator" aria-hidden="true"></div>
							<button id="mesa-effect-add-button" class="mesa__effect-add" type="button" aria-label="Adicionar efeito" title="Adicionar efeito">
								+
							</button>
						</div>
					</div>
					<div id="mesa-effects-list" class="mesa__effect-list" aria-label="Efeitos aplicados"></div>
				</div>
				<div id="mesa-combat-descriptions-panel" class="mesa__combat-panel" role="tabpanel" aria-labelledby="mesa-combat-descriptions-tab"${currentCombatTab === 'descriptions' ? '' : ' hidden'}>
					<div class="mesa__field mesa__damage-section mesa__damage-section--descriptions">
						<label class="mesa__combat-description-label" for="mesa-comments">Descrições</label>
						<textarea id="mesa-comments" rows="4" placeholder="Ex.: O personagem vai focar em fazer..."></textarea>
					</div>
				</div>
				</div>
				-->
		</div>
	`;

	mesaCharacterImage = document.getElementById('mesa-character-image');
	mesaImagePlaceholder = document.getElementById('mesa-image-placeholder');
	mesaCharacterStaggerOverlay = document.getElementById('mesa-character-stagger-overlay');

	const returnButton = document.getElementById('mesa-return-button');
	if (returnButton) {
		returnButton.addEventListener('click', () => {
			closeMesaCharacterInstance(mesaActiveCharacterName || lastLoadedMesaCharacter);
		});
	}

	const speedRollTrigger = document.getElementById('mesa-speed-roll-trigger');
	const speedResultInput = document.getElementById('mesa-speed-result');
	const caValueInput = document.getElementById('mesa-ca-value');
	const movementValueInput = document.getElementById('mesa-movement-value');
	const speedResetIcon = document.getElementById('mesa-speed-reset-icon');
	const caResetIcon = document.getElementById('mesa-ca-reset-icon');
	const movementResetIcon = document.getElementById('mesa-movement-reset-icon');
	const shieldRemoveButton = document.getElementById('mesa-shield-remove-button');
	const bonusShieldRemoveButton = document.getElementById('mesa-bonus-shield-remove-button');
	const mesaCharacterName = document.getElementById('mesa-character-name');

	const persistEditableMesaStatusFields = () => {
		const nextMesaState = readMesaState();
		const nextEntry = getMesaStateEntry(selectedCharacter, nextMesaState);
		const nextSinsValues = Object.fromEntries(
			MESA_SIN_FIELDS.map(({ key }) => [
				key,
				mesaSinInputs[key] instanceof HTMLInputElement ? mesaSinInputs[key].value : nextEntry.sins[key]
			])
		);
		setMesaStateEntry(
			selectedCharacter,
			nextMesaState,
			nextEntry.life,
			nextEntry.stagger,
			nextEntry.effects,
			speedResultInput instanceof HTMLInputElement ? speedResultInput.value : nextEntry.speedValue,
			caValueInput instanceof HTMLInputElement ? caValueInput.value : nextEntry.caValue,
			movementValueInput instanceof HTMLInputElement ? movementValueInput.value : nextEntry.movementValue,
			nextEntry.staggerDamageActive,
			nextEntry.comments,
			nextEntry.combatTab,
			undefined,
			nextSinsValues
		);
		writeMesaState(nextMesaState);
	};

	if (speedRollTrigger instanceof HTMLElement && speedResultInput instanceof HTMLInputElement) {
		const rollSpeedFromTrigger = () => {
			const rolledValue = rollSpeedRange(speedRangeBounds);
			if (rolledValue === null) {
				return;
			}

			speedResultInput.value = String(rolledValue);
			initialStats.speed = speedResultInput.value;
			mesaInitialStatsByCharacter[characterKey] = initialStats;
			persistEditableMesaStatusFields();
		};

		speedRollTrigger.addEventListener('click', rollSpeedFromTrigger);
		speedRollTrigger.addEventListener('keydown', event => {
			if (event.key === 'Enter' || event.key === ' ') {
				event.preventDefault();
				rollSpeedFromTrigger();
			}
		});
	}

	if (speedResultInput instanceof HTMLInputElement) {
		speedResultInput.addEventListener('input', () => {
			persistEditableMesaStatusFields();
		});
	}

	if (caValueInput instanceof HTMLInputElement) {
		caValueInput.addEventListener('input', () => {
			persistEditableMesaStatusFields();
		});
	}

	if (movementValueInput instanceof HTMLInputElement) {
		movementValueInput.addEventListener('input', () => {
			persistEditableMesaStatusFields();
		});
	}

	const handleResetIconKeydown = (event, callback) => {
		if (!(event instanceof KeyboardEvent)) {
			return;
		}

		if (event.key !== 'Enter' && event.key !== ' ') {
			return;
		}

		event.preventDefault();
		callback();
	};

	if (speedResetIcon instanceof HTMLElement && speedResultInput instanceof HTMLInputElement) {
		const resetSpeedToInitial = () => {
			speedResultInput.value = initialStats.speed;
			persistEditableMesaStatusFields();
		};

		speedResetIcon.addEventListener('click', resetSpeedToInitial);
		speedResetIcon.addEventListener('keydown', (event) => {
			handleResetIconKeydown(event, resetSpeedToInitial);
		});
	}

	if (caResetIcon instanceof HTMLElement && caValueInput instanceof HTMLInputElement) {
		const resetCaToInitial = () => {
			caValueInput.value = initialStats.ca;
			persistEditableMesaStatusFields();
		};

		caResetIcon.addEventListener('click', resetCaToInitial);
		caResetIcon.addEventListener('keydown', (event) => {
			handleResetIconKeydown(event, resetCaToInitial);
		});
	}

	if (movementResetIcon instanceof HTMLElement && movementValueInput instanceof HTMLInputElement) {
		const resetMovementToInitial = () => {
			movementValueInput.value = initialStats.movement;
			persistEditableMesaStatusFields();
		};

		movementResetIcon.addEventListener('click', resetMovementToInitial);
		movementResetIcon.addEventListener('keydown', (event) => {
			handleResetIconKeydown(event, resetMovementToInitial);
		});
	}

	if (shieldRemoveButton instanceof HTMLElement) {
		shieldRemoveButton.addEventListener('click', () => {
			applyMesaShieldRemoval();
		});
	}

	if (bonusShieldRemoveButton instanceof HTMLElement) {
		bonusShieldRemoveButton.addEventListener('click', () => {
			applyMesaBonusShieldRemoval();
		});
	}

	if (mesaCharacterName instanceof HTMLElement) {
		const confirmAndResetCharacter = async () => {
			const confirmedReset = await showCaptionWindow({
				title: 'Confirmar Reset',
				message: 'Resetar Vida e Stagger do Personagem?',
				confirmText: 'Sim',
				cancelText: 'Não',
				showCancel: true
			});

			if (!confirmedReset) {
				return;
			}

			applyMesaReset();
		};

		mesaCharacterName.addEventListener('click', () => {
			void confirmAndResetCharacter();
		});
		mesaCharacterName.addEventListener('keydown', (event) => {
			if (event.key !== 'Enter' && event.key !== ' ') {
				return;
			}

			event.preventDefault();
			void confirmAndResetCharacter();
		});
	}

	// Render character image
	const imageSource = resolveCharacterImageSource(selectedCharacter);
	if (mesaCharacterImage && mesaImagePlaceholder) {
		if (imageSource) {
			mesaCharacterImage.src = imageSource;
			mesaCharacterImage.alt = selectedCharacter.nome;
			mesaCharacterImage.title = 'Clique para ativar ou desativar o stagger no dano';
			mesaCharacterImage.setAttribute('role', 'button');
			mesaCharacterImage.setAttribute('tabindex', '0');
			mesaCharacterImage.setAttribute('aria-pressed', String(Boolean(currentEntry.staggerDamageActive)));
			mesaCharacterImage.hidden = false;
			mesaImagePlaceholder.hidden = true;
		} else {
			mesaCharacterImage.hidden = true;
			mesaImagePlaceholder.hidden = false;
		}
	}

	if (mesaCharacterImage) {
		const toggleMesaDamageStagger = () => {
			setMesaDamageStaggerState(selectedCharacter, !currentEntry.staggerDamageActive);
		};

		mesaCharacterImage.addEventListener('click', toggleMesaDamageStagger);
		mesaCharacterImage.addEventListener('keydown', (event) => {
			if (event.key !== 'Enter' && event.key !== ' ') {
				return;
			}

			event.preventDefault();
			toggleMesaDamageStagger();
		});
	}

	updateMesaDamagePreviewOverlay();
	if (mesaCommentsInput instanceof HTMLTextAreaElement) {
		mesaCommentsInput.value = currentEntry.comments || '';
	}
	if (mesaMpInput instanceof HTMLInputElement) {
		mesaMpInput.value = currentEntry.mpValue || '';
	}
	for (const sinField of MESA_SIN_FIELDS) {
		const sinInput = mesaSinInputs[sinField.key];
		if (sinInput instanceof HTMLInputElement) {
			sinInput.value = String(currentEntry.sins[sinField.key] ?? 0);
		}
	}
	updateMesaCombatTabUI(currentEntry.combatTab);

	// Render additional character information
	if (mesaInfo) {
		mesaInfo.innerHTML = '';
	}

	renderMesaEffects(selectedCharacter, mesaState);
	renderMesaInstanceBar();

}

function renderMesaPanel() {
	if (!mesaCharacterSelect) {
		return;
	}

	renderMesaEffectOptions();

	// Get all current options except the placeholder
	const currentOptions = Array.from(mesaCharacterSelect.options).filter((opt) => opt.value !== '');
	currentOptions.forEach((opt) => opt.remove());

	// Add character options
	characters.forEach((character) => {
		const option = document.createElement('option');
		option.value = character.nome;
		option.textContent = character.nome;
		mesaCharacterSelect.appendChild(option);
	});

	if (!characters.length) {
		mesaCharacterSelect.disabled = true;
		mesaOpenCharacterNames = [];
		mesaActiveCharacterName = '';
		lastLoadedMesaCharacter = '';
		lastSelectedMesaCharacter = '';
		clearMesaStatus();
		renderMesaInstanceBar();
		return;
	}

	mesaCharacterSelect.disabled = false;
	syncMesaInstancesWithCharacters(characters);

	const hasActiveCharacter = mesaActiveCharacterName && characters.some((char) => char.nome === mesaActiveCharacterName);
	const hasSelectedCharacter = lastSelectedMesaCharacter && characters.some((char) => char.nome === lastSelectedMesaCharacter);

	if (hasActiveCharacter) {
		mesaCharacterSelect.value = mesaActiveCharacterName;
		renderMesaStatus();
		return;
	}

	if (hasSelectedCharacter) {
		mesaCharacterSelect.value = lastSelectedMesaCharacter;
	} else {
		mesaCharacterSelect.value = '';
	}

	clearMesaStatus();
	renderMesaInstanceBar();
}

function clearMesaStatus() {
	if (mesaSelectContainer) {
		mesaSelectContainer.hidden = false;
	}
	if (mesaContentWrapper) {
		mesaContentWrapper.hidden = true;
	}
	if (mesaRightContent) {
		mesaRightContent.hidden = true;
	}
	if (mesaVerticalSeparator) {
		mesaVerticalSeparator.hidden = true;
	}
	if (mesaDamageCard) {
		mesaDamageCard.hidden = true;
	}
	if (mesaStatus) {
		mesaStatus.innerHTML = '';
	}
	if (mesaInfo) {
		mesaInfo.innerHTML = '';
	}
	if (mesaCharacterImage) {
		mesaCharacterImage.hidden = true;
	}
	if (mesaCharacterStaggerOverlay) {
		mesaCharacterStaggerOverlay.hidden = true;
	}
	if (mesaImagePlaceholder) {
		mesaImagePlaceholder.hidden = false;
	}
	if (mesaDamageInput) {
		mesaDamageInput.value = '';
	}
	if (mesaHealInput) {
		mesaHealInput.value = '';
	}
	if (mesaEffectsList) {
		mesaEffectsList.innerHTML = '';
	}
	if (mesaEffectSelect) {
		mesaEffectSelect.value = '';
	}
	if (mesaStatus) {
		mesaStatus.innerHTML = '';
	}
	if (mesaInfo) {
		mesaInfo.innerHTML = '';
	}
	renderMesaInstanceBar();
}

function getNoCharactersMessageMarkup() {
	return `<p class="viewer__empty viewer__empty--highlight">${NO_CHARACTERS_MESSAGE}</p>`;
}

async function getEmbeddedImageData() {
	if (selectedImageFile) {
		return readFileAsDataURL(selectedImageFile);
	}

	return '';
}

function renderCharacterList() {
	characterList.innerHTML = '';

	if (!characters.length) {
		viewerContainer.classList.add('viewer--empty');
		characterDetails.classList.add('viewer__details--empty');
		characterDetails.innerHTML = getNoCharactersMessageMarkup();
		return;
	}

	viewerContainer.classList.remove('viewer--empty');
	characterDetails.classList.remove('viewer__details--empty');

	characters.forEach((character, index) => {
		const button = document.createElement('button');
		button.type = 'button';
		button.className = `viewer__item${index === activeCharacterIndex ? ' viewer__item--active' : ''}`;
		button.textContent = character.nome;
		button.addEventListener('click', () => {
			activeCharacterIndex = index;
			renderCharacterList();
			renderCharacterDetails();
		});
		characterList.appendChild(button);
	});
}

function renderCharacterDetails() {
	const character = characters[activeCharacterIndex];

	if (!character) {
		characterDetails.classList.toggle('viewer__details--empty', !characters.length);
		characterDetails.innerHTML = characters.length
			? '<p class="viewer__empty">Selecione um personagem para ver os detalhes.</p>'
			: getNoCharactersMessageMarkup();
		return;
	}

	characterDetails.classList.remove('viewer__details--empty');

	const imageSource = resolveCharacterImageSource(character);
	const imageMarkup = imageSource
		? `<img id="viewer-character-image" src="${imageSource}" alt="${character.nome}" onerror="this.style.display='none';this.nextElementSibling.hidden=false;"><span class="creator__placeholder" hidden>Nenhuma imagem selecionada</span>`
		: '<span class="creator__placeholder">Nenhuma imagem selecionada</span>';
	const movementValue = String(character.deslocamento ?? '').trim() || '???';
	const characterKeywords = getCharacterKeywords(character);
	const characterNotes = String(character.observacoes ?? '').trim();
	const keywordsMarkup = characterKeywords.length
		? `<div class="viewer__keyword-list">${characterKeywords.map((keyword) => `<span class="creator__keyword-chip">${keyword}</span>`).join('')}</div>`
		: '<strong>Nenhuma Palavra Chave Foi Escolhida</strong>';
 	const notesMarkup = characterNotes
		? `<p class="viewer__notes-text">${characterNotes.replace(/\n/g, '<br>')}</p>`
		: '<strong>Nenhuma Observação Foi Adicionada</strong>';

	characterDetails.innerHTML = `
		<div class="viewer__profile">
			<div class="viewer__actions">
				<button id="edit-character" class="viewer__edit" type="button" aria-label="Editar personagem">
					<span class="viewer__edit-icon" aria-hidden="true">✏</span>
					<span>Editar Personagem</span>
				</button>
				<button id="delete-character" class="viewer__delete" type="button" aria-label="Excluir personagem">
					<span class="viewer__delete-icon" aria-hidden="true">🗑</span>
					<span>Excluir Personagem</span>
				</button>
			</div>
			<div class="viewer__profile-header">
				<div class="viewer__avatar">
					<button class="image-maximize-btn" type="button" data-open-preview="viewer-character-image" aria-label="Maximizar imagem">⛶</button>
					${imageMarkup}
				</div>
				<div>
					<h2 class="panel__title">${character.nome}</h2>
				</div>
			</div>
			<div class="viewer__stats-grid">
				<div class="viewer__stat"><span>Vida</span><div class="viewer__metric-value"><img src="res/hp.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${character.vida || '-'}</strong></div></div>
				<div class="viewer__stat"><span>Stagger</span><div class="viewer__metric-value"><img src="res/stagger.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${character.stagger || '-'}</strong></div></div>
				<div class="viewer__stat"><span>CA</span><div class="viewer__metric-value"><img src="res/ca.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${character.ca || '-'}</strong></div></div>
				<div class="viewer__stat"><span>Speed</span><div class="viewer__metric-value"><img src="res/speed.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${character.speed || '-'}</strong></div></div>
				<div class="viewer__stat"><span>Deslocamento</span><div class="viewer__metric-value viewer__metric-value--movement"><img src="res/movement.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${movementValue}</strong><em class="viewer__unit">feet</em></div></div>
			</div>
			<div class="viewer__resistances viewer__stats-grid">
				<div class="viewer__stat"><span>Slash</span><div class="viewer__metric-value"><img src="res/slash.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${getResistanceDisplayLabel(character.resistencias?.slash)}</strong></div></div>
				<div class="viewer__stat"><span>Pierce</span><div class="viewer__metric-value"><img src="res/pierce.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${getResistanceDisplayLabel(character.resistencias?.pierce)}</strong></div></div>
				<div class="viewer__stat"><span>Blunt</span><div class="viewer__metric-value"><img src="res/blunt.png" alt="" class="viewer__metric-icon" aria-hidden="true"><strong>${getResistanceDisplayLabel(character.resistencias?.blunt)}</strong></div></div>
			</div>
			<div class="viewer__stats-grid viewer__stats-grid--single">
				<div class="viewer__stat"><span>Palavras Chave</span>${keywordsMarkup}</div>
			</div>
			<div class="viewer__stats-grid viewer__stats-grid--single">
				<div class="viewer__stat"><span>Observações</span>${notesMarkup}</div>
			</div>
		</div>
	`;
}

async function deleteActiveCharacter() {
	const character = characters[activeCharacterIndex];
	if (!character) {
		return;
	}

	const confirmed = await showCaptionWindow({
		title: 'Confirmar Exclusao',
		message: `Deseja excluir ${character.nome}?`,
		confirmText: 'Excluir'
	});
	if (!confirmed) {
		return;
	}

	const nextCharacters = readStoredCharacters().filter((item) => item.nome.toLowerCase() !== character.nome.toLowerCase());
	writeStoredCharacters(nextCharacters);
	characters = [...nextCharacters];
	updateMesaAvailability();

	if (!characters.length) {
		activeCharacterIndex = -1;
	} else if (activeCharacterIndex >= characters.length) {
		activeCharacterIndex = characters.length - 1;
	}

	syncMesaStateWithCharacters(characters);
	renderCharacterList();
	renderCharacterDetails();
	renderMesaPanel();
	renderEditCharacterPanel();
}

async function saveCharacter() {
	const data = getCharacterData();

	if (!data.nome) {
		await showCaptionInfo('Atencao', 'Digite o nome do personagem.');
		return;
	}

	const normalizedSpeed = normalizeSpeedRange(data.speed);
	if (!normalizedSpeed) {
		await showCaptionInfo('Atencao', 'Speed deve estar no formato minimo~maximo. Ex.: 2~8.');
		return;
	}

	data.speed = normalizedSpeed;
	speedInput.value = normalizedSpeed;

	const confirmedSave = await showCaptionWindow({
		title: 'Confirmar Cadastro',
		message: `Deseja cadastrar ${data.nome}?`,
		confirmText: 'Cadastrar'
	});

	if (!confirmedSave) {
		return;
	}

	data.imagem = await getEmbeddedImageData();

	const nextCharacters = readStoredCharacters();
	const existingIndex = nextCharacters.findIndex((character) => character.nome.toLowerCase() === data.nome.toLowerCase());

	if (existingIndex >= 0) {
		nextCharacters[existingIndex] = data;
	} else {
		nextCharacters.unshift(data);
	}

	writeStoredCharacters(nextCharacters);
	characters = [...nextCharacters];
	activeCharacterIndex = 0;
	syncMesaStateWithCharacters(characters);
	updateMesaAvailability();
	renderCharacterList();
	renderCharacterDetails();
	renderMesaPanel();
	renderEditCharacterPanel();
	resetCharacterForm();
	await showCaptionInfo('Sucesso', 'Personagem cadastrado com sucesso.');
}

function initializeCharacterViewer() {
	keywordRegistry = readStoredKeywords();
	effectsRegistry = readStoredEffects();
	const storedCharacters = readStoredCharacters();
	characters = [...storedCharacters];
	activeCharacterIndex = characters.length > 0 ? 0 : -1;
	const storedMesaInstances = readMesaInstancesState();
	mesaOpenCharacterNames = storedMesaInstances.openCharacterNames;
	mesaActiveCharacterName = storedMesaInstances.activeCharacterName;
	setEffectsFormOpen(false);
	renderKeywordRegistry();
	renderEffectsRegistry();
	renderMesaEffectOptions();
	syncMesaStateWithCharacters(characters);
	syncMesaInstancesWithCharacters(characters);
	syncMesaEffectsWithRegistry();
	updateMesaAvailability();
	renderCharacterList();
	renderCharacterDetails();
	renderMesaPanel();
	renderEditCharacterPanel();
}

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		console.log('Tab clicked:', tab.dataset.target);
		try {
			setActivePanel(tab.dataset.target);
		} catch (e) {
			console.error('Error activating panel', e);
		}
	});
});

navbarHome?.addEventListener('click', () => {
	setActivePanel('inicio');
});

navbarDropdowns.forEach((dropdown) => {
	dropdown.addEventListener('click', (event) => {
		if (event.target instanceof HTMLElement && event.target.closest('.navbar__submenu')) {
			return;
		}

		navbarDropdowns.forEach((otherDropdown) => {
			if (otherDropdown !== dropdown) {
				otherDropdown.classList.remove('navbar__dropdown--open');
			}
		});
		dropdown.classList.toggle('navbar__dropdown--open');
	});
});

clearLocalStorageHomeButton?.addEventListener('click', async () => {
	const confirmed = await showCaptionWindow({
		title: 'Atenção',
		message: 'Isso vai apagar todo o localStorage desta página. Continuar?',
		confirmText: 'Apagar',
		cancelText: 'Cancelar',
		showCancel: true
	});

	if (!confirmed) {
		return;
	}

	localStorage.clear();
	window.location.reload();
});

exportDataHomeButton?.addEventListener('click', async () => {
	await exportAppData();
});

importDataHomeButton?.addEventListener('click', () => {
	importDataInput?.click();
});

importDataInput?.addEventListener('change', async () => {
	const selectedFile = importDataInput.files?.[0];
	importDataInput.value = '';
	await importAppDataFromFile(selectedFile);
});

chooseImageButton.addEventListener('click', () => {
	imageInput.click();
});

keywordAddButton?.addEventListener('click', () => {
	void addKeyword();
});

effectsAddButton?.addEventListener('click', () => {
	void addEffect();
});

effectsOpenFormButton?.addEventListener('click', () => {
	resetEffectsForm();
	setEffectsFormOpen(true);
});

effectsCancelButton?.addEventListener('click', () => {
	setEffectsFormOpen(false);
});

effectsChooseImageButton?.addEventListener('click', () => {
	effectsImageInput?.click();
});

effectsImageInput?.addEventListener('change', () => {
	selectedEffectImageFile = effectsImageInput.files && effectsImageInput.files[0] ? effectsImageInput.files[0] : null;
	updateEffectsImageButtonLabel();
	updateEffectsImagePreview();
});

effectsBehaviorInputs.forEach((input) => {
	input.addEventListener('change', () => {
		updateEffectsBehaviorState();
	});
});

effectsPropertiesModeInputs.forEach((input) => {
	input.addEventListener('change', () => {
		updateEffectsBehaviorState();
		updateEffectsHowVisibility();
	});
});

effectsActivationSelect?.addEventListener('change', () => {
	updateEffectsModifierDefinitionVisibility();
});

effectsTargetSelect?.addEventListener('change', () => {
	updateEffectsHowVisibility();
});

effectsTriggerAddButton?.addEventListener('click', () => {
	const val = normalizeEffectTrigger(effectsTriggerSelect?.value);
	if (!val) {
		return;
	}

	const label = getEffectTriggerLabel(val) || val;
	addTriggerTag(val, label);
});

effectsTargetAddButton?.addEventListener('click', () => {
	const val = effectsTargetSelect?.value;
	if (!val) return;
	const label = effectsTargetSelect?.selectedOptions?.[0]?.textContent || val;
	addTargetTag(val, label);
});

effectsRemoveImageButton?.addEventListener('click', () => {
	removeSelectedEffectImage();
});

mesaEffectsList?.addEventListener('input', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLInputElement)) {
		return;
	}

	const adjustmentInstanceId = target.dataset.mesaEffectInstance ?? '';
	const unifiedAdjustmentField = target.dataset.mesaEffectAdjustmentField ?? '';
	if (adjustmentInstanceId && (unifiedAdjustmentField === 'power' || unifiedAdjustmentField === 'count')) {
		if (!mesaEffectAdjustmentInputs[adjustmentInstanceId]) {
			mesaEffectAdjustmentInputs[adjustmentInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
		}

		const normalizedValue = normalizeNonNegativeIntOrDefault(target.value, 1);
		mesaEffectAdjustmentInputs[adjustmentInstanceId][unifiedAdjustmentField] = normalizedValue;
		const decreaseMemoryKey = unifiedAdjustmentField === 'power' ? 'decreasePower' : 'decreaseCount';
		mesaEffectAdjustmentInputs[adjustmentInstanceId][decreaseMemoryKey] = normalizedValue;
		return;
	}

	const adjustmentField = target.dataset.mesaEffectIncreaseField ?? '';
	if (adjustmentInstanceId && (adjustmentField === 'power' || adjustmentField === 'count')) {
		if (!mesaEffectAdjustmentInputs[adjustmentInstanceId]) {
			mesaEffectAdjustmentInputs[adjustmentInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
		}

		mesaEffectAdjustmentInputs[adjustmentInstanceId][adjustmentField] = normalizeNonNegativeIntOrDefault(target.value, 1);
		return;
	}

	const decreaseAdjustmentField = target.dataset.mesaEffectDecreaseField ?? '';
	if (adjustmentInstanceId && (decreaseAdjustmentField === 'power' || decreaseAdjustmentField === 'count')) {
		if (!mesaEffectAdjustmentInputs[adjustmentInstanceId]) {
			mesaEffectAdjustmentInputs[adjustmentInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
		}

		const memoryKey = decreaseAdjustmentField === 'power' ? 'decreasePower' : 'decreaseCount';
		mesaEffectAdjustmentInputs[adjustmentInstanceId][memoryKey] = normalizeNonNegativeIntOrDefault(target.value, 1);
		return;
	}

	const valueEffectId = target.dataset.mesaEffectValue ?? '';
	if (valueEffectId) {
		updateMesaEffectInstanceField(valueEffectId, 'value', target.value);
		return;
	}

	const activeEffectId = target.dataset.mesaEffectActive ?? '';
	if (activeEffectId) {
		setMesaEffectInstanceActive(activeEffectId, target.checked);
		return;
	}

	const preserveCountEffectId = target.dataset.mesaEffectPreserveCount ?? '';
	if (preserveCountEffectId) {
		updateMesaEffectInstanceField(preserveCountEffectId, 'preserveCount', target.checked);
		return;
	}

	const triggerEnabledEffectId = target.dataset.mesaEffectTriggerEnabled ?? '';
	if (triggerEnabledEffectId) {
		updateMesaEffectInstanceField(triggerEnabledEffectId, 'triggerEnabled', target.checked);
		return;
	}

	const effectInstanceId = target.dataset.mesaEffectInstance ?? '';
	const field = target.dataset.mesaEffectField ?? '';
	if (!effectInstanceId || (field !== 'power' && field !== 'count')) {
		return;
	}

	updateMesaEffectInstanceField(effectInstanceId, field, target.value);

	const effectCard = target.closest('.mesa__effect-card');
	if (!(effectCard instanceof HTMLElement)) {
		return;
	}

	const countInput = effectCard.querySelector('[data-mesa-effect-field="count"]');
	const applyButton = effectCard.querySelector('[data-mesa-effect-apply]');
	if (countInput instanceof HTMLInputElement && applyButton instanceof HTMLButtonElement) {
		applyButton.disabled = normalizeNonNegativeIntOrDefault(countInput.value, 0) <= 0;
	}
});

mesaEffectsList?.addEventListener('focusout', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLInputElement)) {
		return;
	}

	const valueEffectId = target.dataset.mesaEffectValue ?? '';
	if (!valueEffectId) {
		return;
	}

	if (commitMesaCalculatedInputValue(target) === null) {
		return;
	}

	updateMesaEffectInstanceField(valueEffectId, 'value', target.value);
});

mesaEffectsList?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const increaseButton = target.closest('[data-mesa-effect-increase]');
	if (increaseButton instanceof HTMLElement) {
		const effectInstanceId = increaseButton.dataset.mesaEffectIncrease ?? '';
		const field = increaseButton.dataset.mesaEffectIncreaseField ?? '';
		const effectCard = increaseButton.closest('.mesa__effect-card');
		if (!(effectCard instanceof HTMLElement)) {
			return;
		}

		const amountInput = effectCard.querySelector(`[data-mesa-effect-increase-field="${field}"]`);
		const unifiedAmountInput = effectCard.querySelector(`[data-mesa-effect-adjustment-field="${field}"]`);
		const amount = unifiedAmountInput instanceof HTMLInputElement
			? unifiedAmountInput.value
			: amountInput instanceof HTMLInputElement
				? amountInput.value
				: '1';
		if (effectInstanceId && (field === 'power' || field === 'count')) {
			if (!mesaEffectAdjustmentInputs[effectInstanceId]) {
				mesaEffectAdjustmentInputs[effectInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
			}

			const normalizedAmount = normalizeNonNegativeIntOrDefault(amount, 1);
			mesaEffectAdjustmentInputs[effectInstanceId][field] = normalizedAmount;
			const decreaseMemoryKey = field === 'power' ? 'decreasePower' : 'decreaseCount';
			mesaEffectAdjustmentInputs[effectInstanceId][decreaseMemoryKey] = normalizedAmount;
		}
		incrementMesaEffectInstanceField(effectInstanceId, field, amount);
		return;
	}

	const decreaseButton = target.closest('[data-mesa-effect-decrease]');
	if (decreaseButton instanceof HTMLElement) {
		const effectInstanceId = decreaseButton.dataset.mesaEffectDecrease ?? '';
		const field = decreaseButton.dataset.mesaEffectDecreaseField ?? '';
		const effectCard = decreaseButton.closest('.mesa__effect-card');
		if (!(effectCard instanceof HTMLElement)) {
			return;
		}

		const unifiedAmountInput = effectCard.querySelector(`[data-mesa-effect-adjustment-field="${field}"]`);
		const amountInput = effectCard.querySelector(`[data-mesa-effect-decrease-field="${field}"]`);
		const amount = unifiedAmountInput instanceof HTMLInputElement
			? unifiedAmountInput.value
			: amountInput instanceof HTMLInputElement
				? amountInput.value
				: '1';
		if (effectInstanceId && (field === 'power' || field === 'count')) {
			if (!mesaEffectAdjustmentInputs[effectInstanceId]) {
				mesaEffectAdjustmentInputs[effectInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
			}

			const memoryKey = field === 'power' ? 'decreasePower' : 'decreaseCount';
			const normalizedAmount = normalizeNonNegativeIntOrDefault(amount, 1);
			mesaEffectAdjustmentInputs[effectInstanceId][memoryKey] = normalizedAmount;
			mesaEffectAdjustmentInputs[effectInstanceId][field] = normalizedAmount;
		}
		decrementMesaEffectInstanceField(effectInstanceId, field, amount);
		return;
	}

	const removeButton = target.closest('[data-mesa-effect-remove]');
	if (!(removeButton instanceof HTMLElement)) {
		return;
	}

	removeMesaEffectFromCharacter(removeButton.dataset.mesaEffectRemove ?? '');
});

mesaEffectsList?.addEventListener('dragstart', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const dragHandle = target.closest('.mesa__effect-drag-handle');
	if (!dragHandle || target.closest('.mesa__effect-remove')) {
		return;
	}

	const effectCard = target.closest('.mesa__effect-card');
	if (!(effectCard instanceof HTMLElement)) {
		return;
	}

	draggedMesaEffectInstanceId = effectCard.dataset.mesaEffectInstance ?? '';
	if (!draggedMesaEffectInstanceId) {
		event.preventDefault();
		return;
	}

	effectCard.classList.add('mesa__effect-card--dragging');
	if (event.dataTransfer) {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/plain', draggedMesaEffectInstanceId);
	}
});

mesaEffectsList?.addEventListener('dragover', (event) => {
	if (!draggedMesaEffectInstanceId) {
		return;
	}

	event.preventDefault();
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const effectCard = target.closest('.mesa__effect-card');
	clearMesaEffectDropIndicators();
	if (!(effectCard instanceof HTMLElement)) {
		dragOverMesaEffectInstanceId = '';
		dragOverMesaEffectInsertAfter = false;
		return;
	}

	const targetInstanceId = effectCard.dataset.mesaEffectInstance ?? '';
	if (!targetInstanceId || targetInstanceId === draggedMesaEffectInstanceId) {
		dragOverMesaEffectInstanceId = '';
		dragOverMesaEffectInsertAfter = false;
		return;
	}

	const bounds = effectCard.getBoundingClientRect();
	const insertAfter = event.clientY > bounds.top + bounds.height / 2;
	effectCard.classList.add(insertAfter ? 'mesa__effect-card--drop-after' : 'mesa__effect-card--drop-before');
	dragOverMesaEffectInstanceId = targetInstanceId;
	dragOverMesaEffectInsertAfter = insertAfter;
});

mesaEffectsList?.addEventListener('drop', (event) => {
	if (!draggedMesaEffectInstanceId) {
		return;
	}

	event.preventDefault();
	const target = event.target;
	if (target instanceof HTMLElement) {
		const effectCard = target.closest('.mesa__effect-card');
		if (effectCard instanceof HTMLElement) {
			const targetInstanceId = effectCard.dataset.mesaEffectInstance ?? '';
			if (targetInstanceId && targetInstanceId !== draggedMesaEffectInstanceId) {
				const bounds = effectCard.getBoundingClientRect();
				const insertAfter = event.clientY > bounds.top + bounds.height / 2;
				reorderMesaEffects(draggedMesaEffectInstanceId, targetInstanceId, insertAfter);
				clearMesaEffectDragState();
				return;
			}
		}
	}

	reorderMesaEffects(draggedMesaEffectInstanceId);
	clearMesaEffectDragState();
});

mesaEffectsList?.addEventListener('dragend', () => {
	clearMesaEffectDragState();
});

mesaCombatEffectsTab?.addEventListener('click', () => {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return;
	}

	setMesaCombatTab(selectedCharacter, 'effects');
});

mesaCombatDescriptionsTab?.addEventListener('click', () => {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return;
	}

	setMesaCombatTab(selectedCharacter, 'descriptions');
});

mesaCombatSinsTab?.addEventListener('click', () => {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return;
	}

	setMesaCombatTab(selectedCharacter, 'sins');
});

for (const sinField of MESA_SIN_FIELDS) {
	const sinInput = mesaSinInputs[sinField.key];
	if (sinInput instanceof HTMLInputElement) {
		sinInput.addEventListener('input', () => {
			persistMesaSinFields();
		});
	}
}

mesaCommentsInput?.addEventListener('input', () => {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		currentEntry.staggerDamageActive,
		mesaCommentsInput.value,
		currentEntry.combatTab,
		undefined,
		currentEntry.sins,
		mesaMpInput instanceof HTMLInputElement ? mesaMpInput.value : currentEntry.mpValue
	);
	writeMesaState(mesaState);
});

mesaMpInput?.addEventListener('input', () => {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter) {
		return;
	}

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		currentEntry.life,
		currentEntry.stagger,
		currentEntry.effects,
		currentEntry.speedValue,
		currentEntry.caValue,
		currentEntry.movementValue,
		currentEntry.staggerDamageActive,
		currentEntry.comments,
		currentEntry.combatTab,
		undefined,
		currentEntry.sins,
		mesaMpInput.value
	);
	writeMesaState(mesaState);
});

mesaMpInput?.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter') {
		return;
	}

	event.preventDefault();
	if (commitMesaCalculatedInputValue(mesaMpInput, { dispatchInput: true }) === null) {
		return;
	}
});

for (const sinField of MESA_SIN_FIELDS) {
	const sinInput = mesaSinInputs[sinField.key];
	if (sinInput instanceof HTMLInputElement) {
		sinInput.addEventListener('keydown', (event) => {
			if (event.key !== 'Enter') {
				return;
			}

			event.preventDefault();
			if (commitMesaCalculatedInputValue(sinInput, { dispatchInput: true }) === null) {
				return;
			}
		});
	}
}

mesaEffectsList?.addEventListener('keydown', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLInputElement) || event.key !== 'Enter') {
		return;
	}

	const isMesaEffectNumericField = Boolean(
		target.dataset.mesaEffectField
		|| target.dataset.mesaEffectAdjustmentField
		|| target.dataset.mesaEffectIncreaseField
		|| target.dataset.mesaEffectDecreaseField
		|| target.dataset.mesaEffectValue
	);
	if (!isMesaEffectNumericField) {
		return;
	}

	event.preventDefault();
	if (target.dataset.mesaEffectValue) {
		if (commitMesaCalculatedInputValue(target) !== null) {
			updateMesaEffectInstanceField(target.dataset.mesaEffectValue, 'value', target.value);
		}
		return;
	}

	commitMesaCalculatedInputValue(target, { dispatchInput: true });
});

createKeywordAddButton?.addEventListener('click', () => {
	addKeywordToSelection('create');
});

editKeywordAddButton?.addEventListener('click', () => {
	addKeywordToSelection('edit');
});

imageInput.addEventListener('change', () => {
	selectedImageFile = imageInput.files && imageInput.files[0] ? imageInput.files[0] : null;
	updateImageButtonLabel();
	updateImagePreview();
});

speedInput?.addEventListener('blur', () => {
	const normalizedSpeed = normalizeSpeedRange(speedInput.value);
	if (normalizedSpeed) {
		speedInput.value = normalizedSpeed;
	}
});

clearNotesButton?.addEventListener('click', () => {
	if (notesInput) {
		notesInput.value = '';
	}
});

clearEditNotesButton?.addEventListener('click', () => {
	if (editNotesInput) {
		editNotesInput.value = '';
	}
});

removeImageButton?.addEventListener('click', () => {
	removeSelectedCreateImage();
});

clearCharacterFormButton?.addEventListener('click', () => {
	resetCharacterForm();
});

saveButton.addEventListener('click', saveCharacter);

mesaLoadCharacterButton?.addEventListener('click', () => {
	if (!mesaCharacterSelect || mesaCharacterSelect.value === '') {
		lastLoadedMesaCharacter = '';
		mesaActiveCharacterName = '';
		writeMesaInstancesState({
			openCharacterNames: mesaOpenCharacterNames,
			activeCharacterName: ''
		});
		renderMesaPanel();
		return;
	}

	setMesaActiveCharacter(mesaCharacterSelect.value);
	renderMesaPanel();
	renderMesaStatus();
});

mesaCharacterSelect?.addEventListener('change', () => {
	lastSelectedMesaCharacter = mesaCharacterSelect.value;
});

mesaInstanceBar?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const instanceButton = target.closest('.mesa__instance-chip');
	if (!(instanceButton instanceof HTMLElement)) {
		return;
	}

	const characterName = instanceButton.dataset.characterName ?? '';
	if (!characterName) {
		return;
	}

	setMesaActiveCharacter(characterName, false);
	renderMesaPanel();
	renderMesaStatus();
});

mesaAttackButton?.addEventListener('click', () => {
	applyMesaDamage();
});

mesaStaggerAttackButton?.addEventListener('click', () => {
	applyMesaDamage({ staggerOnly: true });
});

mesaLifeAttackButton?.addEventListener('click', () => {
	applyMesaDamage({ lifeOnly: true });
});

[mesaDamageSlashToggle, mesaDamagePierceToggle, mesaDamageBluntToggle].forEach((toggle, index) => {
	if (!toggle) {
		return;
	}

	const damageType = mesaDamageTypeControls[index]?.key || DEFAULT_MESA_DAMAGE_TYPE;
	toggle.addEventListener('change', () => {
		setMesaDamageTypeSelection(damageType);
	});
});

mesaHealButton?.addEventListener('click', () => {
	applyMesaHeal();
});

mesaShieldButton?.addEventListener('click', () => {
	applyMesaShield();
});

mesaBonusShieldButton?.addEventListener('click', () => {
	applyMesaBonusShield();
});

mesaEffectAddButton?.addEventListener('click', () => {
	addMesaEffectToCharacter();
});

mesaDamageInput?.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter') {
		return;
	}

	event.preventDefault();
	commitMesaCalculatedInputValue(mesaDamageInput);
	applyMesaDamage();
});

mesaHealInput?.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter') {
		return;
	}

	event.preventDefault();
	commitMesaCalculatedInputValue(mesaHealInput);
	applyMesaHeal();
});

window.addEventListener('beforeunload', () => {
	lastSelectedMesaCharacter = '';
});

characterDetails.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof Element)) {
		return;
	}

	if (target.closest('#edit-character')) {
		openEditFromViewer();
		return;
	}

	if (target.closest('#delete-character')) {
		void deleteActiveCharacter();
	}
});

createKeywordSelectedList?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	if (!target.classList.contains('creator__keyword-remove')) {
		return;
	}

	const index = Number.parseInt(target.dataset.index ?? '-1', 10);
	removeKeywordFromSelection('create', index);
});

editKeywordSelectedList?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	if (!target.classList.contains('creator__keyword-remove')) {
		return;
	}

	const index = Number.parseInt(target.dataset.index ?? '-1', 10);
	removeKeywordFromSelection('edit', index);
});

keywordRegistryList?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	if (!target.classList.contains('creator__keyword-remove')) {
		return;
	}

	void deleteKeyword(target.dataset.keyword ?? '');
});

effectsRegistryList?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const editButton = target.closest('.effects__item-edit');
	if (editButton instanceof HTMLElement) {
		beginEditEffect(editButton.dataset.effectId ?? '');
		return;
	}

	const removeButton = target.closest('.effects__item-remove');
	if (!(removeButton instanceof HTMLElement)) {
		return;
	}

	void deleteEffect(removeButton.dataset.effectId ?? '');
});

effectsRegistryList?.addEventListener('dragstart', (event) => {
	const dragHandle = event
		.composedPath()
		.find((node) => node instanceof HTMLElement && node.matches('.effects__item-image, .effects__item-name'));
	if (!(dragHandle instanceof HTMLElement)) {
		return;
	}

	const effectItem = dragHandle.closest('.effects__item');
	if (!(effectItem instanceof HTMLElement)) {
		return;
	}

	draggedEffectRegistryId = effectItem.dataset.effectId ?? '';
	if (!draggedEffectRegistryId) {
		event.preventDefault();
		return;
	}

	effectItem.classList.add('effects__item--dragging');
	if (event.dataTransfer) {
		event.dataTransfer.effectAllowed = 'move';
		event.dataTransfer.setData('text/plain', draggedEffectRegistryId);
	}
});

effectsRegistryList?.addEventListener('dragover', (event) => {
	if (!draggedEffectRegistryId) {
		return;
	}

	event.preventDefault();
	const target = event.target;
	if (!(target instanceof HTMLElement)) {
		return;
	}

	const effectItem = target.closest('.effects__item');
	clearEffectRegistryDropIndicators();
	if (!(effectItem instanceof HTMLElement)) {
		dragOverEffectRegistryId = '';
		dragOverEffectRegistryInsertAfter = false;
		return;
	}

	const targetEffectId = effectItem.dataset.effectId ?? '';
	if (!targetEffectId || targetEffectId === draggedEffectRegistryId) {
		dragOverEffectRegistryId = '';
		dragOverEffectRegistryInsertAfter = false;
		return;
	}

	const bounds = effectItem.getBoundingClientRect();
	const insertAfter = event.clientY > bounds.top + bounds.height / 2;
	effectItem.classList.add(insertAfter ? 'effects__item--drop-after' : 'effects__item--drop-before');
	dragOverEffectRegistryId = targetEffectId;
	dragOverEffectRegistryInsertAfter = insertAfter;
});

effectsRegistryList?.addEventListener('drop', (event) => {
	if (!draggedEffectRegistryId) {
		return;
	}

	event.preventDefault();
	const target = event.target;
	if (target instanceof HTMLElement) {
		const effectItem = target.closest('.effects__item');
		if (effectItem instanceof HTMLElement) {
			const targetEffectId = effectItem.dataset.effectId ?? '';
			if (targetEffectId && targetEffectId !== draggedEffectRegistryId) {
				reorderEffectsRegistry(draggedEffectRegistryId, targetEffectId, dragOverEffectRegistryInsertAfter);
			}
			clearEffectRegistryDragState();
			return;
		}
	}

	reorderEffectsRegistry(draggedEffectRegistryId);
	clearEffectRegistryDragState();
});

effectsRegistryList?.addEventListener('dragend', () => {
	clearEffectRegistryDragState();
});

captionConfirmButton?.addEventListener('click', () => {
	closeCaptionModal(true);
});

captionCancelButton?.addEventListener('click', () => {
	closeCaptionModal(false);
});

captionModal?.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof Element)) {
		return;
	}

	if (target.matches('[data-close-caption]')) {
		closeCaptionModal(false);
	}
});

window.addEventListener('keydown', (event) => {
	if (event.key === 'Escape' && !captionModal.hidden) {
		closeCaptionModal(false);
	}
});

document.addEventListener('click', (event) => {
	const target = event.target;
	if (!(target instanceof Element)) {
		return;
	}

	if (!target.closest('.navbar__dropdown')) {
		closeNavbarDropdowns();
	}

	const effectApplyButton = target.closest('[data-mesa-effect-apply]');
	if (effectApplyButton instanceof HTMLElement) {
		applyMesaEffect(effectApplyButton.dataset.mesaEffectApply ?? '', 'manual');
		return;
	}

	const openPreviewButton = target.closest('[data-open-preview]');
	if (!(openPreviewButton instanceof HTMLElement)) {
		return;
	}

	const imageId = openPreviewButton.dataset.openPreview;
	if (!imageId) {
		return;
	}

	const sourceImage = document.getElementById(imageId);
	if (!(sourceImage instanceof HTMLImageElement)) {
		return;
	}

	showImagePreviewModal(sourceImage);
});

imageHoverPreviewClose?.addEventListener('click', () => {
	hideImagePreviewModal();
});

imageHoverPreviewReset?.addEventListener('click', () => {
	resetImagePreviewTransform();
});

imageHoverPreviewImg?.addEventListener('wheel', (event) => {
	if (imageHoverPreview.hidden) {
		return;
	}

	event.preventDefault();
	const zoomDelta = event.deltaY < 0 ? 0.12 : -0.12;
	const nextScale = Math.min(5, Math.max(1, imagePreviewScale + zoomDelta));

	if (nextScale === 1) {
		imagePreviewOffsetX = 0;
		imagePreviewOffsetY = 0;
	}

	imagePreviewScale = nextScale;
	applyImagePreviewTransform();
}, { passive: false });

imageHoverPreviewImg?.addEventListener('pointerdown', (event) => {
	if (imageHoverPreview.hidden || imagePreviewScale <= 1) {
		return;
	}

	event.preventDefault();
	imagePreviewIsDragging = true;
	imagePreviewDragStartX = event.clientX - imagePreviewOffsetX;
	imagePreviewDragStartY = event.clientY - imagePreviewOffsetY;
	imageHoverPreviewImg.classList.add('image-hover-preview--dragging');
	imageHoverPreviewImg.setPointerCapture(event.pointerId);
});

imageHoverPreviewImg?.addEventListener('pointermove', (event) => {
	if (!imagePreviewIsDragging || imageHoverPreview.hidden) {
		return;
	}

	imagePreviewOffsetX = event.clientX - imagePreviewDragStartX;
	imagePreviewOffsetY = event.clientY - imagePreviewDragStartY;
	applyImagePreviewTransform();
});

imageHoverPreviewImg?.addEventListener('pointerup', (event) => {
	if (!imagePreviewIsDragging) {
		return;
	}

	imagePreviewIsDragging = false;
	imageHoverPreviewImg.classList.remove('image-hover-preview--dragging');
	if (imageHoverPreviewImg.hasPointerCapture(event.pointerId)) {
		imageHoverPreviewImg.releasePointerCapture(event.pointerId);
	}
});

imageHoverPreviewImg?.addEventListener('pointercancel', () => {
	imagePreviewIsDragging = false;
	imageHoverPreviewImg.classList.remove('image-hover-preview--dragging');
});

editChooseImageButton?.addEventListener('click', () => {
	editImageInput.click();
});

editImageInput?.addEventListener('change', () => {
	editSelectedImageFile = editImageInput.files && editImageInput.files[0] ? editImageInput.files[0] : null;
	updateEditImageButtonLabel();

	if (editSelectedImageFile) {
		clearEditPreviewObjectUrl();
		editPreviewObjectUrl = URL.createObjectURL(editSelectedImageFile);
		setEditPreviewSource(editPreviewObjectUrl);
		return;
	}

	if (editCharacterBaseImage) {
		setEditPreviewSource(resolveCharacterImageSource({ imagem: editCharacterBaseImage }));
	} else {
		setEditPreviewSource('');
	}
});

editRemoveImageButton?.addEventListener('click', () => {
	removeSelectedEditImage();
});

editCharacterSelect?.addEventListener('change', () => {
	const selectedCharacter = characters.find((character) => character.nome === editCharacterSelect.value);
	loadCharacterIntoEditForm(selectedCharacter);
});

editSaveButton?.addEventListener('click', saveEditedCharacter);

[slashInput, pierceInput, bluntInput].forEach((selectElement) => {
	if (selectElement) {
		selectElement.addEventListener('change', () => {
			const customInput = document.getElementById(`${selectElement.id}-custom`);
			if (!(customInput instanceof HTMLInputElement)) {
				return;
			}

			const isCustom = selectElement.value === CUSTOM_RESISTANCE_VALUE;
			customInput.hidden = !isCustom;
			if (!isCustom) {
				customInput.value = '';
			}
		});
	}
});

[editSlashInput, editPierceInput, editBluntInput].forEach((selectElement) => {
	if (selectElement) {
		selectElement.addEventListener('change', () => {
			const customInput = document.getElementById(`${selectElement.id}-custom`);
			if (!(customInput instanceof HTMLInputElement)) {
				return;
			}

			const isCustom = selectElement.value === CUSTOM_RESISTANCE_VALUE;
			customInput.hidden = !isCustom;
			if (!isCustom) {
				customInput.value = '';
			}
		});
	}
});

setResistanceControlState({ select: slashInput, custom: slashCustomInput }, DEFAULT_RESISTANCE_VALUE);
setResistanceControlState({ select: pierceInput, custom: pierceCustomInput }, DEFAULT_RESISTANCE_VALUE);
setResistanceControlState({ select: bluntInput, custom: bluntCustomInput }, DEFAULT_RESISTANCE_VALUE);
setResistanceControlState({ select: editSlashInput, custom: editSlashCustomInput }, DEFAULT_RESISTANCE_VALUE);
setResistanceControlState({ select: editPierceInput, custom: editPierceCustomInput }, DEFAULT_RESISTANCE_VALUE);
setResistanceControlState({ select: editBluntInput, custom: editBluntCustomInput }, DEFAULT_RESISTANCE_VALUE);
setMesaDamageTypeSelection(DEFAULT_MESA_DAMAGE_TYPE);
renderMesaEffectOptions();
setEffectsFormOpen(false);
if (mesaHealLifeToggle) {
	mesaHealLifeToggle.checked = false;
}
if (mesaHealStaggerToggle) {
	mesaHealStaggerToggle.checked = false;
}

window.addEventListener('hashchange', () => {
	const targetId = window.location.hash.slice(1);
	if (panels.some((panel) => panel.id === targetId)) {
		setActivePanel(targetId);
	}
});

updateImageButtonLabel();
updateImagePreview();
try {
	initializeCharacterViewer();
} catch (e) {
	console.error('Error during initializeCharacterViewer:', e);
}

const initialTargetId = panels.some((panel) => panel.id === window.location.hash.slice(1))
	? window.location.hash.slice(1)
	: 'inicio';

setActivePanel(initialTargetId);
