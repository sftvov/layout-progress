const body = document.querySelector('body');
const wrapper = document.querySelector('.wrapper');
const page = document.querySelector('.page');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

// ----------------------------------------------------------------------

const md1 = getComputedStyle(document.documentElement).getPropertyValue('--md1');
// let md1Query = window.matchMedia(`(min-width: ${md1}px)`);
const md2 = getComputedStyle(document.documentElement).getPropertyValue('--md2');
// let md2Query = window.matchMedia(`(min-width: ${md2}px)`);
const md3 = getComputedStyle(document.documentElement).getPropertyValue('--md3');
// let md3Query = window.matchMedia(`(min-width: ${md3}px)`);
const md4 = getComputedStyle(document.documentElement).getPropertyValue('--md4');
// let md4Query = window.matchMedia(`(min-width: ${md4}px)`);
const md5 = getComputedStyle(document.documentElement).getPropertyValue('--md5');
// let md5Query = window.matchMedia(`(min-width: ${md5}px)`);

// ----------------------------------------------------------------------


//include('../../web-template/src/libs/swiper-bundle-11-2-1.js');
//include('../../web-template/src/functions/sendmail.js');
//include('../../web-template/src/functions/isMobile.js');
//include('../../web-template/src/functions/webp.js');
//SlideToggle
let _slideUp = (target, duration = 500, targetHeight = 0, hiddenParam = true) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    if (!targetHeight) {
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
    } else {
      target.style.height = targetHeight + 'px';
    }
    window.setTimeout(() => {
      if (!targetHeight) {
        if (hiddenParam) {
          target.hidden = true;
        }
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
      }
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
let _slideDown = (target, duration = 500, targetStart = 0, hiddenParam = true) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (hiddenParam && target.hidden) {
      target.hidden = false;
    }
    let height = target.offsetHeight;
    let targetHeight;
    if (!targetStart) {
      target.style.overflow = 'hidden';
      target.style.height = 0;
      target.style.paddingTop = 0;
      target.style.paddingBottom = 0;
      target.style.marginTop = 0;
      target.style.marginBottom = 0;
    } else {
      target.style.removeProperty('height');
      targetHeight = Math.max(target.offsetHeight, targetStart);
      target.style.height = height + 'px';
      target.style.minHeight = targetStart + 'px';
    }

    target.offsetHeight;
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';

    if (!targetStart) {
      target.style.height = height + 'px';
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
    } else {
      target.style.height = targetHeight + 'px';
    }
    window.setTimeout(() => {
      target.style.removeProperty('height');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};
let _slideToggle = (target, duration = 500, height = 0) => {
  if (target.offsetHeight <= height) {
    return _slideDown(target, duration, height);
  } else {
    return _slideUp(target, duration, height);
  }
};
//========================================

let _slideSide = (target, duration = 500, hiddenParam = true) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    if (hiddenParam && target.hidden) {
      target.hidden = false;
    }
    let width = target.offsetWidth;
    target.style.overflow = 'hidden';
    target.style.width = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetWidth;
    target.style.transitionProperty = 'width, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.width = width + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
      target.style.removeProperty('width');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

let _slideSideBack = (target, duration = 500, hiddenParam = true) => {
  if (!target.classList.contains('_slide')) {
    target.classList.add('_slide');
    target.style.transitionProperty = 'width, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.width = target.offsetWidth + 'px';
    target.offsetWidth;
    target.style.overflow = 'hidden';
    target.style.width = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      if (hiddenParam) {
        target.hidden = true;
      }
      target.style.removeProperty('width');
      target.style.removeProperty('padding-top');
      target.style.removeProperty('padding-bottom');
      target.style.removeProperty('margin-top');
      target.style.removeProperty('margin-bottom');
      target.style.removeProperty('overflow');
      target.style.removeProperty('transition-duration');
      target.style.removeProperty('transition-property');
      target.classList.remove('_slide');
    }, duration);
  }
};

// FadeToggle
let _fadeOut = (target, duration = 500, hiddenParam = true) => {
  if (!target.classList.contains('_fade')) {
    target.classList.add('_fade');
    target.style.transitionProperty = 'opacity';
    target.style.transitionDuration = duration + 'ms';
    target.style.opacity = 1;
    target.offsetHeight; // force reflow
    
    window.setTimeout(() => {
      target.style.opacity = 0;
      
      window.setTimeout(() => {
        if (hiddenParam) {
          target.hidden = true;
        }
        target.style.removeProperty('opacity');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_fade');
      }, duration);
    }, 10); // small timeout to ensure transition is applied
  }
};

let _fadeIn = (target, duration = 500, hiddenParam = true) => {
  if (!target.classList.contains('_fade')) {
    target.classList.add('_fade');
    if (hiddenParam && target.hidden) {
      target.hidden = false;
    }
    target.style.transitionProperty = 'opacity';
    target.style.transitionDuration = duration + 'ms';
    target.style.opacity = 0;
    target.offsetHeight; // force reflow
    
    window.setTimeout(() => {
      target.style.opacity = 1;
      
      window.setTimeout(() => {
        target.style.removeProperty('opacity');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        target.classList.remove('_fade');
      }, duration);
    }, 10); // small timeout to ensure transition is applied
  }
};

let _fadeToggle = (target, duration = 500) => {
  if (target.hidden || parseFloat(target.style.opacity || 0) <= 0) {
    return _fadeIn(target, duration);
  } else {
    return _fadeOut(target, duration);
  }
};;
/**
 * Activator v3.0.2
 * Author: WEB_K
 * Date: 2025-03-19
 * Description: добавил в эффекты _fadein и _fadeOut
 */

class Activator {
  constructor(buttonSelector, params, update) {
    this.buttonSelector = buttonSelector;
    this.params = params;
    this.params = { deactivate: true, ...params };
    this.update = update;
    this.updateTimeout = null;
    this.activators = [...document.querySelectorAll(buttonSelector)];
    this.currentParams = this.getParamsForCurrentBreakpoint(params);
    this.boundRemoveOnRemovingClick = this.removeOnRemovingClick.bind(this);
    this.boundRemoveOnOutClick = this.removeOnOutClick.bind(this);
    this.boundRemoveOnEscape = this.removeOnEscape.bind(this);
    this.init();
  }

  // 🔹 Функция выбора параметров с учётом breakpoints
  getParamsForCurrentBreakpoint() {
    const screenWidth = window.innerWidth;
    if (!this.params.breakpoints) return this.params;

    return Object.entries(this.params.breakpoints)
      .map(([bp, values]) => ({ bp: Number(bp), values }))
      .filter(({ bp }) => screenWidth >= bp)
      .sort((a, b) => a.bp - b.bp)
      .reduce(
        (acc, { values }) => {
          Object.keys(values).forEach((key) => {
            if (values[key] === null) {
              delete acc[key];
            } else {
              acc[key] = values[key];
            }
          });
          return acc;
        },
        { ...this.params }
      );
  }

  // 🔹 Инициализация
  init() {
    this.attachEventListeners();

    if (this.update) {
      this.setupResizeListener();
    }
  }

  // 🔹 Добавление активного класса убираемому элементу
  addRemoved(addObj) {
    if (!addObj.classList.contains('_active')) {
      addObj.classList.add('_active');
      if (this.currentParams.effects) {
        if (this.currentParams.effects === 'U') _slideDown(addObj, this.currentParams.effectDuration, 0, false);
        if (this.currentParams.effects === 'S') _slideSide(addObj, this.currentParams.effectDuration, false);
        if (this.currentParams.effects === 'F') _fadeIn(addObj, this.currentParams.effectDuration, false);
      }
    }
  }

  // 🔹 Удаление активного класса убираемого элемента
  removeRemoved(removeObj) {
    if (!removeObj) return;

    if (this.currentParams.effects && removeObj.classList.contains('_active')) {
      if (this.currentParams.effects === 'U') _slideUp(removeObj, this.currentParams.effectDuration, 0, false);
      if (this.currentParams.effects === 'S') _slideSideBack(removeObj, this.currentParams.effectDuration, false);
      if (this.currentParams.effects === 'F') _fadeOut(removeObj, this.currentParams.effectDuration, false);

      setTimeout(() => {
        removeObj.classList.remove('_active');
      }, this.currentParams.effectDuration);
    } else {
      removeObj.classList.remove('_active');
    }

    if (this.currentParams.bodyLock === true) {
      body_lock_remove(this.currentParams.effectDuration);
    }
  }

  // 🔹 Активация элемента
  addActive(btn, index, btnContainer = document) {
    if (typeof this.currentParams.beforeActiveFunction === 'function') {
      this.currentParams.beforeActiveFunction(btn, index, btnContainer, this.currentParams);
    }

    if (Array.isArray(this.currentParams.removed)) {
      this.currentParams.removed.forEach((selector) => {
        const addObj = document.querySelector(selector);
        if (addObj) this.addRemoved(addObj);
      });
    }

    if (Array.isArray(this.currentParams.removedOwn)) {
      this.currentParams.removedOwn.forEach((selector) => {
        const addObjs = btnContainer.querySelectorAll(selector);
        if (addObjs[index]) this.addRemoved(addObjs[index]);
      });
    }

    if (this.currentParams.bodyLock) body_lock_add();

    if (Array.isArray(this.currentParams.inert)) {
      this.currentParams.inert.forEach((el) => el.setAttribute('inert', ''));
    }

    if (this.currentParams.focus) {
      this.currentParams.focus.focus();
    }
    
    btn.classList.add('_active');
    if (typeof this.currentParams.activeFunсtion === 'function') {
      this.currentParams.activeFunсtion(btn, index, this.currentParams);
    }
  }

  // 🔹 Деактивация элемента
  removeActive(btn, index, btnContainer = document) {
    btn.classList.remove('_active');

    if (Array.isArray(this.currentParams.removed)) {
      let check = 1;
      this.activators.forEach((btn) => {
        if (btn.classList.contains('_active')) check = 0;
      });
      if (check) {
        this.currentParams.removed.map((selector) => document.querySelector(selector)).forEach(this.removeRemoved.bind(this));
      }
    }

    if (Array.isArray(this.currentParams.removedOwn)) {
      this.currentParams.removedOwn
        .map((selector) => btnContainer.querySelectorAll(selector))
        .forEach((removeObjs) => {
          if (index === undefined) {
            removeObjs.forEach(this.removeRemoved.bind(this));
          } else {
            this.removeRemoved(removeObjs[index]);
          }
        });
    }
  }

  // 🔹 Деактивация всех элементов
  removeActiveAll(all = true, btnContainer = document) {
    btnContainer.querySelectorAll(this.buttonSelector).forEach((btn) => btn.classList.remove('_active'));

    if (all && this.currentParams.removed) {
      this.currentParams.removed.map((selector) => document.querySelector(selector)).forEach(this.removeRemoved.bind(this));
    }

    if (this.currentParams.removedOwn) {
      this.currentParams.removedOwn.flatMap((selector) => Array.from(btnContainer.querySelectorAll(selector))).forEach(this.removeRemoved.bind(this));
    }
  }

  // 🔹 Обработчик клика на элементы из массива removing
  removeOnRemovingClick(e) {
    if (this.currentParams.removing) {
      const isRemovingClick = this.currentParams.removing.some(selector => 
        e.target.closest(selector)
      );
      if (isRemovingClick) {
        this.removeActiveAll();
      }
    }
  }
  // 🔹 Обработчик клика мимо действующих элементов
  removeOnOutClick(e) {
    const { 
      stops, 
      removed, 
      removedOwn, 
      buttonSelector 
    } = this.currentParams;
  
    // Проверка клика на стоп-элементах
    if (stops?.some(selector => e.target.closest(selector))) return;
  
    // Проверка клика на активаторах
    if (this.activators.some(btn => 
      btn === e.target || btn.contains(e.target)
    )) return;
  
    // Объединенная проверка removed/removedOwn
    const isInside = [...(removed || []), ...(removedOwn || [])]
      .some(selector => {
        const el = document.querySelector(selector);
        return el?.contains(e.target);
      });
  
    if (isInside) return;
  
    this.removeActiveAll();
  }
  // 🔹 Обработчик нажатия Escape
  removeOnEscape(e) {
    if (e.key === 'Escape') this.removeActiveAll();
  }  

  // 🔹 Поиск первого активного элемента
  findFirstActive(elements) {
    for (const el of elements) {
      if (el.classList.contains('_active')) {
        return el;
      }
    }
    return null;
  }
  
  // 🔹 Инициализация событий
  attachEventListeners() {
    if (typeof this.currentParams.beforeFunction === 'function' && !this.currentParams.off) {
      this.currentParams.beforeFunction();
    }

    if (Array.isArray(this.currentParams.activeElements) && Array.isArray(this.currentParams.removed) && !this.currentParams.off) {
      this.currentParams.removed.forEach((selector) => {
        const addObj = document.querySelector(selector);
        if (addObj) {
          addObj.classList.add('_active');
        }
      });
    }

    if (this.currentParams.limitContainer && !this.currentParams.off) {
      document.querySelectorAll(this.currentParams.limitContainer).forEach(this.updateContainerState.bind(this));
    } else {
      this.updateContainerState(document);
    }

    // Удаляем старые обработчики перед добавлением новых
    document.removeEventListener('click', this.boundRemoveOnRemovingClick);
    document.removeEventListener('click', this.boundRemoveOnOutClick);
    document.removeEventListener('keydown', this.boundRemoveOnEscape);

    if (this.currentParams.removing) {
      document.addEventListener('click', this.boundRemoveOnRemovingClick);
    }
    if (this.currentParams.clickOutClose) {
      document.addEventListener('click', this.boundRemoveOnOutClick);
    }
    if (this.currentParams.escClose) {
      document.addEventListener('keydown', this.boundRemoveOnEscape);
    }
  }

  // 🔹 Обработка контейнера
  updateContainerState(container) {
    
    if (Array.isArray(this.currentParams.activeElements) && Array.isArray(this.currentParams.removedOwn) && !this.currentParams.off) {
      this.currentParams.removedOwn.forEach((selector) => {
        container.querySelectorAll(selector).forEach((removeObj, index) => {
          removeObj.classList.toggle('_active', this.currentParams.activeElements.includes(index));
        });
      });
    }

    const containerActivators = container.querySelectorAll(this.buttonSelector);
    this.updateActivatorsState(containerActivators);

    if (this.currentParams.onlyOne && !this.currentParams.off) {
      const firstActive = this.findFirstActive(containerActivators);
      containerActivators.forEach((btn) => {
        if (btn !== firstActive) {
          btn.classList.remove('_active');
        }
      });

      if (Array.isArray(this.currentParams.removedOwn)) {
        this.currentParams.removedOwn.forEach((selector) => {
          const elements = container.querySelectorAll(selector);
          const firstActiveRemoved = this.findFirstActive(elements);
          elements.forEach((el) => {
            if (el !== firstActiveRemoved) {
              el.classList.remove('_active');
            }
          });
        });
      }

      if (!this.currentParams.deactivate && !firstActive) {
        if (containerActivators.length > 0) {
          containerActivators[0].classList.add('_active');
        }

        if (Array.isArray(this.currentParams.removedOwn)) {
          this.currentParams.removedOwn.forEach((selector) => {
            const elements = container.querySelectorAll(selector);
            if (elements.length > 0) {
              elements[0].classList.add('_active');
            }
          });
        }

        if (Array.isArray(this.currentParams.removed)) {
          this.currentParams.removed.forEach((selector) => {
            const element = document.querySelector(selector);
            if (element) {
              element.classList.add('_active');
            }
          });
        }
      }
    }
  }

  // 🔹 Обработка активаторов
  updateActivatorsState(activators) {
    activators.forEach((btn, index) => {
      // Удаляем старый обработчик
      btn.removeEventListener('click', this.handleClick);

      // Если активаторы не отключены, добавляем новый обработчик
      if (!this.currentParams.off) {
        btn.addEventListener('click', (e) => {
          this.handleClick(btn, index, e); // Передаём btn, index и событие e
        });

        // Устанавливаем класс _active, если элемент в списке активных
        if (Array.isArray(this.currentParams.activeElements)) {
          btn.classList.toggle('_active', this.currentParams.activeElements.includes(index));
        }
      }
    });
  }

  // 🔹 Обработчик клика
  handleClick(btn, index, e) { // Добавляем параметр события `e`
    // Проверка на stops
    if (
      this.currentParams.stops?.some(selector => 
        e.target.closest(selector) // Проверяем, был ли клик на stops или внутри него
      )
    ) {
      return; // Если клик внутри stops, ничего не делаем
    }
  
    // Если элемент уже в состоянии "_change", ничего не делаем
    if (btn.classList.contains('_change')) return;
  
    const duration = this.currentParams.effectDuration || 0;
  
    let currentActivators = this.activators;
    let btnContainer;
  
    // Если указан limitContainer, ограничиваем область поиска активаторов
    if (this.currentParams.limitContainer) {
      btnContainer = btn.closest(this.currentParams.limitContainer);
      currentActivators = btnContainer.querySelectorAll(this.buttonSelector);
    }
  
    // Добавляем класс "_change" для всех активаторов
    currentActivators.forEach((el) => el.classList.add('_change'));
  
    // Если элемент уже активен, деактивируем его
    if (btn.classList.contains('_active')) {
      if (this.currentParams.deactivate !== false) this.removeActive(btn, index, btnContainer);
    } else {
      // Если только один элемент может быть активен, деактивируем все остальные
      if (this.currentParams.onlyOne) this.removeActiveAll(false, btnContainer);
      // Активируем текущий элемент
      this.addActive(btn, index, btnContainer);
    }
  
    // Убираем класс "_change" после завершения анимации
    setTimeout(() => {
      currentActivators.forEach((el) => el.classList.remove('_change'));
    }, duration);
  }

  updateActivator = () => {
    clearTimeout(this.updateTimeout);
    this.updateTimeout = setTimeout(() => {
      this.currentParams = this.getParamsForCurrentBreakpoint(this.params);
      this.attachEventListeners();
    }, 200);
  };

  setupResizeListener() {
    window.addEventListener("resize", this.updateActivator);
  }
};
/**
 * body_lock v1.1.0
 * Author: WEB_K
 * Date: 2025-04-11
 * Description: теперь прибавляет к текущему padding/margin
 */

// BodyLocks
let unlock = true;

// Получаем ширину скроллбара
function getScrollbarWidth() {
  return window.innerWidth - document.documentElement.clientWidth;
}

function calculateScrollbarWidth() {
  if(!document.body.classList.contains('_lock')) {
    const scrollbarWidth = getScrollbarWidth();
    document.documentElement.style.setProperty('--scrollbar', `${scrollbarWidth}px`);
  }
}

// Добавляем скроллбар к текущему значению через calc()
function addScrollbarToStyle(elements, property, scrollbarValue) {
  elements.forEach(el => {
    const computedValue = window.getComputedStyle(el)[property];
    el.style[property] = `calc(${computedValue} + ${scrollbarValue}px)`;
  });
}

// Просто удаляем инлайновый стиль
function removeInlineStyle(elements, property) {
  elements.forEach(el => {
    el.style[property] = '';
  });
}

function body_lock(delay = 0) {
  document.body.classList.contains('_lock') 
    ? body_lock_remove(delay) 
    : body_lock_add(delay);
}

function body_lock_remove(delay = 0) {
  if (!unlock) return;
  unlock = false;
  setTimeout(() => {
    removeInlineStyle(document.querySelectorAll('._lp'), 'paddingRight');
    removeInlineStyle(document.querySelectorAll('._lp'), 'paddingLeft');
    removeInlineStyle(document.querySelectorAll('._lpr'), 'paddingRight');
    removeInlineStyle(document.querySelectorAll('._lmr'), 'marginRight');
    removeInlineStyle([document.body], 'paddingRight');
    
    document.body.classList.remove('_lock');
    // setTimeout(() => { unlock = true; }, delay);
    unlock = true;
  }, delay);
}

function body_lock_add(delay = 0) {
  if (!unlock) return;
  unlock = false;

  const scrollbarWidth = getScrollbarWidth();
  const halfScrollbarWidth = scrollbarWidth / 2;

  // Обрабатываем элементы с двусторонним padding
  addScrollbarToStyle(document.querySelectorAll('._lp'), 'paddingRight', halfScrollbarWidth);
  addScrollbarToStyle(document.querySelectorAll('._lp'), 'paddingLeft', halfScrollbarWidth);

  // Обрабатываем элементы с padding-right
  addScrollbarToStyle(document.querySelectorAll('._lpr'), 'paddingRight', scrollbarWidth);

  // Обрабатываем элементы с margin-right
  addScrollbarToStyle(document.querySelectorAll('._lmr'), 'marginRight', scrollbarWidth);

  // Обрабатываем body
  const bodyPadding = window.getComputedStyle(document.body).paddingRight;
  document.body.style.paddingRight = `calc(${bodyPadding} + ${scrollbarWidth}px)`;
  document.body.classList.add('_lock');

  setTimeout(() => { unlock = true; }, delay);
};
//include('../../web-template/src/functions/dynamic_adapt.js');
//include('../../web-template/src/functions/desktopScroll.js');
//include('../../web-template/src/functions/calculateAge.js');
document.addEventListener('DOMContentLoaded', function () {
  const groups = document.querySelectorAll('[data-checkbox-group]');

  if (groups.length) {
    groups.forEach((group) => {
      const selectAll = group.querySelector('[data-checkbox-all]');
      const checkboxes = group.querySelectorAll('[data-checkbox-item]');
      const counter = group.querySelector('[data-checkbox-num]');

      // Инициализация
      const counterBehavior = counter?.getAttribute('data-checkbox-num') || 'auto-hide';

      if (selectAll) {
        selectAll.addEventListener('change', function () {
          checkboxes.forEach((checkbox) => {
            checkbox.checked = this.checked;
          });
          updateCounter();
        });
      }

      checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('change', function () {
          if (selectAll) {
            const allChecked = [...checkboxes].every((cb) => cb.checked);
            selectAll.checked = allChecked;
            if (!this.checked && selectAll.checked) {
              selectAll.checked = false;
            }
          }
          updateCounter();
        });
      });

      function updateCounter() {
        if (!counter) return;

        const checkedCount = [...checkboxes].filter((cb) => cb.checked).length;

        // Управление отображением в зависимости от поведения
        if (counterBehavior === 'auto-hide') {
          if (checkedCount > 0) {
            counter.textContent = checkedCount;
            counter.classList.remove('hidden');
          } else {
            counter.textContent = '';
            counter.classList.add('hidden');
          }
        } else {
          counter.textContent = checkedCount;
        }
      }

      updateCounter(); // Инициализация при загрузке
    });
  }
});
;
//include('../../web-template/src/js-elements/select.js');
//include('../../web-template/src/js-elements/quantity.js');
//include('../../web-template/src/js-elements/calendar.js');
//include('../../web-template/src/js-elements/search.js');
function updateIndicator(wrapperSelector = "._active-container", activeElementSelector = "._active-item._active", indicatorSelector = "._active-indicator") {
  document.querySelectorAll(wrapperSelector).forEach((wrapper) => {
    const activeElement = wrapper.querySelector(activeElementSelector);
    const indicator = wrapper.querySelector(indicatorSelector);
    if (!activeElement || !indicator) return; // Если нет активного элемента или индикатора, выходим

    const parent = activeElement.parentElement;
    
    // Записываем CSS-переменные
    indicator.style.setProperty("--indicator-left", `${activeElement.offsetLeft}px`);
    indicator.style.setProperty("--indicator-top", `${activeElement.offsetTop}px`);
    indicator.style.setProperty("--indicator-width", `${activeElement.offsetWidth}px`);
    indicator.style.setProperty("--indicator-height", `${activeElement.offsetHeight}px`);
  });
}
;
/**
 * Tabs v2.0.0
 * Author: WEB_K
 * Date: 2025-02-20
 * Description: переделан вызов функции updateIndicator
 */


