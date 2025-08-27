// -*- coding: utf-8 -*-

// --------------------------
// Mapping groups (exactly as provided)
// --------------------------

const SHOR: Record<string, string> = {
	o: "অ",
	oo: "ঽ",
	fuf: "‌ু",
	fuuf: "‌ূ",
	fqf: "‌ৃ",
	fa: "া",
	a: "আ",
	fi: "ি",
	i: "ই",
	fii: "ী",
	ii: "ঈ",
	fu: "ু",
	u: "উ",
	fuu: "ূ",
	uu: "ঊ",
	fq: "ৃ",
	q: "ঋ",
	fe: "ে",
	e: "এ",
	foi: "ৈ",
	oi: "ঐ",
	fw: "ো",
	w: "ও",
	fou: "ৌ",
	ou: "ঔ",
	fae: "্যা",
	ae: "অ্যা",
	wa: "ওয়া",
	fwa: "োয়া",
	wae: "ওয়্যা",
	we: "ওয়ে",
	fwe: "োয়ে",

	ngo: "ঙ",
	nga: "ঙা",
	ngi: "ঙি",
	ngii: "ঙী",
	ngu: "ঙু",
	nguff: "ঙ",
	nguu: "ঙূ",
	nguuff: "ঙ",
	ngq: "ঙৃ",
	nge: "ঙে",
	ngoi: "ঙৈ",
	ngw: "ঙো",
	ngou: "ঙৌ",
	ngae: "ঙ্যা",
}

const BYANJON: Record<string, string> = {
	k: "ক",
	kh: "খ",
	g: "গ",
	gh: "ঘ",
	c: "চ",
	ch: "ছ",
	j: "জ",
	jh: "ঝ",
	nff: "ঞ",
	tf: "ট",
	tff: "ঠ",
	tfh: "ঠ",
	df: "ড",
	dff: "ঢ",
	dfh: "ঢ",
	nf: "ণ",
	t: "ত",
	th: "থ",
	d: "দ",
	dh: "ধ",
	n: "ন",
	p: "প",
	ph: "ফ",
	b: "ব",
	v: "ভ",
	m: "ম",
	z: "য",
	l: "ল",
	sh: "শ",
	sf: "ষ",
	s: "স",
	h: "হ",
	y: "য়",
	rf: "ড়",
	rff: "ঢ়",
	",,": "়",
}

