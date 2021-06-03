import React, { useContext } from 'react';
import './curriculum.css';
import { ThemeContext } from '../theme/theme';
import { LangContext } from '../language/language';
import {CurriculumData as data} from './curriculumData';
import {
  Body,
  CurriculumBody,
  DivClear,
  Email,
  Title,
} from './curriculumStyle';

export default function Curriculum() {

  const {text} = useContext(LangContext);
  const {color} = useContext(ThemeContext);

  return (
    <Body
      textColor={color('textColor')}
      backgroundColor={color('backgroundColor')}>
      <CurriculumBody
        boxShadowColor={color('boxShadowColor')}
        backgroundColor={color('backgroundColor')}>
        <div id="photo">
          <img src={data.photo.url} alt={data.photo.description} />
        </div>
        <div className="header photo">
          <Title textColor={color('textColor')}>
            {data.name}
            <Email>{data.contact.email}</Email>
          </Title>
          <div className="basic-info section">
            <div className="set">
              <p className="address">
                <span className="value">
                {data.address.district}
                <br />
                {`${data.address.city} - ${data.address.state}`}
                <br />
                {data.address.country} </span>
              </p>
              <div className="r">
                <p className="phone">
                  <label>{text('phone')}<span className="colon">:</span></label>
                  <span className="value">{data.contact.phone}</span>
                </p>
              </div>
              <DivClear />
            </div>
            <DivClear />
          </div>
        </div>
        <DivClear />

        <div className="section section-work">
          <h2 className="title">{text('professionalXP')}</h2>
          <div className="set">
            {
              data.professionalXP.map(company => (
                <div className="item" key={company.companyName}>
                  <h3>
                    <span className="company l">{company.companyName}</span>
                    <span className="date r">
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
                  <span className="job_title">{company.responsability}</span>
                  <div className="info">
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

        <div className="section section-qualifications">
          <h2 className="title">{text('qualifications')}</h2>
          <div className="set">
            <div className="item">
              <span className="info">
                <ul>
                  {data.qualifications.map(q => <li key={q}>{q}</li>)}
                </ul>
              </span>
            </div>
          </div>
          <DivClear />
        </div>

        <div className="section section-education">
          <h2 className="title">{text('education')}</h2>
          <div className="set">
            {
              data.education.map(edu => (
                <div className="item" key={edu.title}>
                  <h3>
                    <span className="course l">{edu.title}</span>
                    <span className="date r">
                      {
                        text('months')[edu.startDate.month-1] + ' ' +
                        edu.startDate.year + ' — ' +
                        text('months')[edu.endDate.month-1] + ' ' +
                        edu.endDate.year
                      }
                    </span>
                  </h3>
                  <DivClear />
                  <span className="school">{edu.institution}</span>
                  <div className="info">
                    <ul>
                      {edu.projects.map(proj => <li key={proj}>{proj}</li>)}
                    </ul>
                  </div>
                  <span className="clear" />
                </div>
              ))
            }

            <div className="item">
              <h3>
                <span className="course l">{text('extensionCourses')}</span>
                <span className="date r">
                  <ul>
                    {
                      data.extensionCourses.map(course =>
                        <li key={course}>{course}</li>
                      )
                    }
                  </ul>
                </span>
              </h3>
              <DivClear />
            </div>
          </div>
          <DivClear />
        </div>

        <div className="section section-interests">
          <h2 className="title">{text('interests')}</h2>
          <div className="set">
            <div className="item">
              <span className="info">
                <ul>
                  {data.interests.map(interest => <li key={interest}>{interest}</li>)}
                </ul>
              </span>
            </div>
          </div>
          <DivClear />
        </div>
      </CurriculumBody>
    </Body>
  );
}