document.querySelectorAll('._tabs').forEach(tab => {
	const tabs_titles = tab.querySelectorAll('._tabs-title');
	const tabs_blocks = tab.querySelectorAll('._tabs-block');
	const indicator = tab.querySelector('._tabs-indicator'); // Проверяем, есть ли индикатор

	tabs_titles.forEach((title, index) => {
			const dataTab = document.querySelector(title.dataset.tabLink);

			// Добавляем обработчик клика сразу на заголовок вкладки и её содержимое (если есть)
			[title, dataTab].forEach(element => {
					if (element) {
							element.addEventListener('click', () => {
									// Убираем активность у всех вкладок и блоков
									tabs_titles.forEach(t => t.classList.remove('_active'));
									tabs_blocks.forEach(b => b.classList.remove('_active'));

									// Добавляем активность выбранным элементам
									title.classList.add('_active');
									tabs_blocks[index]?.classList.add('_active'); // Проверяем, существует ли блок

									// Обновляем индикатор ТОЛЬКО если он есть
									if (indicator) updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
							});
					}
			});
	});
});

;
//include('../../web-template/src/js-elements/popups.js');
//include('../../web-template/src/js-elements/gallery.js');
//include('../../web-template/src/js-elements/scroll.js');
/**
 * Spollers v2.0.0
 * Author: fls, WEB_K
 * Date: 2025-04-14
 * Description: переделал чтобы можно было переинициализировать динамически добавленные споллеры
 */


