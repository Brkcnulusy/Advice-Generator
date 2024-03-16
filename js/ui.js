export const renderAdvice = function (element, data) {
    element.innerHTML = '';
        element.innerHTML = `
        <div class="advice">
          <div class="advice-id">
            <h4>Advice #${data.id}</h2>
          </div>
          <div class="advice-message">
            <p>
              ${data.advice} Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit
              amet consectetur adipisicing elit. Ratione, inventore.
            </p>
          </div>
          <div class="advice-image">
            <img
              class="js-advice-image"
              src="./assets/images/pattern-divider-desktop.svg"
              alt="advice"
            />
          </div>
          <div class="advice-button">
            <button class="js-change-advice-button">
              <img src="./assets/images/icon-dice.svg" alt="zar" />
            </button>
          </div>
        </div>
        `;
        
    ;
}