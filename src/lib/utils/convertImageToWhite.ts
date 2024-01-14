export async function convertImageToWhite(
	imageUrl: string,
	targetWidth: number,
	targetHeight?: number
): Promise<string> {
	return new Promise<string>((resolve, reject) => {
		const img = new Image();

		img.crossOrigin = 'anonymous';

		img.src = imageUrl;

		img.onload = () => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			// Resize the canvas to the desired dimensions
			canvas.width = targetWidth;
			canvas.height = targetHeight ?? targetWidth;

			if (ctx) {
				// Draw the image onto the resized canvas
				ctx.drawImage(img, 0, 0, targetWidth, targetHeight ?? targetWidth);

				const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
				const data = imageData.data;

				for (let i = 0; i < data.length; i += 4) {
					if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0) {
						data[i] = 255; // Red channel
						data[i + 1] = 255; // Green channel
						data[i + 2] = 255; // Blue channel
					}
				}

				ctx.putImageData(imageData, 0, 0);

				resolve(canvas.toDataURL());
			} else {
				reject('Something went wrong, could not load image.');
			}
		};

		img.onerror = () => {
			reject(new Error('Error loading image'));
		};
	});
}
