import React from 'react';
import './curriculum.css';
import {
  CurriculumData as data,
  CurriculumText as text,
} from './curriculumData';

export default function Curriculum() {
  return (
    <body class="lang-pt">
      <div id="main">
        <div id="photo">
          <img src={data.photo.url} alt={data.photo.description} />
        </div>
        <div class="header photo">
          <h1 id="title">
            {data.name}
            <span class="email">{data.contact.email}</span>
          </h1>
          <div class="basic-info section">
            <div class="set">
              <p class="address">
                <span class="value">
                {data.address.district}
                <br />
                {`${data.address.city} - ${data.address.state}`}
                <br />
                {data.address.country} </span>
              </p>
              <div class="r">
                <p class="phone">
                  <label>{text('phone')}<span class="colon">:</span></label>
                  <span class="value">{data.contact.phone}</span>
                </p>
              </div>
              <div class="clear" />
            </div>
            <div class="clear" />
          </div>
        </div>
        <div class="clear" />

        <div class="section section-work">
          <h2 class="title">{text('professionalXP')}</h2>
          <div class="set">
            {
              data.professionalXP.map(company => (
                <div class="item">
                  <h3>
                    <span class="company l">{company.companyName}</span>
                    <span class="date r">
                      {`${company.startDate.month} ${company.startDate.year}`}
                      {` — ${company.endDate.month} ${company.endDate.year}`}
                    </span>
                  </h3>
                  <div class="clear" />
                  <span class="job_title">{company.responsability}</span>
                  <div class="info">
                    <ul>
                      <li>{company.jobDescription}</li>
                      <li>{company.tools}</li>
                    </ul>
                  </div>
                  <div class="clear" />
                </div>
              ))
            }
          </div>
          <div class="clear" />
        </div>

        <div class="section section-qualifications">
          <h2 class="title">{text('qualifications')}</h2>
          <div class="set">
            <div class="item">
              <span class="info">
                <ul>
                  {data.qualifications.map(q => <li>{q}</li>)}
                </ul>
              </span>
            </div>
          </div>
          <div class="clear" />
        </div>

        <div class="section section-education">
          <h2 class="title">{text('education')}</h2>
          <div class="set">
            {
              data.education.map(edu => (
                <div class="item">
                  <h3>
                    <span class="course l">{edu.title}</span>
                    <span class="date r">
                      {`${edu.startDate.month} ${edu.startDate.year}`}
                      {` — ${edu.endDate.month} ${edu.endDate.year}`}
                    </span>
                  </h3>
                  <div class="clear" />
                  <span class="school">{edu.institution}</span>
                  <div class="info">
                    <ul>
                      {edu.projects.map(proj => <li>{proj}</li>)}
                    </ul>
                  </div>
                  <span class="clear" />
                </div>
              ))
            }

            <div class="item">
              <h3>
                <span class="course l">{text('extensionCourses')}</span>
                <span class="date r">
                  <ul>
                    {data.extensionCourses.map(course => <li>{course}</li>)}
                  </ul>
                </span>
              </h3>
              <div class="clear" />
            </div>
          </div>
          <div class="clear" />
        </div>

        <div class="section section-interests">
          <h2 class="title">{text('interests')}</h2>
          <div class="set">
            <div class="item">
              <span class="info">
                <ul>
                  {data.interests.map(interest => <li>{interest}</li>)}
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
