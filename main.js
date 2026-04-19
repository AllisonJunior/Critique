const tabs = Array.from(document.querySelectorAll('.navbar__tab'));
const panels = Array.from(document.querySelectorAll('.panel'));
const navbarHome = document.getElementById('navbar-home');
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
const effectsDescriptionInput = document.getElementById('effects-description');
const effectsTargetSelect = document.getElementById('effects-target');
const effectsHowField = document.getElementById('effects-how-field');
const effectsHowSelect = document.getElementById('effects-how');
const effectsPropertiesSelect = document.getElementById('effects-properties');
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
const mesaLoadCharacterButton = document.getElementById('mesa-load-character');
const mesaStatus = document.getElementById('mesa-status');
const mesaInfo = document.getElementById('mesa-info');
const mesaCharacterImage = document.getElementById('mesa-character-image');
const mesaImagePlaceholder = document.getElementById('mesa-image-placeholder');
const mesaContentWrapper = document.getElementById('mesa-content-wrapper');
const mesaRightContent = document.getElementById('mesa-right-content');
const mesaVerticalSeparator = document.getElementById('mesa-vertical-separator');
const mesaDamageCard = document.getElementById('mesa-damage-card');
const mesaDamageInput = document.getElementById('mesa-damage');
const mesaDamageSlashToggle = document.getElementById('mesa-damage-slash-toggle');
const mesaDamagePierceToggle = document.getElementById('mesa-damage-pierce-toggle');
const mesaDamageBluntToggle = document.getElementById('mesa-damage-blunt-toggle');
const mesaDamageStaggerToggle = document.getElementById('mesa-damage-stagger-toggle');
const mesaCharacterStaggerOverlay = document.getElementById('mesa-character-stagger-overlay');
const mesaAttackButton = document.getElementById('mesa-attack-button');
const mesaHealInput = document.getElementById('mesa-heal');
const mesaHealButton = document.getElementById('mesa-heal-button');
const mesaHealLifeToggle = document.getElementById('mesa-heal-life-toggle');
const mesaHealStaggerToggle = document.getElementById('mesa-heal-stagger-toggle');
const mesaEffectSelect = document.getElementById('mesa-effect-select');
const mesaEffectAddButton = document.getElementById('mesa-effect-add-button');
const mesaEffectsList = document.getElementById('mesa-effects-list');
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

const LOCAL_STORAGE_KEY = 'critique.characters';
const KEYWORDS_STORAGE_KEY = 'critique.keywords';
const EFFECTS_STORAGE_KEY = 'critique.effects';
const MESA_STATE_KEY = 'critique.mesaState';
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
const mesaInitialStatsByCharacter = {};
const mesaEffectAdjustmentInputs = {};
let draggedMesaEffectInstanceId = '';
let dragOverMesaEffectInstanceId = '';
let dragOverMesaEffectInsertAfter = false;
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
	{ key: 'blunt', input: mesaDamageBluntToggle },
	{ key: 'stagger', input: mesaDamageStaggerToggle }
];

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

	return 'power';
}

function normalizeEffectBehavior(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (normalizedValue === 'modifier' || normalizedValue === 'modificador' || normalizedValue === 'effect-activation') {
		return 'modifier';
	}

	return 'standard';
}

