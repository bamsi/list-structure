/* eslint "import/prefer-default-export":"off" */
import { readLocalStorage } from './local-storage.module.js';

function loadData() {
  const myList = document.querySelector('.my-list');
  const toDoList = readLocalStorage();
  let htmlEl = '';
  toDoList.forEach((item) => {
    htmlEl += `<li class="list-item">
                <div class="list-label">
                <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" class="item-check" id="square_${item.id}" 
                aria-labelledby="rectangleIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" 
                fill="none" color="#000000"> <rect width="18" height="18" x="3" y="5"/> 
                </svg>

                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="item-check hide" id="tick_${item.id}">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8198 6.19526C20.0601 6.45561 20.0601 6.87772 19.8198 7.13807L9.9736 17.8047C9.73328 18.0651 9.34364 18.0651 9.10332 17.8047L4.18024 12.4714C3.93992 12.2111 3.93992 11.7889 4.18024 11.5286C4.42056 11.2682 4.8102 11.2682 5.05053 11.5286L9.53846 16.3905L18.9495 6.19526C19.1898 5.93491 19.5794 5.93491 19.8198 6.19526Z" fill="#030D45"/>
                </svg>
                  <span class="list-desc" id="#list_${item.id}"> ${item.description} </span>
                  <input type="text" id="list_${item.id}" class="hide" value="${item.description}"/>
                </div>
                <div>
                  <svg
                    version="1.1"
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
  });

  myList.innerHTML = htmlEl;
}

export { loadData };