const JUKTOBORNO: Record<string, string> = {
	rz: "র‍্য",
	kk: "ক্ক",
	ktf: "ক্ট",
	ktfr: "ক্ট্র",
	kt: "ক্ত",
	ktr: "ক্ত্র",
	kb: "ক্ব",
	km: "ক্ম",
	kz: "ক্য",
	kr: "ক্র",
	kl: "ক্ল",
	kf: "ক্ষ",
	ksf: "ক্ষ",
	kkh: "ক্ষ",
	kfnf: "ক্ষ্ণ",
	kfn: "ক্ষ্ণ",
	ksfnf: "ক্ষ্ণ",
	ksfn: "ক্ষ্ণ",
	kkhn: "ক্ষ্ণ",
	kkhnf: "ক্ষ্ণ",
	kfb: "ক্ষ্ব",
	ksfb: "ক্ষ্ব",
	kkhb: "ক্ষ্ব",
	kfm: "ক্ষ্ম",
	kkhm: "ক্ষ্ম",
	ksfm: "ক্ষ্ম",
	kfz: "ক্ষ্য",
	ksfz: "ক্ষ্য",
	kkhz: "ক্ষ্য",
	ks: "ক্স",
	khz: "খ্য",
	khr: "খ্র",
	ggg: "গ্গ",
	gnf: "গ্‌ণ",
	gdh: "গ্ধ",
	gdhz: "গ্ধ্য",
	gdhr: "গ্ধ্র",
	gn: "গ্ন",
	gnz: "গ্ন্য",
	gb: "গ্ব",
	gm: "গ্ম",
	gz: "গ্য",
	gr: "গ্র",
	grz: "গ্র্য",
	gl: "গ্ল",
	ghn: "ঘ্ন",
	ghr: "ঘ্র",
	ngk: "ঙ্ক",
	ngkt: "ঙ্‌ক্ত",
	ngkz: "ঙ্ক্য",
	ngkr: "ঙ্ক্র",
	ngkkh: "ঙ্ক্ষ",
	ngksf: "ঙ্ক্ষ",
	ngkh: "ঙ্খ",
	ngg: "ঙ্গ",
	nggz: "ঙ্গ্য",
	nggh: "ঙ্ঘ",
	ngghz: "ঙ্ঘ্য",
	ngghr: "ঙ্ঘ্র",
	ngm: "ঙ্ম",
	cc: "চ্চ",
	cch: "চ্ছ",
	cchb: "চ্ছ্ব",
	cchr: "চ্ছ্র",
	cnff: "চ্ঞ",
	cb: "চ্ব",
	cz: "চ্য",
	jj: "জ্জ",
	jjb: "জ্জ্ব",
	jjh: "জ্ঝ",
	jnff: "জ্ঞ",
	gg: "জ্ঞ",
	jb: "জ্ব",
	jz: "জ্য",
	jr: "জ্র",
	nc: "ঞ্চ",
	nffc: "ঞ্চ",
	nj: "ঞ্জ",
	nffj: "ঞ্জ",
	njh: "ঞ্ঝ",
	nffjh: "ঞ্ঝ",
	nch: "ঞ্ছ",
	nffch: "ঞ্ছ",
	ttf: "ট্ট",
	tftf: "ট্ট",
	tfb: "ট্ব",
	tfm: "ট্ম",
	tfz: "ট্য",
	tfr: "ট্র",
	ddf: "ড্ড",
	dfdf: "ড্ড",
	dfb: "ড্ব",
	dfz: "ড্য",
	dfr: "ড্র",
	rfg: "ড়্‌গ",
	dffz: "ঢ্য",
	dfhz: "ঢ্য",
	dffr: "ঢ্র",
	dfhr: "ঢ্র",
	nftf: "ণ্ট",
	nftff: "ণ্ঠ",
	nftfh: "ণ্ঠ",
	nftffz: "ণ্ঠ্য",
	nftfhz: "ণ্ঠ্য",
	nfdf: "ণ্ড",
	nfdfz: "ণ্ড্য",
	nfdfr: "ণ্ড্র",
	nfdff: "ণ্ঢ",
	nfdfh: "ণ্ঢ",
	nfnf: "ণ্ণ",
	nfn: "ণ্ণ",
	nfb: "ণ্ব",
	nfm: "ণ্ম",
	nfz: "ণ্য",
	tt: "ত্ত",
	ttb: "ত্ত্ব",
	ttz: "ত্ত্য",
	tth: "ত্থ",
	tn: "ত্ন",
	tb: "ত্ব",
	tm: "ত্ম",
	tmz: "ত্ম্য",
	tz: "ত্য",
	tr: "ত্র",
	trz: "ত্র্য",
	thb: "থ্ব",
	thz: "থ্য",
	thr: "থ্র",
	dg: "দ্‌গ",
	dgh: "দ্‌ঘ",
	dd: "দ্দ",
	ddb: "দ্দ্ব",
	ddh: "দ্ধ",
	db: "দ্ব",
	dv: "দ্ভ",
	dvr: "দ্ভ্র",
	dm: "দ্ম",
	dz: "দ্য",
	dr: "দ্র",
	drz: "দ্র্য",
	dhn: "ধ্ন",
	dhb: "ধ্ব",
	dhm: "ধ্ম",
	dhz: "ধ্য",
	dhr: "ধ্র",
	ntf: "ন্ট",
	ntfr: "ন্ট্র",
	ntff: "ন্ঠ",
	ntfh: "ন্ঠ",
	ndf: "ন্ড",
	ndfr: "ন্ড্র",
	nt: "ন্ত",
	ntb: "ন্ত্ব",
	ntr: "ন্ত্র",
	ntrz: "ন্ত্র্য",
	nth: "ন্থ",
	nthr: "ন্থ্র",
	nd: "ন্দ",
	ndb: "ন্দ্ব",
	ndz: "ন্দ্য",
	ndr: "ন্দ্র",
	ndh: "ন্ধ",
	ndhz: "ন্ধ্য",
	ndhr: "ন্ধ্র",
	nn: "ন্ন",
	nb: "ন্ব",
	nm: "ন্ম",
	nz: "ন্য",
	ns: "ন্স",
	ptf: "প্ট",
	pt: "প্ত",
	pn: "প্ন",
	pp: "প্প",
	pz: "প্য",
	pr: "প্র",
	pl: "প্ল",
	ps: "প্স",
	phr: "ফ্র",
	phl: "ফ্ল",
	bj: "ব্জ",
	bd: "ব্দ",
	bdh: "ব্ধ",
	bb: "ব্ব",
	bz: "ব্য",
	br: "ব্র",
	bl: "ব্ল",
	vb: "ভ্ব",
	vz: "ভ্য",
	vr: "ভ্র",
	vl: "ভ্ল",
	mn: "ম্ন",
	mp: "ম্প",
	mpr: "ম্প্র",
	mph: "ম্ফ",
	mb: "ম্ব",
	mbr: "ম্ব্র",
	mv: "ম্ভ",
	mvr: "ম্ভ্র",
	mm: "ম্ম",
	mz: "ম্য",
	mr: "ম্র",
	ml: "ম্ল",
	zz: "য্য",
	lk: "ল্ক",
	lkz: "ল্ক্য",
	lg: "ল্গ",
	ltf: "ল্ট",
	ldf: "ল্ড",
	lp: "ল্প",
	lph: "ল্ফ",
	lb: "ল্ব",
	lv: "ল্‌ভ",
	lm: "ল্ম",
	lz: "ল্য",
	ll: "ল্ল",
	shc: "শ্চ",
	shch: "শ্ছ",
	shn: "শ্ন",
	shb: "শ্ব",
	shm: "শ্ম",
	shz: "শ্য",
	shr: "শ্র",
	shl: "শ্ল",
	sfk: "ষ্ক",
	sfkr: "ষ্ক্র",
	sftf: "ষ্ট",
	sftfz: "ষ্ট্য",
	sftfr: "ষ্ট্র",
	sftff: "ষ্ঠ",
	sftfh: "ষ্ঠ",
	sftffz: "ষ্ঠ্য",
	sftfhz: "ষ্ঠ্য",
	sfnf: "ষ্ণ",
	sfn: "ষ্ণ",
	sfp: "ষ্প",
	sfpr: "ষ্প্র",
	sfph: "ষ্ফ",
	sfb: "ষ্ব",
	sfm: "ষ্ম",
	sfz: "ষ্য",
	sk: "স্ক",
	skr: "স্ক্র",
	skh: "স্খ",
	stf: "স্ট",
	stfr: "স্ট্র",
	st: "স্ত",
	stb: "স্ত্ব",
	stz: "স্ত্য",
	str: "স্ত্র",
	sth: "স্থ",
	sthz: "স্থ্য",
	sn: "স্ন",
	sp: "স্প",
	spr: "স্প্র",
	spl: "স্প্ল",
	sph: "স্ফ",
	sb: "স্ব",
	sm: "স্ম",
	sz: "স্য",
	sr: "স্র",
	sl: "স্ল",
	hn: "হ্ন",
	hnf: "হ্ণ",
	hb: "হ্ব",
	hm: "হ্ম",
	hz: "হ্য",
	hr: "হ্র",
	hl: "হ্ল",

	// oshomvob juktoborno
	ksh: "কশ",
	nsh: "নশ",
	psh: "পশ",
	ld: "লদ",
	gd: "গদ",
	ngkk: "ঙ্কক",
	ngks: "ঙ্কস",
	cn: "চন",
	cnf: "চণ",
	jn: "জন",
	jnf: "জণ",
	tft: "টত",
	dfd: "ডদ",
	nft: "ণত",
	nfd: "ণদ",
	lt: "লত",
	sft: "ষত",
	nfth: "ণথ",
	nfdh: "ণধ",
	sfth: "ষথ",
	ktff: "কঠ",
	ktfh: "কঠ",
	ptff: "পঠ",
	ptfh: "পঠ",
	ltff: "লঠ",
	ltfh: "লঠ",
	stff: "সঠ",
	stfh: "সঠ",
	dfdff: "ডঢ",
	dfdfh: "ডঢ",
	ndff: "নঢ",
	ndfh: "নঢ",
	ktfrf: "ক্টড়",
	ktfrff: "ক্টঢ়",
	kth: "কথ",
	ktrf: "ক্তড়",
	ktrff: "ক্তঢ়",
	krf: "কড়",
	krff: "কঢ়",
	khrf: "খড়",
	khrff: "খঢ়",
	gggh: "জ্ঞঘ",
	gdff: "গঢ",
	gdfh: "গঢ",
	gdhrf: "গ্ধড়",
	gdhrff: "গ্ধঢ়",
	grf: "গড়",
	grff: "গঢ়",
	ghrf: "ঘড়",
	ghrff: "ঘঢ়",
	ngkth: "ঙ্কথ",
	ngkrf: "ঙ্কড়",
	ngkrff: "ঙ্কঢ়",
	ngghrf: "ঙ্ঘড়",
	ngghrff: "ঙ্ঘঢ়",
	cchrf: "চ্ছড়",
	cchrff: "চ্ছঢ়",
	tfrf: "টড়",
	tfrff: "টঢ়",
	dfrf: "ডড়",
	dfrff: "ডঢ়",
	rfgh: "ড়ঘ",
	dffrf: "ঢড়",
	dfhrf: "ঢড়",
	dffrff: "ঢঢ়",
	dfhrff: "ঢঢ়",
	nfdfrf: "ণ্ডড়",
	nfdfrff: "ণ্ডঢ়",
	trf: "তড়",
	trff: "তঢ়",
	thrf: "থড়",
	thrff: "থঢ়",
	dvrf: "দ্ভড়",
	dvrff: "দ্ভঢ়",
	drf: "দড়",
	drff: "দঢ়",
	dhrf: "ধড়",
	dhrff: "ধঢ়",
	ntfrf: "ন্টড়",
	ntfrff: "ন্টঢ়",
	ndfrf: "ন্ডড়",
	ndfrff: "ন্ডঢ়",
	ntrf: "ন্তড়",
	ntrff: "ন্তঢ়",
	nthrf: "ন্থড়",
	nthrff: "ন্থঢ়",
	ndrf: "ন্দড়",
	ndrff: "ন্দঢ়",
	ndhrf: "ন্ধড়",
	ndhrff: "ন্ধঢ়",
	pth: "পথ",
	pph: "পফ",
	prf: "পড়",
	prff: "পঢ়",
	phrf: "ফড়",
	phrff: "ফঢ়",
	bjh: "বঝ",
	brf: "বড়",
	brff: "বঢ়",
	vrf: "ভড়",
	vrff: "ভঢ়",
	mprf: "ম্পড়",
	mprff: "ম্পঢ়",
	mbrf: "ম্বড়",
	mbrff: "ম্বঢ়",
	mvrf: "ম্ভড়",
	mvrff: "ম্ভঢ়",
	mrf: "মড়",
	mrff: "মঢ়",
	lkh: "লখ",
	lgh: "লঘ",
	shrf: "শড়",
	shrff: "শঢ়",
	sfkh: "ষখ",
	sfkrf: "ষ্কড়",
	sfkrff: "ষ্কঢ়",
	sftfrf: "ষ্টড়",
	sftfrff: "ষ্টঢ়",
	sfprf: "ষ্পড়",
	sfprff: "ষ্পঢ়",
	skrf: "স্কড়",
	skrff: "স্কঢ়",
	stfrf: "স্টড়",
	stfrff: "স্টঢ়",
	strf: "স্তড়",
	strff: "স্তঢ়",
	sprf: "স্পড়",
	sprff: "স্পঢ়",
	srf: "সড়",
	srff: "সঢ়",
	hrf: "হড়",
	hrff: "হঢ়",
	ldh: "লধ",
	ngksh: "ঙ্কশ",
	tfth: "টথ",
	dfdh: "ডধ",
	lth: "লথ",
}