//=================
/*
Для родителя слойлеров пишем атрибут data-spollers
Для заголовков слойлеров пишем атрибут data-spoller
Если нужно включать\выключать работу спойлеров на разных размерах экранов
пишем параметры ширины и типа брейкпоинта.
Например: 
data-spollers="992,max" - спойлеры будут работать только на экранах меньше или равно 992px
data-spollers="768,min" - спойлеры будут работать только на экранах больше или равно 768px

Если нужно что бы в блоке открывался болько один слойлер добавляем атрибут data-one-spoller
*/

class Spollers {
  constructor() {
    this.spollers = [];
    this.mediaQueries = new Map();
    this.init();
  }

  // Основная инициализация
  init() {
    this.destroy(); // Очищаем предыдущие инициализации
    this.spollers = Array.from(document.querySelectorAll('[data-spollers]'));
    this.processSpollers();
  }

  // Обработка всех спойлеров
  processSpollers() {
    // Разделяем обычные спойлеры и с медиа-запросами
    const { regularSpollers, mediaSpollers } = this.classifySpollers();

    // Инициализируем обычные спойлеры
    if (regularSpollers.length) {
      this.initSpollers(regularSpollers);
    }

    // Инициализируем спойлеры с медиа-запросами
    if (mediaSpollers.length) {
      this.initMediaSpollers(mediaSpollers);
    }
  }

