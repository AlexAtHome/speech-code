"use strict";

const sentenceParts = {
	ru: [
		[
			"С другой стороны",
			"Равным образом",
			"Не следует, однако, забывать, что",
			"Таким образом",
			"Повседневная практика показывает, что",
			"Значимость этих проблем настолько очевидна, что",
			"Разнообразный и богатый опыт",
			"Задача организации, в особенности же",
			"Идейные соображения высшего порядка, а также",
			"Не вызывает сомнений, что",
			"Для современного мира",
			"Прежде всего",
			"Следует отметить, что"
		],
		[
			"реализация намеченных плановых заданий",
			"рамки и место обучения кадров",
			"постоянный количественный рост и сфера нашей активности",
			"сложившаяся структура организации",
			"новая модель организационной деятельности",
			"дальнейшее развитие различных форм деятельности",
			"постоянное информационно-пропогандистское обеспечение нашей деятельности",
			"управление и развитие структуры",
			"консультация с широким активом",
			"начало повседневной работы по формированию позиции",
			"социально-экономическое развитие",
			"выбранный нами инновационный путь",
			"повышение уровня гражданского сознания",
			"высокотехнологичная концепция общественной системы",
			"курс на социально-ориентированный национальный проект",
			"понимание сущности ресурсосберегающих технологий"
		],
		[
			"играет важную роль в формировании",
			"требует от нас анализа",
			"требует определения и уточнения",
			"способствует подготовке и реализации",
			"обеспечивает широкому кругу специалистов",
			"позволяет выполнять важные задания по разработке",
			"в значительной степени обуславливает создание",
			"позволяет оценить значение",
			"представляет собой интересный эксперимент",
			"влечёт за собой интересный процесс внедрения модернизации",
			"способствует повышению качества",
			"обеспечивает актуальность",
			"требует анализа",
			"напрямую зависит от",
			"создаёт предпосылки качественно новых шагов для"
		],
		[
			"существующий финансовых и административных условий.",
			"дальнейших направлений развития.",
			"системы массового участия.",
			"позиции, занимаемых участниками в отношении поставленных задач.",
			"новых предложений.",
			"направлений прогрессивного развития.",
			"системы обучения кадров, соответствующей насущным потребностям.",
			"соответствующих условий активизации.",
			"модели развития.",
			"форм воздействия.",
			"поставленных обществом и правительством задач.",
			"укрепления демократической системы.",
			"новых принципов формирования материально-технической и кадровой базы.",
			"прогресса профессионального общества.",
			"поэтапного и последовательного развития общества.",
			"экономической целесообразности принимаемых изменений."
		]
	],
	en: [
		[
			'On the other hand',
			'Likewise',
			'However, one should not forget',
			'Thus',
			'The significance of such problems is so obvious that',
			'The diverse and plentiful experience',
			'There\'s no doubt that',
			'It should be noted that'
		],
		[
			'the implementation of the planned tasks',
			'the bounds and place of personnel training',
			'constant quantitive growth and the scope of our activity',
			'the established organisation structure',
			'new model of the organisational activity',
			'further development of various forms of activity',
			'social economic development',
			'the innovational path that we have chosen',
			'hi-tech concept of the social system',
			'the understanding of nature of resource saving technologies'
		],
		[
			'plays an important part in the formation of',
			'requires the analysis of',
			'requires the clarification of',
			'contributes to the preparing and implementation of',
			'allows to complete important implementation tasks of',
			'significantly conditions the creation of',
			'allows to appreciate the value of',
			'represents an interesting experiment of',
			'contributes to increasing the quality of',
			'directly depends on',
		],
		[
			'existing financial and administrative conditions.',
			'further ways of development.',
			'the system of mass participation.',
			'the position that is taken by the participants in relation to tasks.',
			'new propositions.',
			'forms of influence.',
			'the tasks given by the society and government.',
			'strengthening the democratic system.',
			'the step-by-step consistent development of the society.',
			'economic practicability of decisions made.'
		]
	]
};

/**
 * Отдаёт случайный элемент массива
 * @param {array} array Массив с элементами
 */
const randomValueFrom = (array) => array[~~(array.length * Math.random())];

/**
 * Выстраивает предложение
 */
const getSentence = (lang = 'ru') => {
	const result = sentenceParts[lang].map(part => randomValueFrom(part));
	if (result[0].endsWith("!") || result[0].endsWith(".")) {
		result[1] = result[1].replace(/^./, result[1].slice(0, 1).toUpperCase());
	}
	return result.join(" ");
};

/**
 * Строит абзац из предложений
 * @param {number} sentences Число предложений в абзаце
 */
const getParagraph = (sentences = 3, lang = 'ru') => {
	let result = "";
	for (let i = 0; i < sentences; i++) {
		if (i > 0) result += " ";
		result += getSentence(lang);
	}
	return result;
};

/**
 * Строит текст
 * @param {number} paragraphs Число абзацев в тексте
 */
const getText = (paragraphs = 3, lang = 'ru') => {
	let result = "";
	for (let i = 0; i < paragraphs; i++) {
		if (i > 0) result += "\n";
		let sentences = Math.floor(Math.random() * 5) + 2;
		result += getParagraph(sentences, lang);
	}
	return result;
};

/**
 * Строит абзац с определённым количеством символов
 * @param {number} chars Приблизительное количество символов в абзаце
 */
const getCharacters = (chars = 50, lang = 'ru') => {
	const maxRestarts = 10;
	let restarts = 0;

	let previousResult = "";

	const generate = () => {
		const maxRetries = 20;
		let retries = 0;

		let text = "";
		while (text.length < chars && maxRetries > retries) {
			const sentence = getSentence(lang);
			if (`${text} ${sentence}`.length - chars < 20) {
				text += sentence;
				retries = 0;
			} else {
				retries++;
			}
		}
		if (retries === maxRetries && restarts < maxRestarts) {
			if (text.length > previousResult.length) {
				previousResult = text;
			}
			restarts++;
			return generate();
		}
		return text;
	};

	let result = generate();
	if (maxRestarts === restarts && result.length < previousResult.length) {
		result = previousResult;
	}
	return result;
};

if (typeof module !== "undefined") {
	module.exports = {
		getParagraph,
		getText,
		getSentence,
		getCharacters,
	};
}