const REPH: Record<string, string> = {
	rr: "র্",
	r: "র",
}

const PHOLA: Record<string, string> = {
	r: "র",
	z: "য",
}

const KAR: Record<string, string> = {
	o: "",
	of: "অ",
	a: "া",
	af: "আ",
	i: "ি",
	if: "ই",
	ii: "ী",
	iif: "ঈ",
	u: "ু",
	uf: "উ",
	uu: "ূ",
	uuf: "ঊ",
	q: "ৃ",
	qf: "ঋ",
	e: "ে",
	ef: "এ",
	oi: "ৈ",
	oif: "ই",
	w: "ো",
	wf: "ও",
	ou: "ৌ",
	ouf: "উ",
	ae: "্যা",
	aef: "অ্যা",
	uff: "‌ু",
	uuff: "‌ূ",
	qff: "‌ৃ",
	we: "োয়ে",
	wef: "ওয়ে",
	waf: "ওয়া",
	wa: "োয়া",
	wae: "ওয়্যা",
}

const ONGKO: Record<string, string> = {
	".1": ".১",
	".2": ".২",
	".3": ".৩",
	".4": ".৪",
	".5": ".৫",
	".6": ".৬",
	".7": ".৭",
	".8": ".৮",
	".9": ".৯",
	".0": ".০",
	"1": "১",
	"2": "২",
	"3": "৩",
	"4": "৪",
	"5": "৫",
	"6": "৬",
	"7": "৭",
	"8": "৮",
	"9": "৯",
	"0": "০",
}

