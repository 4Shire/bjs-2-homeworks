function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.find((item) => item.hash == hash);
    if (objectInCache) {
      console.log("Из кэша: " + objectInCache.value);
      return "Из кэша: " + objectInCache.value;
    }

    let result = func(...args);
    cache.push({
      'hash': hash,
      'value': result
    });
    if (cache.length > 5) {
      cache.shift();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}


function debounceDecoratorNew(func, ms) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), ms);
    }
  }
  return wrapper;
}

function debounceDecorator2(func) {
  let timer = null;

  function wrapper(...args) {
    if (timer === null) {
      func(...args);
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), ms);
    }
    wrapper.count++;
  }
  wrapper.count = 0;
  return wrapper;
}