  // Классификация спойлеров
  classifySpollers() {
    const regularSpollers = [];
    const mediaSpollers = [];

    this.spollers.forEach(spoller => {
      const params = spoller.dataset.spollers;
      if (!params || !params.includes(',')) {
        regularSpollers.push({ item: spoller });
      } else {
        const [value, type] = params.split(',').map(item => item.trim());
        mediaSpollers.push({ item: spoller, value, type });
      }
    });

    return { regularSpollers, mediaSpollers };
  }

  // Инициализация спойлеров с медиа-запросами
  initMediaSpollers(mediaSpollers) {
    // Группируем по уникальным медиа-запросам
    const mediaGroups = new Map();

    mediaSpollers.forEach(({ item, value, type }) => {
      const key = `${value},${type}`;
      if (!mediaGroups.has(key)) {
        mediaGroups.set(key, []);
      }
      mediaGroups.get(key).push(item);
    });

    // Создаем MediaQueryList для каждой группы
    mediaGroups.forEach((items, key) => {
      const [value, type] = key.split(',');
      const mediaQuery = `(${type}-width: ${value}px)`;
      const mql = window.matchMedia(mediaQuery);

      const handler = () => {
        if (mql.matches) {
          this.initSpollers(items.map(item => ({ item })));
        } else {
          this.deinitSpollers(items);
        }
      };

      // Сохраняем для последующего удаления
      this.mediaQueries.set(key, { mql, handler });
      mql.addListener(handler);
      handler(); // Инициализируем сразу
    });
  }

