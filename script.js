<div class="character-builder">
  <h2>Nível do Personagem: <span id="level">1</span></h2>
  <input type="range" id="levelSlider" min="1" max="120" value="1" oninput="updateLevel(this.value)">

  <div class="attributes">
    <div class="attribute">
      <label>Vigor</label>
      <button onclick="changeAttr('vigor', -1)">−</button>
      <span id="vigor">1</span>
      <button onclick="changeAttr('vigor', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Mente</label>
      <button onclick="changeAttr('mind', -1)">−</button>
      <span id="mind">1</span>
      <button onclick="changeAttr('mind', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Resistência</label>
      <button onclick="changeAttr('endurance', -1)">−</button>
      <span id="endurance">1</span>
      <button onclick="changeAttr('endurance', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Força</label>
      <button onclick="changeAttr('strength', -1)">−</button>
      <span id="strength">1</span>
      <button onclick="changeAttr('strength', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Destreza</label>
      <button onclick="changeAttr('dexterity', -1)">−</button>
      <span id="dexterity">1</span>
      <button onclick="changeAttr('dexterity', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Inteligência</label>
      <button onclick="changeAttr('intelligence', -1)">−</button>
      <span id="intelligence">1</span>
      <button onclick="changeAttr('intelligence', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Fé</label>
      <button onclick="changeAttr('faith', -1)">−</button>
      <span id="faith">1</span>
      <button onclick="changeAttr('faith', 1)">+</button>
    </div>
    <div class="attribute">
      <label>Arcano</label>
      <button onclick="changeAttr('arcane', -1)">−</button>
      <span id="arcane">1</span>
      <button onclick="changeAttr('arcane', 1)">+</button>
    </div>
  </div>

  <h3>Slots de Magia: <span id="slots">6</span></h3>
  <p>Use os atributos para desbloquear mais slots.</p>
</div>
