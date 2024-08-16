document.addEventListener("DOMContentLoaded", () => {
	const bgElements = document.querySelectorAll("[class*='bg-']");
	bgElements.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("bg-")) {
				const colorCode = cls.substring(3);
				if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
					element.style.backgroundColor = `#${colorCode}`;
				}
			}
		});
	});
	const mnElements = document.querySelectorAll("[class*='fr-']");
	mnElements.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("fr-")) {
				const colorCode = cls.substring(3);
				if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
					element.style.color = `#${colorCode}`;
				}
			}
		});
	}); 
	// FINALLY FUCKING WORKS!!!!!!! 15/08/2024
	const elementAlignment = document.querySelectorAll("[class^='align-']");
	elementAlignment.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("align-")) {
				const alignment = cls.substring(5);
				if (alignment === "center" || alignment === "left" || alignment === "right") {
					element.style.textAlign = alignment;
				}
			}
		});
	});
	const elementPadding = document.querySelectorAll("[class^='pad-']")
	elementPadding.forEach(element => {
		const classes = element.className.split(" ");
		classes.forEach(cls => {
			if (cls.startsWith("pad-")) {
				const padding = cls.substring(5);
				if (/^\d+px?$/.test(paddingValue)) {
                // Apply padding to all sides
					element.style.padding = paddingValue;
				}
			}
		});
	});
	// figure out how to have this work for all borders
	const borderElements = document.querySelectorAll("[data-border]");
	borderElements.forEach(element => {
    	const borderData = element.getAttribute('data-border');
		if (borderData) {
			const parts = borderData.split(' ');
			parts.forEach(part => {
				if (part.startsWith("color-")) {
					const colorCode = part.substring(6);
					if (/^[0-9A-Fa-f]{6}$/.test(colorCode)) {
						element.style.color = `#${colorCode}`;
					}
				}
				if (part.startsWith("radius-")) {
					const borderRadius = part.substring(7);
					element.style.borderRadius = borderRadius;
				}
				if (part.startsWith("size-")) {
					const borderSize = part.substring(7);
					element.style.borderWidth = borderSize;
				}
			});
		}
	});
});