  // Инициализация конкретных спойлеров
  initSpollers(spollers) {
    spollers.forEach(({ item }) => {
      if (item.classList.contains('_spoller-init')) return;

      item.classList.add('_spoller-init');
      this.initSpollerItems(item);

      // Обработчик клика
      item.addEventListener('click', this.handleClick);
    });
  }

  // Деинициализация спойлеров
  deinitSpollers(spollers) {
    spollers.forEach(item => {
      if (!item.classList.contains('_spoller-init')) return;

      item.classList.remove('_spoller-init');
      this.deinitSpollerItems(item);
      item.removeEventListener('click', this.handleClick);
    });
  }

  // Инициализация элементов спойлера
  initSpollerItems(spollerBlock) {
    const items = spollerBlock.querySelectorAll('[data-spoller]');
    items.forEach(item => {
      item.removeAttribute('tabindex');
      if (!item.classList.contains('_active')) {
        item.nextElementSibling.hidden = true;
      }
    });
  }

  // Деинициализация элементов спойлера
  deinitSpollerItems(spollerBlock) {
    const items = spollerBlock.querySelectorAll('[data-spoller]');
    items.forEach(item => {
      item.setAttribute('tabindex', '-1');
      item.nextElementSibling.hidden = false;
      item.classList.remove('_active');
    });
  }

