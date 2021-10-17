import * as React from "react"

import Layout from "../layout/base"
import { Container, Row, Col, Image } from "react-bootstrap"
import { CheckCircleFill } from 'react-bootstrap-icons';
import aboutImg from "../images/about.jpg"
import introImg from "../images/career-tech.svg"

const CareerTech = (props) => {

  return (
		<Layout>
			<section className="banner-wrapper-small bg-gradient-primary angled-inverse section">
				<Container>
					<Row className="pt-md-5 mt-md-5 pb-3 pb-md-5">
						<Col md={6}>
							<div className="pt-5 mt-2 mt-md-5 pb-5 mb-5">
								<h1 className=" display-2">Career tech</h1>
								<p className="lead">A &amp; J Intelli System (P) Ltd also provides Educational Institutions with a broad range of products and services, including ready-to-run programs and courses.</p>
							</div>
						</Col>
						<Col md={6}>
							<Image src={introImg} className="img-fluid"/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className="wrapper mb-5 mt-0">
				<Container>
					<Row className="mb-5 justify-content-md-between align-items-center">
						<Col md={6}  data-sal="slide-down" data-sal-delay="10" data-sal-easing="ease">
							<p className="lead">AJIS is considered the best when it comes to career tech. Some of the career-tech services available at AJIS include</p>
							<ul className="icon-list icon-list-lg bullet-soft-blue">
								<li><span><CheckCircleFill/></span><span><strong>E-learning</strong></span></li>
								<li><span><CheckCircleFill/></span><span><strong>Self-development programs</strong></span></li>
								<li><span><CheckCircleFill/></span><span><strong>Psychometric tests</strong> such as motivation questionnaires, ability assessments, personality profiles, and reasoning tests</span></li>
							</ul>
						</Col>
						<Col md={5} md={{ order: 'first' }}>
							<Image src={aboutImg} className="aboutimg img-fluid rounded" data-sal="fade-in" data-sal-delay="10" data-sal-easing="ease"/>
						</Col>
					</Row>
					<Row>
						<Col>
							<p>We have organized e-learning services to equip students and other interested learners working in diverse fields with the relevant knowledge and skills needed to be successful in advanced career training and postsecondary education. We also help learners make a step towards achieving their dream goals and getting jobs that have a meaningful career path.</p>
							<p>Our e-learning courses and programs are build and organized on the same platform to help you gain access to the content without using separate log-ins. We have certified and experienced tutors ready to equip you with the relevant knowledge and skills. These tutors are always willing and able to handle any kinds of questions or clarifications you may have or need.</p>
							<p>We offer several e-learning courses that have been designed to expose learners to career options and have proper planning with their current jobs or level of education. At AJIS, we have taken the opportunity to introduce you, as a learner, to career development skills to help you identify your abilities and interests and realign them with the appropriate career path you may wish to take. Therefore, with our online courses, you have the opportunity to explore career options available at your disposal.</p>
							<p>Another career-tech service that we focus on is the provision of self-development programs. We use self-development programs to help you realize how important it is to take time and commit to investing in yourself. You will always bring out the best version of yourself if you take the time to appreciate and invest in yourself.</p>
							<p>Our self-development programs will help you choose the right professional and personal growth strategies that will successfully and positively transform your life. AJIS puts you in a good position to develop personal skills such as creative and strategic thinking, mental mastery, listening and speaking, problem-solving, personal finance, and coaching. You become more fulfilled, self-confident, empowered, and effective both at work and in overall life.</p>
							<p>Our team of experts has organized only the best and the most beneficial online personality development courses that you can enroll and undertake. You will be in a better position to improve in your ever busy life and your demanding job.</p>
							<p>AJIS also provides psychometric tests as one of the career-tech services. We use psychometric tests to perform assessment tests on your personality and cognitive ability. We mainly focus on motivation questionnaires, ability assessments, personality profiles, and reasoning tests to assess your personality in terms of your individual knowledge and cognitive skills.</p>
							<p>One of the merits of psychometric tests is the ability to strongly correlate your test scores and your job performance. It has been observed that if a person scores highly in a conducted psychometric test, then the chances of that person performing well in a job are also high.</p>
							<p>As an employer or interviewer, AJIS will always help you with your recruitments by helping you conduct psychometric tests on your potential employees. Psychometric testing focuses on objectivity in decision making, speed, and accuracy 8n analyzing information and making informed judgments.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</Layout>
  )
}

export default CareerTech

