
const container = document.querySelector(".container");
const rowList = [];
const buttonList = [];


addElements();

function addElements(){

    for(let i = 0; i < 12 ; i++){

        const row = document.createElement("row");
        row.className = "row mt-1 d-flex justify-content-center";
        container.appendChild(row);
        for(let k = 0; k < 15 ; k++){
            const button = document.createElement("button");
            button.className = "btn btn-danger ml-1";
            button.style = "height: 50px; width: 50px;";
            row.appendChild(button);
        }
    }
}















/*


 <div class="row mt-5 d-flex justify-content-center">
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>

        </div>

        <div class="row mt-1 d-flex justify-content-center">
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>
            <button type="button" class="btn btn-danger ml-1" style="height: 50px; width: 50px;"></button>

        </div>
*/