  // Обработчик клика
  handleClick = (e) => {
    const target = e.target.closest('[data-spoller]');
    if (!target) return;

    const spollerBlock = target.closest('[data-spollers]');
    if (!spollerBlock || !spollerBlock.classList.contains('_spoller-init')) return;

    e.preventDefault();

    const duration = spollerBlock.dataset.spollersDuration || 500;
    const oneSpoller = spollerBlock.hasAttribute('data-one-spoller');
    const height = spollerBlock.dataset.spollerHeight || 0;

    if (oneSpoller && !target.classList.contains('_active')) {
      this.closeAllInBlock(spollerBlock, duration, height);
    }

    target.classList.toggle('_active');
    _slideToggle(target.nextElementSibling, duration, height);
  }

  // Закрыть все спойлеры в блоке
  closeAllInBlock(spollerBlock, duration, height) {
    const activeItems = spollerBlock.querySelectorAll('[data-spoller]._active');
    activeItems.forEach(item => {
      item.classList.remove('_active');
      _slideUp(item.nextElementSibling, duration, height);
    });
  }

  // Полная очистка
  destroy() {
    // Удаляем все обработчики
    this.spollers.forEach(spoller => {
      if (spoller.classList.contains('_spoller-init')) {
        this.deinitSpollers([spoller]);
      }
    });

    // Удаляем медиа-запросы
    this.mediaQueries.forEach(({ mql, handler }) => {
      mql.removeListener(handler);
    });
    this.mediaQueries.clear();
  }

