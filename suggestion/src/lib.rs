use dhoni::convert_to_phonetic;
use upodesh::suggest::Suggest;
use wasm_bindgen::prelude::*;

// Expose to JS
#[wasm_bindgen]
pub fn suggest(word: &str) -> Vec<JsValue> {
    let banglish = convert_to_phonetic(word);
    let dict = Suggest::new();
    let mut items = dict.suggest(&banglish);
    items.sort();
    
    // Convert Vec<String> to Vec<JsValue> for JS
    items.into_iter().map(JsValue::from).collect()
}
