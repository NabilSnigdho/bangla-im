let wasm
export function __wbg_set_wasm(val) {
	wasm = val
}

const lTextDecoder =
	typeof TextDecoder === "undefined"
		? (0, module.require)("util").TextDecoder
		: TextDecoder

const cachedTextDecoder = new lTextDecoder("utf-8", {
	ignoreBOM: true,
	fatal: true,
})

cachedTextDecoder.decode()

let cachedUint8ArrayMemory0 = null

function getUint8ArrayMemory0() {
	if (
		cachedUint8ArrayMemory0 === null ||
		cachedUint8ArrayMemory0.byteLength === 0
	) {
		cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer)
	}
	return cachedUint8ArrayMemory0
}

function getStringFromWasm0(ptr, len) {
	ptr = ptr >>> 0
	return cachedTextDecoder.decode(
		getUint8ArrayMemory0().subarray(ptr, ptr + len),
	)
}

let WASM_VECTOR_LEN = 0

const lTextEncoder =
	typeof TextEncoder === "undefined"
		? (0, module.require)("util").TextEncoder
		: TextEncoder

const cachedTextEncoder = new lTextEncoder("utf-8")

const encodeString =
	typeof cachedTextEncoder.encodeInto === "function"
		? (arg, view) => cachedTextEncoder.encodeInto(arg, view)
		: (arg, view) => {
				const buf = cachedTextEncoder.encode(arg)
				view.set(buf)
				return {
					read: arg.length,
					written: buf.length,
				}
			}

function passStringToWasm0(arg, malloc, realloc) {
	if (realloc === undefined) {
		const buf = cachedTextEncoder.encode(arg)
		const ptr = malloc(buf.length, 1) >>> 0
		getUint8ArrayMemory0()
			.subarray(ptr, ptr + buf.length)
			.set(buf)
		WASM_VECTOR_LEN = buf.length
		return ptr
	}

	let len = arg.length
	let ptr = malloc(len, 1) >>> 0

	const mem = getUint8ArrayMemory0()

	let offset = 0

	for (; offset < len; offset++) {
		const code = arg.charCodeAt(offset)
		if (code > 0x7f) break
		mem[ptr + offset] = code
	}

	if (offset !== len) {
		if (offset !== 0) {
			arg = arg.slice(offset)
		}
		ptr = realloc(ptr, len, (len = offset + arg.length * 3), 1) >>> 0
		const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len)
		const ret = encodeString(arg, view)

		offset += ret.written
		ptr = realloc(ptr, len, offset, 1) >>> 0
	}

	WASM_VECTOR_LEN = offset
	return ptr
}

let cachedDataViewMemory0 = null

function getDataViewMemory0() {
	if (
		cachedDataViewMemory0 === null ||
		cachedDataViewMemory0.buffer.detached === true ||
		(cachedDataViewMemory0.buffer.detached === undefined &&
			cachedDataViewMemory0.buffer !== wasm.memory.buffer)
	) {
		cachedDataViewMemory0 = new DataView(wasm.memory.buffer)
	}
	return cachedDataViewMemory0
}

function getArrayJsValueFromWasm0(ptr, len) {
	ptr = ptr >>> 0
	const mem = getDataViewMemory0()
	const result = []
	for (let i = ptr; i < ptr + 4 * len; i += 4) {
		result.push(wasm.__wbindgen_export_0.get(mem.getUint32(i, true)))
	}
	wasm.__externref_drop_slice(ptr, len)
	return result
}
/**
 * @param {string} word
 * @returns {any[]}
 */
export function suggest(word) {
	const ptr0 = passStringToWasm0(
		word,
		wasm.__wbindgen_malloc,
		wasm.__wbindgen_realloc,
	)
	const len0 = WASM_VECTOR_LEN
	const ret = wasm.suggest(ptr0, len0)
	const v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice()
	wasm.__wbindgen_free(ret[0], ret[1] * 4, 4)
	return v2
}

export function __wbindgen_init_externref_table() {
	const table = wasm.__wbindgen_export_0
	const offset = table.grow(4)
	table.set(0, undefined)
	table.set(offset + 0, undefined)
	table.set(offset + 1, null)
	table.set(offset + 2, true)
	table.set(offset + 3, false)
}

export function __wbindgen_string_new(arg0, arg1) {
	const ret = getStringFromWasm0(arg0, arg1)
	return ret
}
