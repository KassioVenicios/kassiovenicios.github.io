import React, { useContext } from 'react';
import './curriculum.css';
import { ThemeContext } from '../theme/theme';
import { LangContext } from '../language/language';
import {CurriculumData as data} from './curriculumData';
import {
  DivClear,
  CurriculumBody,
} from './curriculumStyle';

export default function Curriculum() {

  const {text} = useContext(LangContext);
  const {color} = useContext(ThemeContext);

  return (
    <CurriculumBody color={color}>
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
              <DivClear />
            </div>
            <DivClear />
          </div>
        </div>
        <DivClear />

        <div class="section section-work">
          <h2 class="title">{text('professionalXP')}</h2>
          <div class="set">
            {
              data.professionalXP.map(company => (
                <div class="item">
                  <h3>
                    <span class="company l">{company.companyName}</span>
                    <span class="date r">
                      {
                        text('months')[company.startDate.month-1]
                        + ' ' + company.startDate.year
                      }
                      {
                        company.endDate.current ?
                          ` — ${text('current')}` :
                          ` — ${text('months')[company.endDate.month-1]} ${company.endDate.year}`
                      }
                    </span>
                  </h3>
                  <DivClear />
                  <span class="job_title">{company.responsability}</span>
                  <div class="info">
                    <ul>
                      <li>{company.jobDescription}</li>
                      <li>{company.tools}</li>
                    </ul>
                  </div>
                  <DivClear />
                </div>
              ))
            }
          </div>
          <DivClear />
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
          <DivClear />
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
                      {
                        text('months')[edu.startDate.month-1] + ' ' +
                        edu.startDate.year + ' — ' +
                        text('months')[edu.endDate.month-1] + ' ' +
                        edu.endDate.year
                      }
                    </span>
                  </h3>
                  <DivClear />
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
              <DivClear />
            </div>
          </div>
          <DivClear />
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
          <DivClear />
        </div>
      </div>
    </CurriculumBody>
  );
}
