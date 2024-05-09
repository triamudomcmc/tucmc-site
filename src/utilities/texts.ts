export const isNumeric = (text: string): boolean => {
  return !isNaN(parseFloat(text))
}

const correction = {
  "์ุ": "ุ์",
  "ุ่": "ุ่",
  "ุ้": "ุ้",
  "ุ๊": "ุ๊",
  "ุ๋": "ุ๋",
  "็ุ": "ุ็",
  "์ิ": "ิ์",
  "่ิ": "ิ่",
  "้ิ": "ิ้",
  "๊ิ": "ิ๊",
  "๋ิ": "ิ๋",
  "็ิ": "ิ็",
  "์ื": "ื์",
  "่ื": "ื่",
  "้ื": "ื้",
  "๊ื": "ื๊",
  "๋ื": "ื๋",
  "็ื": "ื็",
  "์ี": "ี์",
  "่ี": "ี่",
  "้ี": "ี้",
  "๊ี": "ี๊",
  "๋ี": "ี๋",
  "็ี": "ี็",
  "์ึ": "ึ์",
  "่ึ": "ึ่",
  "้ึ": "ึ้",
  "๊ึ": "ึ๊",
  "๋ึ": "ึ๋",
  "็ึ": "ึ็",
  "ิุ์": "ุิ์",
  "์ุิ": "ุิ์",
  "์ิุ": "ุิ์",
  "ิ์ุ": "ุิ์",
  "ุ์ิ": "ุิ์",
  เเ: "แ",
  "ํา": "ำ",
}

export const fixGrammar = (text: string) => {
  let fixed = text
  Object.keys(correction).forEach((item) => {
    // @ts-ignore
    fixed = fixed.replace(new RegExp(item, "g"), correction[item])
  })

  return fixed.replace(/\u200B/g, "").trim()
}
