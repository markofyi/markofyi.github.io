// --- JOAAT-style hash implementation with modes ---

function joaat(input, mode = "default") {
    if (typeof input !== "string") input = String(input);

    let s = input;

    // Pre-processing based on mode
    switch (mode) {
        case "default":
            // standard: lowercase entire string
            s = s.toLowerCase();
            break;
        case "case-sensitive":
            // do not change case at all
            // use exactly what the user typed
            break;
        case "awc":
            // AWC: typically lowercased name, then post-mask applied
            s = s.toLowerCase();
            break;
        default:
            s = s.toLowerCase();
    }

    let hash = 0 >>> 0; // ensure unsigned 32-bit

    for (let i = 0; i < s.length; i++) {
        hash = (hash + s.charCodeAt(i)) >>> 0;
        hash = (hash + ((hash << 10) >>> 0)) >>> 0;
        hash = (hash ^ (hash >>> 6)) >>> 0;
    }

    hash = (hash + ((hash << 3) >>> 0)) >>> 0;
    hash = (hash ^ (hash >>> 11)) >>> 0;
    hash = (hash + ((hash << 15) >>> 0)) >>> 0;

    // Base 32-bit result
    let uint32 = hash >>> 0;

    // AWC variant: mask to 29 bits
    if (mode === "awc") {
        uint32 = uint32 & 0x1fffffff;
    }

    const hex = "0x" + uint32.toString(16).toUpperCase().padStart(8, "0");
    const int32 = uint32 | 0; // signed 32-bit

    return { uint32, hex, int32 };
}

// --- UI wiring ---

document.addEventListener("DOMContentLoaded", () => {
    const inputText = document.getElementById("inputText");
    const outputText = document.getElementById("outputText");
    const algorithmSelect = document.getElementById("algorithmSelect");
    const outputFormatSelect = document.getElementById("outputFormatSelect");
    const autoGenerateCheckbox = document.getElementById("autoGenerate");
    const generateBtn = document.getElementById("generateBtn");

    function formatHashResult(line, result, format) {
        if (!line.trim()) return "";

        const { hex, uint32, int32 } = result;

        switch (format) {
            case "hex":
                return hex;
            case "uint":
                return String(uint32);
            case "int":
                return String(int32);
            case "all":
            default:
                // labeled output so it's clear which is which
                return `Hex: ${hex}  |  Unsigned: ${uint32}  |  Signed: ${int32}`;
        }
    }

    function generate() {
        const algorithmMode = algorithmSelect.value;
        const format = outputFormatSelect.value;

        const lines = inputText.value.split(/\r?\n/);
        const outLines = lines.map((line) => {
            if (!line.trim()) return "";
            const result = joaat(line, algorithmMode);
            return formatHashResult(line, result, format);
        });

        outputText.value = outLines.join("\n");
    }

    function maybeAutoGenerate() {
        if (autoGenerateCheckbox.checked) {
            generate();
        }
    }

    // Event bindings
    inputText.addEventListener("input", maybeAutoGenerate);
    algorithmSelect.addEventListener("change", maybeAutoGenerate);
    outputFormatSelect.addEventListener("change", maybeAutoGenerate);

    autoGenerateCheckbox.addEventListener("change", () => {
        if (autoGenerateCheckbox.checked) {
            generate();
        }
    });

    generateBtn.addEventListener("click", () => {
        generate();
    });

    // Initial state
    outputText.value = "";
});
