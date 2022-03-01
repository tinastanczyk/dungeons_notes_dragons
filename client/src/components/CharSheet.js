import React from "react";

const CharSheet = (character) => {
  return <div className="container">
  <div className="charInfo">
    <div className="col-4">
      <h3 className="charName">{character.name}</h3>
      <h3 className="userName">{character.user.name}</h3>
    </div>
    <div className="col-4">
      <h3 className="charRace">{character.race}</h3>
      <h3 className="charClass">{character.class}</h3>
    </div>
    <div className="col-4">
      <h3 className="charHP">{character.hitPoints}</h3>
      <h3 className="charAlignment">{character.alignment}</h3>
    </div>
  </div>
  <div className="row">
    <div className="col-4">
      <table className="table">
        <tr>
          <th>Ability</th>
          <th>Score</th>
          <th>Modifier</th>
        </tr>
        <tr>
          <td>Strength</td>
          <td>
            <input type="number" value="10" id="strScore" onChange="getModifier()"></input>
          </td>
          <td>
            <input type="number" placeholder="0" id="strMod"></input>
          </td>
        </tr>
        <tr>
          <td>Dexterity</td>
          <td>
            <input type="number" value="10" id="dexScore" onChange="getModifier()"></input>
          </td>
          <td>
            <input type="number" placeholder="0" id="dexMod"></input>
          </td>
        </tr>
        <tr>
          <td>Constitution</td>
          <td>
            <input type="number" value="10" id="conScore" onChange="getModifier()"></input>
          </td>
          <td>
            <input type="number" placeholder="0" id="conMod"></input>
          </td>
        </tr>
        <tr>
          <td>Intelligence</td>
          <td>
            <input type="number" value="10" id="intScore" onChange="getModifier()"></input>
          </td>
          <td>
            <input type="number" placeholder="0" id="intMod"></input>
          </td>
        </tr>
        <tr>
          <td>Wisdom</td>
          <td>
            <input type="number" value="10" id="wisScore" onChange="getModifier()"></input>
          </td>
          <td>
            <input type="number" placeholder="0" id="wisMod"></input>
          </td>
        </tr>
        <tr>
          <td>Charisma</td>
          <td>
            <input type="number" value="10" id="chaScore" onChange="getModifier()"></input>
          </td>
          <td>
            <input type="number" placeholder="0" id="chaMod"></input>
          </td>
        </tr>
      </table>
    </div>
    <div className="col-4">
      <h2>Player Level</h2>
      <br>
      <input type="number" id="charLevel" min="1" max="20"></input>
      </br>
    </div>
    <div className="col-4">
      <h2>Proficiency Bonus</h2>
      <br>
        <input type="number" id="profBonus"></input>
      </br>
      <div className="charHPNumbers col-4">
        <h3>Total Hit Points</h3>
        <br>
        <input type="number" id="totalHP"></input>
        </br>
        <h3>Current Hit Points</h3>
        <br>
        <input type="number" id="currentHP"></input>
        </br>
        <h3>Temporary Hit Points</h3>
        <br>
        <input type="number" id="temporaryHP" placeholder="0"></input>
        </br>
      </div>
      <div className="container">
        <h3>Armor</h3>
        <input type="text" id="armorTypes" placeholder="add armor proficiencies here..."></input>
      </div>
    </div>
  </div>
</div>;
};

export default CharSheet;




// (
//   <div class="charsheet">
//     <p>Name: {character.name}</p>
//     <p>Race: {character.race}</p>
//     <p>Class: {character.className}</p>
//     <p>Hit Points: {character.hitPoints}</p>
//     <p>
//       Strength: {character.str}/{character.strmod}
//     </p>
//     <p>
//       Dexterity: {character.dex}/{character.dexmod}
//     </p>
//     <p>
//       Constitution: {character.con}/{character.conmod}
//     </p>
//     <p>
//       Intelligence: {character.int}/{character.intmod}
//     </p>
//     <p>
//       Wisdom: {character.wis}/{character.wismod}
//     </p>
//     <p>
//       Charisma: {character.cha}/{character.chamod}
//     </p>
//   </div>
// );