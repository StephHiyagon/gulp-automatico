"use strict";var render=function(a){a.empty();var t=$('<div class="wrapper"></div>');setTimeout(function(){t.append(Portada(e))},2e3);var e=function(){render(a)};a.append(t)},state={inicial:null};$(function(a){$.get("https://swapi.co/api/people/",function(a){if(!a)return alert("sin data");state.inicial=a.results,console.log(state.inicial)});var t=$("#root");render(t)});var Portada=function(a){console.log("estas en la portada"),console.log("Holasssss"),console.log(state.inicial)};