const DIACRITIC: Record<string, string> = {
	qq: "্",
	xx: "্‌",
	"t/": "ৎ",
	x: "ঃ",
	ng: "ং",
	ngf: "ং",
	"/": "ঁ",
	"//": "/",
	"`": "‌",
	"``": "‍",
}

const BIRAM: Record<string, string> = {
	".": "।",
	"...": "...",
	"..": ".",
	$: "৳",
	$f: "₹",
	",,,": ",,",
	".f": "॥",
	".ff": "৺",
	"+f": "×",
	"-f": "÷",
}

const PRITHAYOK: Record<string, string> = {
	";": "",
	";;": ";",
}

const AE: Record<string, string> = {
	ae: "‍্যা",
}

// --------------------------
// State machine configuration
// --------------------------

const INIT = "init"
const SHOR_STATE = "shor-state"
const REPH_STATE = "reph-state"
const BYANJON_STATE = "byanjon-state"

const GROUP_MAPS = {
	shor: SHOR,
	byanjon: BYANJON,
	juktoborno: JUKTOBORNO,
	reph: REPH,
	phola: PHOLA,
	kar: KAR,
	ongko: ONGKO,
	diacritic: DIACRITIC,
	biram: BIRAM,
	prithayok: PRITHAYOK,
	ae: AE,
}