function normalizeEffectHow(value) {
	const normalizedValue = String(value ?? '').trim().toLowerCase();
	if (normalizedValue === 'increase' || normalizedValue === 'aumenta' || normalizedValue === 'up') {
		return 'increase';
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

function normalizeNonNegativeIntOrDefault(value, defaultValue) {
	const parsedValue = Number.parseInt(String(value), 10);
	if (!Number.isFinite(parsedValue) || parsedValue < 0) {
		return defaultValue;
	}

	return parsedValue;
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

	return {
		instanceId: `${template.id}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
		id: template.id,
		name: template.name,
		icon: template.icon,
		behavior,
		target: behavior === 'modifier' ? 'life' : template.target,
		how: normalizeEffectHow(template.how),
		properties: behavior === 'modifier' ? 'power-and-count' : normalizeEffectProperties(template.properties),
		activation: normalizeEffectActivation(template.activation),
		modifierDefinition: normalizeEffectModifierDefinition(template.modifierDefinition),
		active: false,
		power: DEFAULT_MESA_EFFECT_POWER,
		count: DEFAULT_MESA_EFFECT_COUNT
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
	const properties = behavior === 'modifier'
		? 'power-and-count'
		: normalizeEffectProperties(effect.properties ?? template.properties);
	const count = properties === 'power-and-count'
		? normalizeNonNegativeIntOrDefault(effect.count ?? effect.counts ?? effect.uses ?? DEFAULT_MESA_EFFECT_COUNT, DEFAULT_MESA_EFFECT_COUNT)
		: DEFAULT_MESA_EFFECT_COUNT;
	const normalizedTarget = normalizeEffectTarget(effect.target ?? template.target);

	return {
		instanceId: String(effect.instanceId ?? effect.instance ?? effect.key ?? `${template.id}-${index}-${power}`),
		id: template.id,
		name: template.name,
		icon: template.icon,
		behavior,
		target: behavior === 'modifier' ? 'life' : normalizedTarget,
		how: normalizeEffectHow(effect.how ?? effect.como ?? template.how),
		properties,
		activation: normalizeEffectActivation(effect.activation ?? template.activation),
		modifierDefinition: normalizeEffectModifierDefinition(effect.modifierDefinition ?? template.modifierDefinition),
		active: Boolean(effect.active ?? effect.ativo ?? false),
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

	if (!effectsRegistry.length) {
		const emptyOption = document.createElement('option');
		emptyOption.value = '';
		emptyOption.textContent = 'Nenhum Efeito Cadastrado';
		emptyOption.selected = true;
		mesaEffectSelect.appendChild(emptyOption);
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

	const hasCurrentSelection = effectsRegistry.some((effect) => effect.id === selectedValue);
	const randomIndex = Math.floor(Math.random() * effectsRegistry.length);
	const nextValue = hasCurrentSelection
		? selectedValue
		: effectsRegistry[randomIndex].id;
	mesaEffectSelect.value = nextValue;
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

	if (mesaTab) {
		mesaTab.disabled = !hasCharacters;
		mesaTab.setAttribute('aria-disabled', String(!hasCharacters));
		mesaTab.classList.toggle('navbar__tab--disabled', !hasCharacters);
	}

	if (hasCharacters) {
		return;
	}

	lastLoadedMesaCharacter = '';
	lastSelectedMesaCharacter = '';
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

function setActivePanel(targetId) {
	if (targetId === 'mesa' && !characters.length) {
		targetId = 'inicio';
	}

	tabs.forEach((tab) => {
		const isActive = tab.dataset.target === targetId;
		tab.classList.toggle('navbar__tab--active', isActive);
		tab.setAttribute('aria-selected', String(isActive));
	});

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
				const properties = behavior === 'modifier'
					? 'power-and-count'
					: normalizeEffectProperties(effect.properties ?? effect.type ?? effect.tipo);

				return {
					id,
					name,
					description: String(effect.description ?? effect.descricao ?? '').trim(),
					icon: String(effect.icon ?? effect.imagem ?? '').trim(),
					behavior,
					target: behavior === 'modifier' ? 'life' : normalizedTarget,
					how: normalizeEffectHow(effect.how ?? effect.como),
					properties,
					activation: normalizeEffectActivation(effect.activation ?? effect.ativacao),
					modifierDefinition: normalizeEffectModifierDefinition(effect.modifierDefinition ?? effect.modifier_definition ?? effect.definicaoModificador)
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
	if (effectsDescriptionInput) {
		effectsDescriptionInput.value = '';
	}
	if (effectsTargetSelect) {
		effectsTargetSelect.value = DEFAULT_EFFECT_TARGET;
	}
	if (effectsHowSelect) {
		effectsHowSelect.value = 'reduce';
	}
	if (effectsPropertiesSelect) {
		effectsPropertiesSelect.value = 'power-and-count';
	}
	if (effectsModifierHowSelect) {
		effectsModifierHowSelect.value = 'reduce';
	}
	setSelectedModifierProperties('power-and-count');
	if (effectsBehaviorInputs.length) {
		effectsBehaviorInputs.forEach((input) => {
			input.checked = input.value === 'standard';
		});
	}
	if (effectsActivationSelect) {
		effectsActivationSelect.value = 'manual';
	}
	if (effectsModifierDefinitionSelect) {
		effectsModifierDefinitionSelect.value = 'attack';
	}
	editingEffectId = '';
	editEffectBaseImage = '';
	if (effectsImageInput) {
		effectsImageInput.value = '';
	}
	if (effectsAddButton) {
		effectsAddButton.textContent = 'Salvar Efeito';
	}
	selectedEffectImageFile = null;
	updateEffectsImageButtonLabel();
	updateEffectsImagePreview();
	updateEffectsBehaviorState();
	updateEffectsModifierDefinitionVisibility();
	updateEffectsHowVisibility();
	updateEffectsModifierHowVisibility();
}

function getSelectedEffectBehavior() {
	const selectedInput = effectsBehaviorInputs.find((input) => input.checked);
	return normalizeEffectBehavior(selectedInput?.value);
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
	if (effectsModifierHowField) {
		effectsModifierHowField.hidden = !shouldDisableStandardFields;
	}
	if (effectsModifierPropertiesField) {
		effectsModifierPropertiesField.hidden = !shouldDisableStandardFields;
	}
	if (effectsStandardFields) {
		effectsStandardFields.hidden = shouldDisableStandardFields;
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
	if (!normalizedId || !effectsNameInput || !effectsTargetSelect) {
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
	if (effectsDescriptionInput) {
		effectsDescriptionInput.value = String(existingEffect.description ?? '');
	}
	effectsTargetSelect.value = normalizeEffectTarget(existingEffect.target);
	if (effectsHowSelect) {
		effectsHowSelect.value = normalizeEffectHow(existingEffect.how);
	}
	if (effectsModifierHowSelect) {
		effectsModifierHowSelect.value = normalizeEffectHow(existingEffect.how);
	}
	if (effectsPropertiesSelect) {
		effectsPropertiesSelect.value = normalizeEffectProperties(existingEffect.properties);
	}
	setSelectedModifierProperties(existingEffect.properties);
	if (effectsBehaviorInputs.length) {
		effectsBehaviorInputs.forEach((input) => {
			input.checked = input.value === normalizeEffectBehavior(existingEffect.behavior);
		});
	}
	if (effectsActivationSelect) {
		effectsActivationSelect.value = normalizeEffectActivation(existingEffect.activation);
	}
	if (effectsModifierDefinitionSelect) {
		effectsModifierDefinitionSelect.value = normalizeEffectModifierDefinition(existingEffect.modifierDefinition);
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
	updateEffectsModifierDefinitionVisibility();
	updateEffectsHowVisibility();
	updateEffectsModifierHowVisibility();
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

		const image = document.createElement('img');
		image.className = 'effects__item-image';
		image.src = effect.icon;
		image.alt = effect.name;

		const info = document.createElement('div');
		info.className = 'effects__item-info';

		const title = document.createElement('p');
		title.className = 'effects__item-name';
		title.textContent = effect.name;

		const description = document.createElement('p');
		description.className = 'effects__item-target';
		description.textContent = String(effect.description ?? '').trim() || 'Sem descrição.';

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
	if (!effectsNameInput || !effectsTargetSelect) {
		return;
	}

	const effectName = normalizeEffectName(effectsNameInput.value);
	const effectDescription = String(effectsDescriptionInput?.value ?? '').trim();
	if (!effectName) {
		await showCaptionInfo('Atencao', 'Digite o nome do efeito.');
		return;
	}

	if (!selectedEffectImageFile && !editEffectBaseImage) {
		await showCaptionInfo('Atencao', 'Escolha uma imagem para o efeito.');
		return;
	}

	const behavior = getSelectedEffectBehavior();
	const target = behavior === 'modifier'
		? 'life'
		: normalizeEffectTarget(effectsTargetSelect.value);
	const how = behavior === 'modifier'
		? getSelectedModifierHow()
		: normalizeEffectHow(effectsHowSelect?.value);
	const properties = behavior === 'modifier'
		? 'power-and-count'
		: normalizeEffectProperties(effectsPropertiesSelect?.value);
	const activation = normalizeEffectActivation(effectsActivationSelect?.value);
	const modifierDefinition = normalizeEffectModifierDefinition(effectsModifierDefinitionSelect?.value);
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
		description: effectDescription,
		icon: imageData,
		behavior,
		target,
		how,
		properties,
		activation,
		modifierDefinition
	};

	if (isEditing) {
		effectsRegistry = effectsRegistry.map((effect) => (effect.id === editingEffectId ? nextEffect : effect));
	} else {
		effectsRegistry = [...effectsRegistry, nextEffect];
	}

	effectsRegistry = effectsRegistry.sort((left, right) => left.name.localeCompare(right.name, 'pt-BR', { sensitivity: 'base' }));
	writeStoredEffects(effectsRegistry);
	renderEffectsRegistry();
	renderMesaEffectOptions();
	setEffectsFormOpen(false);
	await showCaptionInfo('Sucesso', isEditing ? 'Efeito atualizado com sucesso.' : 'Efeito cadastrado com sucesso.');
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
	await showCaptionInfo('Sucesso', 'Efeito removido com sucesso.');
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
	const parsedValue = Number.parseInt(String(value), 10);
	if (!Number.isFinite(parsedValue) || parsedValue < 0) {
		return 0;
	}

	return parsedValue;
}

function getCharacterKey(characterName) {
	return characterName.trim().toLowerCase();
}

function getCharacterMaxLife(character) {
	return parseNonNegativeInt(character.vida);
}

function getCharacterMaxStagger(character) {
	return parseNonNegativeInt(character.stagger);
}

function getMesaStateEntry(character, mesaState) {
	const maxLife = getCharacterMaxLife(character);
	const maxStagger = getCharacterMaxStagger(character);
	const key = getCharacterKey(character.nome);

	if (!(key in mesaState)) {
		return {
			life: maxLife,
			stagger: maxStagger,
			effects: [],
			speedValue: getDefaultMesaSpeedFieldValue(character),
			caValue: getDefaultMesaCaFieldValue(character)
		};
	}

	const rawEntry = mesaState[key];
	if (typeof rawEntry === 'number' || typeof rawEntry === 'string') {
		return {
			life: Math.min(parseNonNegativeInt(rawEntry), maxLife),
			stagger: maxStagger,
			effects: [],
			speedValue: getDefaultMesaSpeedFieldValue(character),
			caValue: getDefaultMesaCaFieldValue(character)
		};
	}

	if (!rawEntry || typeof rawEntry !== 'object' || Array.isArray(rawEntry)) {
		return {
			life: maxLife,
			stagger: maxStagger,
			effects: [],
			speedValue: getDefaultMesaSpeedFieldValue(character),
			caValue: getDefaultMesaCaFieldValue(character)
		};
	}

	const effects = Array.isArray(rawEntry.effects)
		? rawEntry.effects.map((effect, index) => normalizeMesaEffect(effect, index)).filter(Boolean)
		: [];

	return {
		life: Math.min(parseNonNegativeInt(rawEntry.life), maxLife),
		stagger: Math.min(parseNonNegativeInt(rawEntry.stagger), maxStagger),
		effects,
		speedValue: typeof rawEntry.speedValue === 'string' ? rawEntry.speedValue : getDefaultMesaSpeedFieldValue(character),
		caValue: typeof rawEntry.caValue === 'string' ? rawEntry.caValue : getDefaultMesaCaFieldValue(character)
	};
}

function setMesaStateEntry(character, mesaState, nextLife, nextStagger, nextEffects, nextSpeedValue, nextCaValue) {
	const maxLife = getCharacterMaxLife(character);
	const maxStagger = getCharacterMaxStagger(character);
	const key = getCharacterKey(character.nome);
	const currentEntry = getMesaStateEntry(character, mesaState);
	const clampedLife = Math.min(Math.max(parseNonNegativeInt(nextLife), 0), maxLife);
	const clampedStagger = Math.min(Math.max(parseNonNegativeInt(nextStagger), 0), maxStagger);
	const effects = Array.isArray(nextEffects)
		? nextEffects.map((effect, index) => normalizeMesaEffect(effect, index)).filter(Boolean)
		: currentEntry.effects;
	const speedValue = nextSpeedValue === undefined
		? currentEntry.speedValue
		: String(nextSpeedValue ?? '').trim();
	const caValue = nextCaValue === undefined
		? currentEntry.caValue
		: String(nextCaValue ?? '').trim();
	const defaultSpeedValue = getDefaultMesaSpeedFieldValue(character);
	const defaultCaValue = getDefaultMesaCaFieldValue(character);

	if (
		clampedLife === maxLife
		&& clampedStagger === maxStagger
		&& !effects.length
		&& speedValue === defaultSpeedValue
		&& caValue === defaultCaValue
	) {
		delete mesaState[key];
		return;
	}

	mesaState[key] = {
		life: clampedLife,
		stagger: clampedStagger,
		effects,
		speedValue,
		caValue
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
		const hasEffectsApplied = normalizedEntry.effects.length > 0;
		const hasSpeedOverride = normalizedEntry.speedValue !== getDefaultMesaSpeedFieldValue(character);
		const hasCaOverride = normalizedEntry.caValue !== getDefaultMesaCaFieldValue(character);

		if (!hasDamageApplied && !hasEffectsApplied && !hasSpeedOverride && !hasCaOverride) {
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
			|| JSON.stringify(existingEntry.effects ?? []) !== JSON.stringify(normalizedEntry.effects)
			|| String(existingEntry.speedValue ?? '') !== normalizedEntry.speedValue
			|| String(existingEntry.caValue ?? '') !== normalizedEntry.caValue;

		if (needsRewrite) {
			mesaState[key] = {
				life: normalizedEntry.life,
				stagger: normalizedEntry.stagger,
				effects: normalizedEntry.effects,
				speedValue: normalizedEntry.speedValue,
				caValue: normalizedEntry.caValue
			};
			hasChanges = true;
		}
	});

	if (hasChanges) {
		writeMesaState(mesaState);
	}
}

function getSelectedMesaCharacter() {
	if (!mesaCharacterSelect || !characters.length) {
		return null;
	}

	const selectedName = mesaCharacterSelect.value;
	return characters.find((character) => character.nome === selectedName) || null;
}

function getMesaCurrentLife(character, mesaState) {
	return getMesaStateEntry(character, mesaState).life;
}

function getMesaCurrentStagger(character, mesaState) {
	return getMesaStateEntry(character, mesaState).stagger;
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

	const shouldShowOverlay = getMesaDamageTypeSelection() === 'stagger' && !mesaCharacterImage.hidden;
	mesaCharacterStaggerOverlay.hidden = !shouldShowOverlay;
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
		const isPowerOnlyEffect = effect.properties === 'power';
		const isBehaviorModifier = normalizeEffectBehavior(effect.behavior) === 'modifier';
		const isModifierEffect = effect.activation === 'modifier' || isBehaviorModifier;
		const powerMinAttribute = isBehaviorModifier ? ' min="1"' : ' min="0"';
		const powerMaxAttribute = isBehaviorModifier ? ' max="10"' : '';
		const adjustmentValues = mesaEffectAdjustmentInputs[effect.instanceId] || {
			power: 1,
			count: 1,
			decreasePower: 1,
			decreaseCount: 1
		};
		const effectDescription = String(effect.description ?? getEffectTemplate(effect.id)?.description ?? '').trim() || 'Sem descrição.';
		const effectCard = document.createElement('article');
		effectCard.className = `mesa__effect-card mesa__effect-card--${effect.id}`;
		effectCard.draggable = true;
		effectCard.dataset.mesaEffectInstance = effect.instanceId;
		effectCard.innerHTML = `
			<div class="mesa__effect-card-header">
				<img class="mesa__effect-icon" src="${effect.icon}" alt="" aria-hidden="true">
				<div class="mesa__effect-card-title-group">
					<h3 class="mesa__effect-card-title">${effect.name}</h3>
					<p class="mesa__effect-card-detail">${effectDescription}</p>
				</div>
			</div>
			<div class="mesa__effect-controls${isPowerOnlyEffect ? ' mesa__effect-controls--power-only' : ' mesa__effect-controls--counted'}">
				<label class="mesa__effect-field">
					<span class="mesa__effect-field-label">Potência</span>
					<input class="mesa__effect-input" type="number"${powerMinAttribute}${powerMaxAttribute} step="1" value="${effect.power}" data-mesa-effect-field="power" data-mesa-effect-instance="${effect.instanceId}">
				</label>
				${isPowerOnlyEffect ? '' : `
				<label class="mesa__effect-field">
					<span class="mesa__effect-field-label">Count</span>
					<input class="mesa__effect-input" type="number" min="0" step="1" value="${effect.count}" data-mesa-effect-field="count" data-mesa-effect-instance="${effect.instanceId}">
				</label>
				`}
				<div class="mesa__effect-actions${isModifierEffect ? ' mesa__effect-actions--modifier' : ''}">
					${isModifierEffect ? `
					<label class="mesa__effect-modifier-toggle">
						<input type="checkbox" data-mesa-effect-active="${effect.instanceId}"${effect.active ? ' checked' : ''}>
						<span>Ativo</span>
					</label>
					` : ''}
					<button class="mesa__effect-apply" type="button" data-mesa-effect-apply="${effect.instanceId}"${effect.count <= 0 ? ' disabled' : ''}>Aplicar</button>
					<button class="mesa__effect-remove" type="button" data-mesa-effect-remove="${effect.instanceId}" aria-label="Remover ${effect.name}" title="Remover efeito">×</button>
				</div>
			</div>
			<div class="mesa__effect-adjustments${isPowerOnlyEffect ? '' : ' mesa__effect-adjustments--with-count'}">
				<div class="mesa__effect-adjustment">
					<div class="mesa__effect-adjustment-row">
						<label class="mesa__effect-adjustment-field">
							<span class="mesa__effect-field-label">Aumentar Potência</span>
							<input class="mesa__effect-input" type="number" min="0" step="1" value="${adjustmentValues.power}" data-mesa-effect-increase-field="power" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<button class="mesa__effect-increase" type="button" data-mesa-effect-increase="${effect.instanceId}" data-mesa-effect-increase-field="power" aria-label="Aumentar potência" title="Aumentar potência">+</button>
						<label class="mesa__effect-adjustment-field">
							<span class="mesa__effect-field-label">Reduzir Potência</span>
							<input class="mesa__effect-input" type="number" min="0" step="1" value="${adjustmentValues.decreasePower}" data-mesa-effect-decrease-field="power" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<button class="mesa__effect-increase" type="button" data-mesa-effect-decrease="${effect.instanceId}" data-mesa-effect-decrease-field="power" aria-label="Reduzir potência" title="Reduzir potência">-</button>
					</div>
				</div>
				${isPowerOnlyEffect ? '' : `
				<div class="mesa__effect-adjustment-separator" role="separator" aria-hidden="true"></div>
				<div class="mesa__effect-adjustment">
					<div class="mesa__effect-adjustment-row">
						<label class="mesa__effect-adjustment-field">
							<span class="mesa__effect-field-label">Aumentar Count</span>
							<input class="mesa__effect-input" type="number" min="0" step="1" value="${adjustmentValues.count}" data-mesa-effect-increase-field="count" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<button class="mesa__effect-increase" type="button" data-mesa-effect-increase="${effect.instanceId}" data-mesa-effect-increase-field="count" aria-label="Aumentar count" title="Aumentar count">+</button>
						<label class="mesa__effect-adjustment-field">
							<span class="mesa__effect-field-label">Reduzir Count</span>
							<input class="mesa__effect-input" type="number" min="0" step="1" value="${adjustmentValues.decreaseCount}" data-mesa-effect-decrease-field="count" data-mesa-effect-instance="${effect.instanceId}">
						</label>
						<button class="mesa__effect-increase" type="button" data-mesa-effect-decrease="${effect.instanceId}" data-mesa-effect-decrease-field="count" aria-label="Reduzir count" title="Reduzir count">-</button>
					</div>
				</div>
				`}
			</div>
		`;
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
		if (usesCount) {
			const count = normalizeNonNegativeIntOrDefault(effect.count, DEFAULT_MESA_EFFECT_COUNT);
			const activationUses = Math.min(count, normalizedActivationCount);
			if (activationUses <= 0) {
				return;
			}

			const nextCount = count - activationUses;
			bonus += power * activationUses;
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

		bonus += power * normalizedActivationCount;
		triggeredEffectsCount += 1;
		nextEffects.push({
			...effect,
			power
		});
	});

	if (action !== 'effect-activation' && triggeredEffectsCount > 0) {
		const chainActivationResult = resolveMesaModifierAction(nextEffects, 'effect-activation', excludedInstanceId, triggeredEffectsCount);
		return {
			bonus: bonus + chainActivationResult.bonus,
			nextEffects: chainActivationResult.nextEffects
		};
	}

	return { bonus, nextEffects };
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
		mesaEffectSelect.value = template.id;
	}
}

function applyMesaEffect(effectInstanceId) {
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
	const power = normalizeNonNegativeIntOrDefault(effect.power, DEFAULT_MESA_EFFECT_POWER);
	const count = normalizeNonNegativeIntOrDefault(effect.count, DEFAULT_MESA_EFFECT_COUNT);
	const effectHow = normalizeEffectHow(effect.how);
	const isIncrease = effectHow === 'increase';
	const isPowerOnlyEffect = effect.properties === 'power';
	const isModifierEffect = effect.activation === 'modifier';
	const isCountModifierEffect = isModifierEffect && !isPowerOnlyEffect;
	if (!isPowerOnlyEffect && count <= 0) {
		return;
	}

	const affectsLife = effect.target === 'life' || effect.target === 'life-and-stagger';
	const affectsStagger = effect.target === 'stagger' || effect.target === 'life-and-stagger';
	const affectsSpeed = effect.target === 'speed';
	const affectsCa = effect.target === 'ca';
	const speedRangeForEffect = getSpeedRangeBounds(selectedCharacter.speed);
	const speedFallbackValue = speedRangeForEffect
		? speedRangeForEffect.max
		: parseNonNegativeInt(selectedCharacter.speed);
	const caFallbackValue = parseNonNegativeInt(selectedCharacter.ca);
	const currentSpeedValue = parseEditableStatValue(currentEntry.speedValue, speedFallbackValue);
	const currentCaValue = parseEditableStatValue(currentEntry.caValue, caFallbackValue);
	const maxLife = getCharacterMaxLife(selectedCharacter);
	const maxStagger = getCharacterMaxStagger(selectedCharacter);
	const nextLife = affectsLife
		? (isIncrease ? Math.min(currentEntry.life + power, maxLife) : Math.max(currentEntry.life - power, 0))
		: currentEntry.life;
	const nextStagger = affectsStagger
		? (isIncrease ? Math.min(currentEntry.stagger + power, maxStagger) : Math.max(currentEntry.stagger - power, 0))
		: currentEntry.stagger;
	const nextSpeedValue = affectsSpeed
		? String(isIncrease ? currentSpeedValue + power : Math.max(currentSpeedValue - power, 1))
		: currentEntry.speedValue;
	const nextCaValue = affectsCa
		? String(isIncrease ? currentCaValue + power : Math.max(currentCaValue - power, 1))
		: currentEntry.caValue;

	const nextEffects = [...currentEntry.effects];
	if (isPowerOnlyEffect) {
		nextEffects[effectIndex] = {
			...effect,
			power
		};
	} else if (isCountModifierEffect) {
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

	const modifierEffectActivationResolution = resolveMesaModifierAction(nextEffects, 'effect-activation', effect.instanceId);
	const nextLifeWithEffectActivation = Math.max(nextLife - modifierEffectActivationResolution.bonus, 0);

	setMesaStateEntry(
		selectedCharacter,
		mesaState,
		nextLifeWithEffectActivation,
		nextStagger,
		modifierEffectActivationResolution.nextEffects,
		nextSpeedValue,
		nextCaValue
	);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function applyMesaDamage() {
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

	const damageType = getMesaDamageTypeSelection();
	const resistanceMultiplier = getMesaDamageResistanceMultiplier(selectedCharacter, damageType);
	const appliedDamage = Math.max(Math.round(damage * resistanceMultiplier), 0);

	const mesaState = readMesaState();
	const currentEntry = getMesaStateEntry(selectedCharacter, mesaState);
	const modifierAttackResolution = resolveMesaModifierAction(currentEntry.effects, 'attack');
	const currentLife = currentEntry.life;
	const currentStagger = currentEntry.stagger;
	const adjustedLifeDamage = applyBehaviorDamageModifiers(appliedDamage, 'life', modifierAttackResolution.nextEffects);
	const adjustedStaggerDamage = applyBehaviorDamageModifiers(appliedDamage, 'stagger', modifierAttackResolution.nextEffects);
	const nextLife = Math.max(currentLife - adjustedLifeDamage - modifierAttackResolution.bonus, 0);
	const nextStagger = Math.max(currentStagger - adjustedStaggerDamage, 0);

	setMesaStateEntry(selectedCharacter, mesaState, nextLife, nextStagger, modifierAttackResolution.nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
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
	const nextLife = shouldHealLife ? Math.min(currentLife + heal + modifierHealResolution.bonus, maxLife) : currentLife;
	const nextStagger = shouldHealStagger ? Math.min(currentStagger + heal + modifierHealResolution.bonus, maxStagger) : currentStagger;

	setMesaStateEntry(selectedCharacter, mesaState, nextLife, nextStagger, modifierHealResolution.nextEffects);
	writeMesaState(mesaState);
	renderMesaStatus();
	mesaHealInput.value = '';
	mesaHealInput.focus();
}

function applyMesaReset() {
	const selectedCharacter = getSelectedMesaCharacter();
	if (!selectedCharacter || lastLoadedMesaCharacter !== selectedCharacter.nome) {
		return;
	}

	const mesaState = readMesaState();
	const maxLife = getCharacterMaxLife(selectedCharacter);
	const maxStagger = getCharacterMaxStagger(selectedCharacter);

	setMesaStateEntry(selectedCharacter, mesaState, maxLife, maxStagger);
	writeMesaState(mesaState);
	renderMesaStatus();
}

function renderMesaStatus() {
	if (!mesaStatus) {
		return;
	}

	// Check if no character is selected (placeholder value is empty)
	if (!mesaCharacterSelect || mesaCharacterSelect.value === '') {
		clearMesaStatus();
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

	// Show the content wrapper
	if (mesaContentWrapper) {
		mesaContentWrapper.hidden = false;
	}

	// Show the right content (image area)
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
			speed: speedRangeBounds ? String(rollSpeedRange(speedRangeBounds) ?? '') : String(selectedCharacter.speed || '').trim(),
			ca: String(selectedCharacter.ca ?? '').trim()
		};
		mesaInitialStatsByCharacter[characterKey] = initialStats;

		setMesaStateEntry(
			selectedCharacter,
			mesaState,
			currentEntry.life,
			currentEntry.stagger,
			currentEntry.effects,
			initialStats.speed,
			initialStats.ca
		);
		writeMesaState(mesaState);
	}

	const speedInitialResult = currentEntry.speedValue || initialStats.speed;
	const caBaseValue = String(selectedCharacter.ca ?? '').trim();
	const caDisplayValue = caBaseValue || '-';
	const caInputValue = currentEntry.caValue || initialStats.ca;
	const movementValue = String(selectedCharacter.deslocamento ?? '').trim() || '???';
	const slashResistance = getResistanceDisplayData(selectedCharacter.resistencias?.slash);
	const pierceResistance = getResistanceDisplayData(selectedCharacter.resistencias?.pierce);
	const bluntResistance = getResistanceDisplayData(selectedCharacter.resistencias?.blunt);

	mesaStatus.innerHTML = `
		<div class="mesa__status-card">
			<div class="mesa__status-header">
			<h2 class="mesa__status-title">${selectedCharacter.nome}</h2>
			<button id="mesa-reset-button" class="mesa__damage-attack mesa__status-reset-btn" type="button" aria-label="Resetar vida e stagger" title="Resetar vida e stagger para o máximo">
				<img src="res/reset.png" alt="" aria-hidden="true">
			</button>
			</div>
			<div class="mesa__status-metrics">
				<div class="mesa__status-metric">
					<p class="mesa__status-text"><span class="mesa__status-label"><img src="res/hp.png" alt="" class="mesa__status-icon" aria-hidden="true">Vida</span> <span class="mesa__status-value">${currentLife} / ${maxLife}</span></p>
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
						<p class="mesa__status-text"><span class="mesa__status-label">Speed</span> <img id="mesa-speed-reset-icon" src="res/speed.png" alt="Resetar speed" class="mesa__status-icon mesa__status-icon--reset" role="button" tabindex="0" title="Resetar speed para o valor inicial"> <span id="mesa-speed-value" class="mesa__status-value">${speedRangeText}</span> <button id="mesa-speed-roll-button" class="mesa__speed-roll" type="button" aria-label="Rolar speed" title="Rolar speed"${speedRangeBounds ? '' : ' disabled'}>🎲</button> <input id="mesa-speed-result" class="mesa__speed-input" type="text" value="${speedInitialResult}" aria-label="Resultado da rolagem de speed"></p>
					</div>
					<div class="mesa__status-metric mesa__status-metric--simple">
						<p class="mesa__status-text"><span class="mesa__status-label">CA</span> <img id="mesa-ca-reset-icon" src="res/ca.png" alt="Resetar CA" class="mesa__status-icon mesa__status-icon--reset" role="button" tabindex="0" title="Resetar CA para o valor inicial"> <span class="mesa__status-value">${caDisplayValue}</span> <input id="mesa-ca-value" class="mesa__speed-input" type="text" value="${caInputValue}" aria-label="Campo de CA"></p>
					</div>
					<div class="mesa__status-metric mesa__status-metric--simple">
						<p class="mesa__status-text"><span class="mesa__status-label"><img src="res/movement.png" alt="" class="mesa__status-icon" aria-hidden="true">Deslocamento</span> <span class="mesa__status-value">${movementValue}<em class="mesa__unit">feet</em></span></p>
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
			</div>
		</div>
	`;

	// Add event listener for reset button
	const resetButton = document.getElementById('mesa-reset-button');
	if (resetButton) {
		resetButton.addEventListener('click', applyMesaReset);
	}

	const speedRollButton = document.getElementById('mesa-speed-roll-button');
	const speedResultInput = document.getElementById('mesa-speed-result');
	const caValueInput = document.getElementById('mesa-ca-value');
	const speedResetIcon = document.getElementById('mesa-speed-reset-icon');
	const caResetIcon = document.getElementById('mesa-ca-reset-icon');

	const persistEditableMesaStatusFields = () => {
		const nextMesaState = readMesaState();
		const nextEntry = getMesaStateEntry(selectedCharacter, nextMesaState);
		setMesaStateEntry(
			selectedCharacter,
			nextMesaState,
			nextEntry.life,
			nextEntry.stagger,
			nextEntry.effects,
			speedResultInput instanceof HTMLInputElement ? speedResultInput.value : nextEntry.speedValue,
			caValueInput instanceof HTMLInputElement ? caValueInput.value : nextEntry.caValue
		);
		writeMesaState(nextMesaState);
	};

	if (speedRollButton instanceof HTMLButtonElement && speedResultInput instanceof HTMLInputElement) {
		speedRollButton.addEventListener('click', () => {
			const rolledValue = rollSpeedRange(speedRangeBounds);
			if (rolledValue === null) {
				return;
			}

			speedResultInput.value = String(rolledValue);
			initialStats.speed = speedResultInput.value;
			mesaInitialStatsByCharacter[characterKey] = initialStats;
			persistEditableMesaStatusFields();
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

	// Render character image
	const imageSource = resolveCharacterImageSource(selectedCharacter);
	if (mesaCharacterImage && mesaImagePlaceholder) {
		if (imageSource) {
			mesaCharacterImage.src = imageSource;
			mesaCharacterImage.alt = selectedCharacter.nome;
			mesaCharacterImage.hidden = false;
			mesaImagePlaceholder.hidden = true;
		} else {
			mesaCharacterImage.hidden = true;
			mesaImagePlaceholder.hidden = false;
		}
	}

	updateMesaDamagePreviewOverlay();

	// Render additional character information
	if (mesaInfo) {
		mesaInfo.innerHTML = '';
	}

	renderMesaEffects(selectedCharacter, mesaState);

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
		lastLoadedMesaCharacter = '';
		lastSelectedMesaCharacter = '';
		clearMesaStatus();
		return;
	}

	mesaCharacterSelect.disabled = false;

	const hasLoadedCharacter = lastLoadedMesaCharacter && characters.some((char) => char.nome === lastLoadedMesaCharacter);
	const hasSelectedCharacter = lastSelectedMesaCharacter && characters.some((char) => char.nome === lastSelectedMesaCharacter);

	if (hasLoadedCharacter) {
		mesaCharacterSelect.value = lastLoadedMesaCharacter;
		renderMesaStatus();
		return;
	}

	if (lastLoadedMesaCharacter && !hasLoadedCharacter) {
		lastLoadedMesaCharacter = '';
	}

	mesaCharacterSelect.value = '';

	if (hasSelectedCharacter) {
		mesaCharacterSelect.value = lastSelectedMesaCharacter;
	}

	clearMesaStatus();
}

function clearMesaStatus() {
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
	setEffectsFormOpen(false);
	renderKeywordRegistry();
	renderEffectsRegistry();
	renderMesaEffectOptions();
	syncMesaStateWithCharacters(characters);
	syncMesaEffectsWithRegistry();
	updateMesaAvailability();
	renderCharacterList();
	renderCharacterDetails();
	renderMesaPanel();
	renderEditCharacterPanel();
}

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		setActivePanel(tab.dataset.target);
	});
});

navbarHome?.addEventListener('click', () => {
	setActivePanel('inicio');
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

effectsActivationSelect?.addEventListener('change', () => {
	updateEffectsModifierDefinitionVisibility();
});

effectsTargetSelect?.addEventListener('change', () => {
	updateEffectsHowVisibility();
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

	const activeEffectId = target.dataset.mesaEffectActive ?? '';
	if (activeEffectId) {
		setMesaEffectInstanceActive(activeEffectId, target.checked);
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
		const amount = amountInput instanceof HTMLInputElement ? amountInput.value : '1';
		if (effectInstanceId && (field === 'power' || field === 'count')) {
			if (!mesaEffectAdjustmentInputs[effectInstanceId]) {
				mesaEffectAdjustmentInputs[effectInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
			}

			mesaEffectAdjustmentInputs[effectInstanceId][field] = normalizeNonNegativeIntOrDefault(amount, 1);
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

		const amountInput = effectCard.querySelector(`[data-mesa-effect-decrease-field="${field}"]`);
		const amount = amountInput instanceof HTMLInputElement ? amountInput.value : '1';
		if (effectInstanceId && (field === 'power' || field === 'count')) {
			if (!mesaEffectAdjustmentInputs[effectInstanceId]) {
				mesaEffectAdjustmentInputs[effectInstanceId] = { power: 1, count: 1, decreasePower: 1, decreaseCount: 1 };
			}

			const memoryKey = field === 'power' ? 'decreasePower' : 'decreaseCount';
			mesaEffectAdjustmentInputs[effectInstanceId][memoryKey] = normalizeNonNegativeIntOrDefault(amount, 1);
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

	const effectCard = target.closest('.mesa__effect-card');
	if (!(effectCard instanceof HTMLElement)) {
		return;
	}

	const isInteractiveElement = Boolean(target.closest('input, button, select, textarea, label'));
	if (isInteractiveElement) {
		event.preventDefault();
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
	}
	renderMesaStatus();
});

mesaCharacterSelect?.addEventListener('change', () => {
	lastSelectedMesaCharacter = mesaCharacterSelect.value;
});

mesaAttackButton?.addEventListener('click', () => {
	applyMesaDamage();
});

[mesaDamageSlashToggle, mesaDamagePierceToggle, mesaDamageBluntToggle, mesaDamageStaggerToggle].forEach((toggle, index) => {
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

mesaEffectAddButton?.addEventListener('click', () => {
	addMesaEffectToCharacter();
});

mesaDamageInput?.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter') {
		return;
	}

	event.preventDefault();
	applyMesaDamage();
});

mesaHealInput?.addEventListener('keydown', (event) => {
	if (event.key !== 'Enter') {
		return;
	}

	event.preventDefault();
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

	const effectApplyButton = target.closest('[data-mesa-effect-apply]');
	if (effectApplyButton instanceof HTMLElement) {
		applyMesaEffect(effectApplyButton.dataset.mesaEffectApply ?? '');
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
initializeCharacterViewer();

const initialTargetId = panels.some((panel) => panel.id === window.location.hash.slice(1))
	? window.location.hash.slice(1)
	: 'inicio';

setActivePanel(initialTargetId);
