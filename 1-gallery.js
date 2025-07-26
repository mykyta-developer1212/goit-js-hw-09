import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{S as e}from"./assets/vendor-CgTBfC_f.js";const o=[{preview:"img/command.jpg",original:"img/command-big.jpg",description:"Command work"},{preview:"img/idea.jpg",original:"img/idea-big.jpg",description:"Idea"},{preview:"img/list.jpg",original:"img/list-big.jpg",description:"List"},{preview:"img/interior.jpg",original:"img/interior-big.jpg",description:"Interior"},{preview:"img/room.jpg",original:"img/room-big.jpg",description:"Room"},{preview:"img/office.jpg",original:"img/office-big.jpg",description:"Office"},{preview:"img/work.jpg",original:"img/work-big.jpg",description:"Work"},{preview:"img/programming.jpg",original:"img/programming-big.jpg",description:"Programming"},{preview:"img/plan.jpg",original:"img/plan-big.jpg",description:"Plan"}],p=document.querySelector(".gallery"),m=o.map(({preview:i,original:g,description:r})=>`<li class="gallery-item">
        <a href="${g}">
          <img src="${i}" alt="${r}" class="gallery-image" />
        </a>
      </li>`).join("");p.innerHTML=m;new e(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=1-gallery.js.map
