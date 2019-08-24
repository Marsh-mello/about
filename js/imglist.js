
$('#pricing .nav-link').click(function() {
	imgName1=$(this).attr('href');
	newList();
});
window.onresize = function() {
	newList();
}
function newList() {
	var imgName=$('#pricing .nav-item .active').attr('href');
	if($('#navAll').hasClass('active')){
		console.log(imgName)
	}else{
		imgName==imgName1;
		console.log(imgName)
	}
	var masonry = new Macy({
		container: imgName,
		trueOrder: false,
		waitForImages: true,
		margin: 24,
		columns: 5,
		margin: {
			y: 16,
			x: '2%',
		},
		breakAt: {
			1200: 4,
			1100: 3,
			1000: 2,
			0: 1,
		},
	});
}

$(function(){
	$.ajax({
		url: "js/work.json", //json文件位置
		type: "get",
		dataType: 'json',
		success: function(data) { //请求成功完成后要执行的方法
			var jsonAll = [];
			var jsonAPP = [];
			var jsonWEB = [];
			var jsonPM = [];
			var jsonDX = [];
			
			var urlTitle = 'https://marshmello.oss-cn-hangzhou.aliyuncs.com/';
			var urlResize = '?x-oss-process=image/resize,p_50';
			$('.sortable__nav a').click(function() {
				$('.sortable__nav a').removeClass('is-active');
				$(this).addClass('is-active');
			})

			$.each(data.data, function(i, data) {
				var titleNum1 = data.ObjectName.indexOf('/');
				var title = data.ObjectName.substring(0, titleNum1);
				jsonAll.push({
					ObjectName: data.ObjectName
				});
				if(title == 'APP') {
					jsonAPP.push({
						ObjectName: data.ObjectName
					});
				} else if(title == 'WEB') {
					jsonWEB.push({
						ObjectName: data.ObjectName
					});
				} else if(title == '平面设计') {
					jsonPM.push({
						ObjectName: data.ObjectName
					});
				} else if(title == '动效设计') {
					jsonDX.push({
						ObjectName: data.ObjectName
					});
				}
			});
			myAll();
			function myAll() {
				
				for(var i = 0; i < jsonAll.length; i++) {
					var titleNum1 = jsonAll[i].ObjectName.indexOf('/');
					var titleNum2 = jsonAll[i].ObjectName.lastIndexOf('/');
					var title = jsonAll[i].ObjectName.substring(0, titleNum1);
					var nameNum = jsonAll[i].ObjectName.lastIndexOf('.');
					var name = jsonAll[i].ObjectName.substring(titleNum1 + 1, titleNum2);
					var content = jsonAll[i].ObjectName.substring(titleNum2 + 1, nameNum);
					var imgUrl = urlTitle + jsonAll[i].ObjectName + urlResize;
					var dataUrl = urlTitle + jsonAll[i].ObjectName;
					$('#imgAll').append(
						"<a class='card'><img class='card__picture xScroll' data-animation='fadeInUp' src='" +
						imgUrl +
						"'data-src='" +
						dataUrl +
						"'><div class='card-infos xScroll' data-animation='fadeInUp'><h2 class='card——badge'>" +
						title +
						"</h2><h2 class='card__title'>" +
						name +
						"</h2><p class='card__text'>" + content + "</p></div></a>"
					)
				};
				for(var i = 0; i < jsonAPP.length; i++) {
					var titleNum1 = jsonAPP[i].ObjectName.indexOf('/');
					var titleNum2 = jsonAPP[i].ObjectName.lastIndexOf('/');
					var title = jsonAPP[i].ObjectName.substring(0, titleNum1);
					var nameNum = jsonAPP[i].ObjectName.lastIndexOf('.');
					var name = jsonAPP[i].ObjectName.substring(titleNum1 + 1, titleNum2);
					var content = jsonAPP[i].ObjectName.substring(titleNum2 + 1, nameNum);
					var imgUrl = urlTitle + jsonAPP[i].ObjectName + urlResize;
					var dataUrl = urlTitle + jsonAPP[i].ObjectName;
					$('#imgApp').append(
						"<a class='card'><img class='card__picture xScroll' data-animation='fadeInUp' src='" +
						imgUrl +
						"'data-src='" +
						dataUrl +
						"'><div class='card-infos xScroll' data-animation='fadeInUp'><h2 class='card——badge'>" +
						title +
						"</h2><h2 class='card__title'>" +
						name +
						"</h2><p class='card__text'>" + content + "</p></div></a>"
					)
				};
				for(var i = 0; i < jsonWEB.length; i++) {
					var titleNum1 = jsonWEB[i].ObjectName.indexOf('/');
					var titleNum2 = jsonWEB[i].ObjectName.lastIndexOf('/');
					var title = jsonWEB[i].ObjectName.substring(0, titleNum1);
					var nameNum = jsonWEB[i].ObjectName.lastIndexOf('.');
					var name = jsonWEB[i].ObjectName.substring(titleNum1 + 1, titleNum2);
					var content = jsonWEB[i].ObjectName.substring(titleNum2 + 1, nameNum);
					var imgUrl = urlTitle + jsonWEB[i].ObjectName + urlResize;
					var dataUrl = urlTitle + jsonWEB[i].ObjectName;
					$('#imgWeb').append(
						"<a class='card'><img class='card__picture xScroll' data-animation='fadeInUp' src='" +
						imgUrl +
						"'data-src='" +
						dataUrl +
						"'><div class='card-infos xScroll' data-animation='fadeInUp'><h2 class='card——badge'>" +
						title +
						"</h2><h2 class='card__title'>" +
						name +
						"</h2><p class='card__text'>" + content + "</p></div></a>"
					)
				};
				for(var i = 0; i < jsonPM.length; i++) {
					var titleNum1 = jsonPM[i].ObjectName.indexOf('/');
					var titleNum2 = jsonPM[i].ObjectName.lastIndexOf('/');
					var title = jsonPM[i].ObjectName.substring(0, titleNum1);
					var nameNum = jsonPM[i].ObjectName.lastIndexOf('.');
					var name = jsonPM[i].ObjectName.substring(titleNum1 + 1, titleNum2);
					var content = jsonPM[i].ObjectName.substring(titleNum2 + 1, nameNum);
					var imgUrl = urlTitle + jsonPM[i].ObjectName + urlResize;
					var dataUrl = urlTitle + jsonPM[i].ObjectName;
					$('#imgPm').append(
						"<a class='card'><img class='card__picture xScroll' data-animation='fadeInUp' src='" +
						imgUrl +
						"'data-src='" +
						dataUrl +
						"'><div class='card-infos xScroll' data-animation='fadeInUp'><h2 class='card——badge'>" +
						title +
						"</h2><h2 class='card__title'>" +
						name +
						"</h2><p class='card__text'>" + content + "</p></div></a>"
					)
				};
				for(var i = 0; i < jsonDX.length; i++) {
					var titleNum1 = jsonDX[i].ObjectName.indexOf('/');
					var titleNum2 = jsonDX[i].ObjectName.lastIndexOf('/');
					var title = jsonDX[i].ObjectName.substring(0, titleNum1);
					var nameNum = jsonDX[i].ObjectName.lastIndexOf('.');
					var name = jsonDX[i].ObjectName.substring(titleNum1 + 1, titleNum2);
					var content = jsonDX[i].ObjectName.substring(titleNum2 + 1, nameNum);
					var imgUrl = urlTitle + jsonDX[i].ObjectName + urlResize;
					var dataUrl = urlTitle + jsonDX[i].ObjectName;
					$('#imgDx').append(
						"<a class='card'><img class='card__picture xScroll' data-animation='fadeInUp' src='" +
						imgUrl +
						"'data-src='" +
						dataUrl +
						"'><div class='card-infos xScroll' data-animation='fadeInUp'><h2 class='card——badge'>" +
						title +
						"</h2><h2 class='card__title'>" +
						name +
						"</h2><p class='card__text'>" + content + "</p></div></a>"
					)
				};
				newList();
				$(".xScroll").xScroll();
			};

		}
	})
		var alertView = $('#alert-view');
	var toogleImg = $('.cut a,.alert-view-img');
	var main = $('#pricing');
	var alertImg = $('.alert-view-img ');
	var imgList = new Image();
	var cardPicture = $('.card__picture');
	var h = window.innerHeight;
	var w = window.innerWidth;
	//	alertImg.css('width', w * 0.6);
	$(document).on('click', '.card__picture', function() { //ajax动态加载点击触发解决
		$('body').css('overflow', 'hidden');
		alertView.css('display', 'block');
		main.css('filter', 'blur(10px)');
		var viewImg = $(this).attr('data-src');
		alertImg.attr('src', viewImg);

		alertImg.removeClass('alert-img');

		var imgWb = this.naturalWidth * 2; //当前图片宽度
		var imgNum = 1100 / imgWb; //放大图片比值
		var imgHb = this.naturalHeight * 2; //当前图片高度
		var imgInt = imgHb * imgNum; //放大图片高度
		var imgH = new Image();
		imgH.src = viewImg;
		var imgs = document.querySelectorAll(".card__picture");
		for(var i = 0; i < imgs.length; i++) {
			imgs[i].index = i;
			var indexNum = this.index;
			$('.cut-left').off('click');
			$('.cut-left').click(function() {
				if(indexNum < 1) {
					indexNum = imgs.length;
				};
				indexNum--;
				var leftImg = imgs[indexNum].src;
				var str = leftImg.split('?');
				alertImg.attr('src', str[0]);

				alertImg.removeClass('alert-img');
				var imgH = alertImg.css('height');
				if(parseInt(imgH) < h) {
					alertImg.addClass('alert-img');
				}
			});
			$('.cut-right').off('click'); //解绑事件
			$('.cut-right').click(function() {
				if(indexNum == imgs.length - 1) {
					indexNum = -1;
				};
				indexNum++;
				var leftImg = imgs[indexNum].src;
				var str = leftImg.split('?');
				alertImg.attr('src', str[0]);

				alertImg.removeClass('alert-img');
				var imgH = alertImg.css('height');
				if(parseInt(imgH) < h) {
					alertImg.addClass('alert-img');
				}
			})
		}
		//判断是否有缓存
		if(imgH.complete) {
			if(imgInt < h) {
				alertImg.addClass('alert-img');
			}
		} else {
			imgH.onload = function() {
				if(imgInt < h) {
					alertImg.addClass('alert-img');
				}
			};
		}
	});

	$(document).mouseup(function(e) {
		if(!toogleImg.is(e.target) && toogleImg.has(e.target).length === 0) { // Mark 1
			$('body').css('overflow', 'auto');
			alertView.css('display', 'none');
			main.css('filter', 'blur(0)');
			alertImg.removeClass('alert-img');
		}
	});
});