// Group order per state (priority used when same-length matches)
const STATE_GROUP_ORDER = {
	[INIT]: [
		"diacritic",
		"shor",
		"prithayok",
		"ongko",
		"biram",
		"reph",
		"juktoborno",
		"byanjon",
	],
	[SHOR_STATE]: [
		"diacritic",
		"shor",
		"biram",
		"prithayok",
		"ongko",
		"reph",
		"juktoborno",
		"byanjon",
	],
	[REPH_STATE]: ["prithayok", "ae", "juktoborno", "byanjon", "kar"],
	[BYANJON_STATE]: [
		"diacritic",
		"prithayok",
		"ongko",
		"biram",
		"kar",
		"juktoborno",
		"phola",
		"byanjon",
	],
} as const

// Precompute max key length per group for greedy matching
const MAXLEN_PER_GROUP = Object.fromEntries(
	Object.entries(GROUP_MAPS).map(([g, m]) => [
		g,
		Math.max(...Object.keys(m).map((k) => k.length), 0),
	]),
)

function _find_longest(
	state: keyof typeof STATE_GROUP_ORDER,
	text: string,
	i: number,
): [keyof typeof GROUP_MAPS | "", string, string] {
	// """Return (group, key, value) for the longest match allowed in current state. If none, return ("", "", "")."""
	const allowed = STATE_GROUP_ORDER[state]
	// Determine the max lookahead we need
	let maxlen = 0
	for (const g of allowed) maxlen = Math.max(maxlen, MAXLEN_PER_GROUP[g])
	const end = Math.min(text.length, i + maxlen)
	// const best_group = ""
	// const best_key = ""
	// const best_val = ""
	// const best_len = 0

	// Try lengths from longest to shortest to implement greedy matching
	for (let L = end - i; L > 0; L--) {
		const chunk = text.substring(i, i + L)
		// Check groups by priority
		for (const g of allowed) {
			const m = GROUP_MAPS[g]
			if (chunk in m) {
				// First match at this length wins due to priority order
				return [g, chunk, m[chunk]]
			}
		}
	}
	return ["", "", ""]
}

