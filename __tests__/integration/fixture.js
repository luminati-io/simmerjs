export default `
  <div id="fixture" style="display:none">
      <div id="TopContainer">
          <div class="header"><span id="NavBar"> <ul>
              <Li class="Edge"><a href="./page/link_1">Page #1</a></Li>
              <Li><span>Here:<span id="helper"></span></span><a href="./page/link_2">Page #2</a></Li>
              <Li class="Active"><a href="./page/link_3">Page #3</a></Li>
              <Li><a href="./page/link_4">Page #4 <img src="./image/Pixel.png"/></a></Li>
              <Li class="Edge"><a href="./page/link_5">Page #5</a></Li>
          </ul> </span></div>
          <div id="111"></div>
          <div id="a111a"></div>
          <div id="a111"></div>
          <div id="111aaaaaa"></div>
          <div id="BodyDiv">
              <div id="NonUniqueDiv"><img src="./image/NoID.png"></div>
              <div><img src="./image/NonUniqueSRC.png">
                  <table>
                      <tr>
                          <th><a href="non.html">First</a></th>
                          <th><a href="second.html">Second</a></th>
                          <th><a href="non.html">Third<a/></th>
                      </tr>
                      <tr>
                          <td>1 <span class="sameclass diferentclass1"></span> <span class="diferentclass2"></span> <span
                                  class="diferentclass1"></span> <span class="diferentclass1 sameclass"></span> <span
                                  class="diferentclass1"></span></td>
                          <td>2</td>
                          <td>Cell to target!</td>
                      </tr>
                      <tr>
                          <td>A</td>
                          <td>B</td>
                          <td>C</td>
                      </tr>
                  </table>
              </div>
              <div id="NonUniqueDiv"><img src="./image/NonUniqueSRC.png"></div>
          </div>
          <div><span><span><span><span><span><p><a href="a">a</a></p></span></span></span></span></span><span><span><span><span><span><p>
              <a href="a" id="placeholderId">a</a></p></span></span></span></span></span><span><span><p><a href="a">a</a>
          </p></span></span></div>
          <div class="invalid_child_tag">
              <gidi:test><span></span></gidi:test>
          </div>
          <div id="placeholder_4">
              <div>
                  <div class="uniqueClassName"></div>
              </div>
          </div>
          <div id="placeholder_4">
              <div class="secondLevelUniqueClassName">
                  <div></div>
              </div>
          </div>
          <div id="placeholder_5">
              <div>
                  <div id=":asd" class="invalidIDElement"></div>
              </div>
          </div>
      </div>
      <div class="this-is:fine"></div>
      <div>
          <div>
              <div>
                  <div>
                      <div>
                          <div>
                              <div>
                                  <div id="aZROCRDPX41Qkden3aiC3o9Tkl0xqENUjIgNSWbe6pSddw86ogN018T9lD67zAF1YHaLkRngy8YVq88IBfqdvtO9aXZZbD1NsSBiUo6txcv22ufrkRs9AZKkxIkTF1gNAZ3Oh4M6TcYWRARVJqOZwo3dQufTDm904ep3yHZ5vdHqIyFqTFdZYPWYumx5gJBmWn7GbZQ3O3HodzmHYIHhCYg4dCDfSN8iCHzezerdHbzWUKR7pzMDOzvq017a63LSqYkSJ0gWxrgJFj45HR25eJj5szEFmuQlCfkbWpCwYopeNhy1toC9PvSfVCnHpI7EXeqVcspP0aQISflgD0pBMgg2ieITRa5gXRnKoDdem1yXvHjcDBXJFoUy63zDwg6tTtRR6rijcvoxNzGjWCgQhdqzlv6CW2CVgK2aa0VSX9RMSUTSKXmru7mvZUXJxv7RO7n1Zw9meFygwHwgNrZgeRWVYhsXBtEG8Bak7sPQ7x37QXgIgbJRcbhqMK2F5baa"></div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  `
