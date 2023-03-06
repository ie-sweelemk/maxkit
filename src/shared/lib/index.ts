export const b64toBlob = (
  b64Data: string,
  contentType: string,
  sliceSize?: number
) => {
  // eslint-disable-next-line no-param-reassign
  contentType = contentType || "";
  // eslint-disable-next-line no-param-reassign
  sliceSize = sliceSize || 512;

  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);

    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, {
    type: contentType,
  });
  return blob;
};

export const removeEmptyValues = (obj: { [x: string]: any }) => {
  const keys = Object.keys(obj);
  for (var i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const value = obj[key];
    if (value === null || value === undefined || value === "") {
      delete obj[key];
    }
  }

  return obj;
};
