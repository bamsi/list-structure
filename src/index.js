import _ from "lodash";
import "./style.css";

let toDoList = [
  {
    description: "Implement todo list structure template using webpack",
    completed: false,
    index: 1,
  },
  {
    description: "Implement todo list structure template using javascript",
    completed: false,
    index: 1,
  },
];

function loadList() {
  const myList = document.querySelector(".my-list");
  let htmlEl = "";
  for (let item of toDoList) {
    htmlEl += `<li class="list-item">
                <div class="list-label">
                  <input type="checkbox" id="list${item.id}" name="list${item.id}" />
                  <label for="list${item.id}"> ${item.description} </label>
                </div>
                <div>
                  <svg
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 60 60"
                    style="enable-background: new 0 0 60 60"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z"
                      />
                      <path
                        d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z"
                      />
                      <path
                        d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z"
                      />
                    </g>
                  </svg>
                </div>
              </li>`;
  }

  myList.innerHTML = htmlEl;
}

window.onload = loadList();