function _apply_transition(
	state: keyof typeof STATE_GROUP_ORDER,
	group: keyof typeof GROUP_MAPS,
) {
	// """Return the next state after consuming a token of 'group' in 'state'."""
	if (state === INIT) {
		if (group === "diacritic") return SHOR_STATE
		if (group === "shor") return SHOR_STATE
		if (["prithayok"].includes(group)) return INIT
		if (["ongko", "biram"].includes(group)) return INIT
		if (group === "reph") return REPH_STATE
		if (["juktoborno", "byanjon"].includes(group)) return BYANJON_STATE
		return state
	}

	if (state === SHOR_STATE) {
		if (["diacritic", "shor"].includes(group)) return SHOR_STATE
		if (["biram", "prithayok", "ongko"].includes(group)) return INIT
		if (group === "reph") return REPH_STATE
		if (["juktoborno", "byanjon"].includes(group)) return BYANJON_STATE
		return state
	}

	if (state === REPH_STATE) {
		if (group === "prithayok") return INIT
		if (group === "ae") return SHOR_STATE
		if (["juktoborno", "byanjon"].includes(group)) return BYANJON_STATE
		if (group === "kar") return SHOR_STATE
		return state
	}

	if (state === BYANJON_STATE) {
		if (["diacritic", "kar"].includes(group)) return SHOR_STATE
		if (["prithayok", "ongko", "biram"].includes(group)) return INIT
		// juktoborno, phola, byanjon keep BYANJON_STATE
		return BYANJON_STATE
	}

	return state
}

export function convert(text: string): string {
	// Convert an ASCII input string to Bengali output using the bn-khipro state machine.
	let i = 0
	const n = text.length
	let state: keyof typeof STATE_GROUP_ORDER = INIT
	const out: string[] = []

	while (i < n) {
		const [group, key, val] = _find_longest(state, text, i)
		if (!group) {
			// No mapping: pass through this char and reset to INIT
			out.push(text[i])
			i += 1
			state = INIT
			continue
		}

		// Special handling: PHOLA in BYANJON_STATE inserts virama before mapped char
		if (state === BYANJON_STATE && group === "phola") {
			out.push("্")
			out.push(val)
		} else {
			out.push(val)
		}

		i += key.length
		state = _apply_transition(state, group)
	}

	console.log(text, out.join(""))
	return out.join("")
}
