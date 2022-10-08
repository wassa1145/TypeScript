interface SearchFormData {
  dateFrom: string,
  dateTo: string,
  maxPrice: string,
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Place {}

export function formHandler(): void {
  const searchFormData: SearchFormData =  {
    dateFrom: (document.querySelector('#check-in-date') as HTMLInputElement).value,
    dateTo: (document.querySelector('#check-out-date') as HTMLInputElement).value,
    maxPrice: (document.querySelector('#max-price') as HTMLInputElement).value,
  }
  search(searchFormData, showPlase);
}

function showPlase(): void {
  setTimeout(() => {
    const result = Math.random() < 0.5 ? false : true;
    if (!result) throw new Error('Ошибка!');
    else console.log('[]');
  }, 1000);
}

function search(data: SearchFormData, callback: (error?: Error, place?: Place[]) => void): void {
  console.log(data);
  try {
    callback();
  } catch (e) {
    console.log(e);
  }
}
