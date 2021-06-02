import React from 'react';
import './curriculum.css';

export default function Curriculum() {
  return (
    <body class="lang-pt">
      <div id="main">
        <div id="photo">
          <img src="..." alt="" />
        </div>
        <div class="header photo">
          <h1 id="title">
            Kássio Venícios Alves Carvalho
            <span class="email">kassio_venicios@hotmail.com</span>
          </h1>
          <div class="basic-info section">
            <div class="set">
              <p class="address">
                <span class="value">
                Promorar
                <br />
                Teresina - Piauí
                <br />
                Brasil </span>
              </p>
              <div class="r">
                <p class="phone">
                  <label>Telefone<span class="colon">:</span></label>
                  <span class="value">+55 (86) 99828-6400</span>
                </p>
              </div>
              <div class="clear" />
            </div>
            <div class="clear" />
          </div>
        </div>
        <div class="clear" />

        <div class="section section-work">
          <h2 class="title">Experiência profissional</h2>
          <div class="set">
            <div class="item">
              <h3>
                <span class="company l">Simples Informática</span>
                <span class="date r">Julho 2019 — Fevereiro 2020</span>
              </h3>
              <div class="clear" />
              <span class="job_title">Desenvolvedor Front-end</span>
              <div class="info">
                <ul>
                  <li>
                    Descrição.
                  </li>
                  <li>Tecnologias.</li>
                </ul>
              </div>
              <div class="clear" />
            </div>
          </div>
          <div class="clear" />
        </div>

        <div class="section section-qualifications">
          <h2 class="title">Qualificações</h2>
          <div class="set">
            <div class="item">
              <span class="info">
                <ul>
                  <li>Qualificação 1.</li>
                  <li>Qualificação 2.</li>
                  <li>...</li>
                </ul>
              </span>
            </div>
          </div>
          <div class="clear" />
        </div>

        <div class="section section-education">
          <h2 class="title">Educação</h2>
          <div class="set">
            <div class="item">
              <h3>
                <span class="course l">Graduado em Ciência da Computação</span>
                <span class="date r">Março 2015 — Junho 2019</span>
              </h3>
              <div class="clear" />
              <span class="school">Universidade Federal do Piauí</span>
              <div class="info">
                <ul>
                  <li>Projetos na Universidade.</li>
                  <li>2018 – 2019: ...</li>
                  <li>2017 – 2018: ...</li>
                  <li>...</li>
                </ul>
              </div>
              <span class="clear" />
            </div>

            <br />

            <div class="item">
              <h3>
                <span class="course l">Ensino Médio (2º grau)</span>
                <span class="date r">2012 - 2014: Colégio Certo, Teresina - PI, Brasil.</span>
              </h3>
              <div class="clear" />
            </div>

            <div class="item">
              <h3>
                <span class="course l">Cursos de extensão na área de interesse do curso de Ciência da Computação:</span>
                <span class="date r">
                  <ul>
                    <li>Minicurso de programação em Django.</li>
                    <li>HACKATRUCK EAD: Conceitos e Fundamentos: Lógica de Programação, Orientação a Objetos e SWIFT</li>
                    <li>HACKATRUCK PRESENCIAL: Fundamentos e Práticas na Linguagem de Programação Swift.</li>
                  </ul>
                </span>
              </h3>
              <div class="clear" />
            </div>
          </div>
          <div class="clear" />
        </div>

        <div class="section section-interests">
          <h2 class="title">Interesses</h2>
          <div class="set">
            <div class="item">
              <span class="info">
                <ul>
                  <li>Meus Interesses.</li>
                  <li>...</li>
                  <li>Disponibilidade de trabalhar remotamente.</li>
                </ul>
              </span>
            </div>
          </div>
          <div class="clear" />
        </div>
      </div>
    </body>
  );
}
