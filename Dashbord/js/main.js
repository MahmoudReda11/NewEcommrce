let allBox = document.querySelectorAll('.cont-fulid .boxs .box');

allBox.forEach(box => {
    box.onclick = () =>{
        allBox.forEach(ltx => ltx.classList.remove("active"));
        box.classList.add('active')
        console.log('reda')
    }
});
// let btnFilter = document.querySelector('.btn-filter');
// let filterBox = document.querySelector('.show-serch-order');
// let formFilter =
// btnFilter.onclick= () =>{
//     filterBox.classList.toggle("active")
// }

/* show any section on click on button open */
function showSec(cls) {
    let show = document.querySelector(cls)
    show.classList.add("active")
}

/* close any section on click on button close */
function closeSec(cls) {
    let Dshow = document.querySelector(cls)
    Dshow.classList.remove("active")
}

/* scroll to edit or show sec */



function showSecTogle(cls) {
    let show = document.querySelector(cls)
    show.classList.toggle("active")
}

function scrltop(){
    console.log("logo")
    window.scrollTo({
        top: 420,
        behavior: "smooth",
    });
}

/* add img for kesm */

const selectImage = document.querySelector('.select-image');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 5000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 5MB");
	}
})


const selectImage2 = document.querySelector('.select-image2');
const inputFile2 = document.querySelector('#file2');
const imgArea2 = document.querySelector('.img-area2');

selectImage2.addEventListener('click', function () {
	inputFile2.click();
})

inputFile2.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 5000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea2.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea2.appendChild(img);
			imgArea2.classList.add('active');
			imgArea2.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 5MB");
	}
})