  // Полная переинициализация (для динамического контента)
  reinit() {
    this.init();
  }
}

// Создаем экземпляр
const spollersManager = new Spollers();

// Для динамического контента вызываем:
// spollersManager.reinit();;
//include('../../web-template/src/js-elements/items_v2.0.0_now.js');

// ----------------------------------------------------------------------

document.querySelector('.header__search-close').addEventListener('click', function(e) {
	e.preventDefault(); // Предотвращаем отправку формы (если кнопка типа submit)
	const input = document.querySelector('.header__search-input');
	input.value = '';    // Очищаем поле
	input.focus();       // Возвращаем фокус
});

new Activator('._select-btn', {
	stops: ['._select-body'],
	removedOwn: ['._select-body'],
	clickOutClose: true,
	escClose: true,
	onlyOne: true,
});

new Activator('._menu-btn', {
	stops: ['._menu-body'],
	removedOwn: ['._menu-body'],
	escClose: true,
	onlyOne: true,
	effects: 'U',
	effectDuration: 300,
	breakpoints: {
		[md3]: {			
			effects: null,
			effectDuration: null,
			clickOutClose: true,
		}
	}
}, true);

new Activator('.burger', {
	removed: ['.header-menu__mobile-container'],
	removing: ['.header-menu__icon-close'],
	// effects: 'F',
	// effectDuration: 300,
	clickOutClose: true,
	escClose: true,
	bodyLock: true,
});

// function headerHeight() {
// 	let hh = header.offsetHeight + 'px';
// 	document.documentElement.style.setProperty('--header-height', hh);	
// }

// const burgerActivator = new Activator('.burger', {
// 	removed: ['header','.header__container'],
// 	bodyLock: true,
// });

// const accessActivator = new Activator('.access', {
// 	removed: ['.access-menu'],
// 	effects: 'U',
// 	effectDuration: 200,
// 	clickOutClose: true,
// 	escClose: true,
// 	// bodyLock: true,
// });

// const closeActivator = new Activator('._close', {
// 	removedOwn: ['._removed'],
// });

// new Activator('._select', {
// 	//removed: ['#text'],
// 	removedOwn: ['._select-variants'],
// 	stops: ['._select-variants'],
// 	removing: ['._select-variant'],
// 	clickOutClose: true,
// 	escClose: true,
// 	effects: 'U',
// 	effectDuration: 300,
// 	//bodyLock: true,
// 	onlyOne: true,
// 	//deactivate: false,
// 	//focus
// });

// new Activator('._select-variant', {
//   onlyOne: true,
//   deactivate: false,
//   limitContainer: '._select',
// });

//include('_access.js');
//include('_swipers.js');
//include('_map.js');

window.onload = () => {
	// headerHeight();
	calculateScrollbarWidth();
	updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
	// addTouchClassForMobile();
}

window.onresize = () => {
	// headerHeight();
	calculateScrollbarWidth();
	updateIndicator('._tabs', '._tabs-title._active', '._tabs-indicator');
	// addTouchClassForMobile();
}

