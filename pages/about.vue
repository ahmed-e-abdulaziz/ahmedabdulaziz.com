<template>
  <div id="about-page" class="page-wrapper about-page content-page">
    <site-hero
      title="Ahmed Ehab Abdul-Aziz"
      subtitle="A software development enthusiast who is fond of backend, frontend and anything in between."
      image="/uploads/about-hero.jpg"
    ></site-hero>
    <main-section theme="sidebar-right">
      <template v-slot:default>
        <div class="content">
          <h2>Who am I?</h2>
          <p>
            I am Ahmed Ehab Abdul-Aziz. I am a Senior Full-Stack Engineer with
            4+ YoE mostly in the Spring stack and a Computer Science
            graduate/enthusiast. I have worked in both startups and enterprises
            and I value companies that can embrace the startup spirit but
            enforces quality enterprise guidelines.
          </p>
          <p>
            I am open to taking freelance jobs. Also, I would love to get
            recommendations for new open source projects to participate in or to
            get contacted about anything tech related.
          </p>
          <h2>How to contact me?</h2>
          <p>Phone Number: <a href="tel:+201114734723">+201114734723</a></p>
          <p>
            Email:
            <a href="mailto:ahmed.ehab5010@gmail.com">
              ahmed.ehab5010@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:
            <a href="https://www.linkedin.com/in/ahmed-abdul-aziz/">
              linkedin.com/in/ahmed-abdul-aziz/
            </a>
          </p>
          <p>
            Github:
            <a href="https://github.com/ahmed-e-abdulaziz">
              github.com/ahmed-e-abdulaziz
            </a>
          </p>

          <h2>Skills And Education</h2>
          <p>
            <strong>Experienced in:</strong> Java (SE/EE), Hibernate/JPA,
            Kubernetes, Helm, Spring Core, Spring MVC, Spring Webflux (Reactor),
            Spring Boot, Spring Data, Spring Cloud, Spring Security, Docker,
            Redis, Jenkins, Kubernetes, Apache HTTPD, Linux, JSF/PrimeFaces,
            JSP, Angular 2+, HTML/CSS, SQL, PostgreSQL, MySQL, Oracle DB, Git,
            Maven, Mockito, PowerMock, TestNG, JUnit, RESTful, JavaScript,
            Prometheus, Grafana, PromQL, Cortex, Liquibase.
          </p>

          <p>
            <strong>Trained in:</strong> Consul, AWS, Vue.js, Keycloak, Jest.
          </p>
          <p>
            <strong>Software Engineering:</strong> UML, OOP, TDD, MVC, Agile
            Methodology (Scrum/Kanban), Observability, OWASP, OAuth 2.0,
            Microservices, Design Patterns, Database Design, Cloud, Web
            Services, Reactive Programming, Internet of Things, DevOps.
          </p>
          <p>
            <strong>Languages:</strong> Fluent English. Intermediate
            German(B1+). Native Arabic.
          </p>
          <p>
            <strong>College:</strong> BSc. in CS, Faculty of Computer and
            Information, Helwan University, 2017, GPA 3.33 (B+), Very Good with
            Honors Degree. Major: Computer Science, Minor: Information Systems.
          </p>
          <h2>Experience</h2>
          <p>
            <strong>
              Senior Software Engineer at Autonomic (A Ford Company) | Andela
              (June 2021 - Present):
            </strong>
            I was hired as a remote full-time software engineer at Autonomic
            through Andela, where I worked in a distributed US-based team that
            spans 5 countries in 3 different continents to develop the
            observability stack to give the whole company useful insights into
            different services.
          </p>
          <p>
            <strong>
              Senior Full-Stack Engineer at Segmatek (Nov 2019 - Present):
            </strong>
            My responsibilities included architecting, developing, unit testing,
            deployment of both frontend and backend services, communicating with
            the customer, leading a team of junior developers and conducting
            interviews. I worked on building multiple services using Spring
            stack and Angular plus deployment and DevOps tasks like managing
            Docker, using Jenkins and pipelines, configuring Apache server and
            shell scripting using bash or batch.
          </p>

          <p>
            <strong>
              Java Software Consultant at Infor (August 2019 - Nov 2019):
            </strong>
            I maintained and enhanced applications on an ongoing basis and
            ensured that unit tests are performed correctly using Java and
            collaborated with team members to achieve goals and to maintain the
            continued success of the products.
          </p>
          <p>
            <strong>
              Java Software Engineer at DXC (March 2018 - August 2019):
            </strong>
            I engineered and developed software applications for DXC Technology
            (formerly HP Enterprise) where I work in a multinational team to
            deliver Java applications using Hibernate, Spring Core/MVC/Data/Boot
            to provide required business needs with a RESTful endpoint to be
            consumed by the frontend layer.
          </p>
          <p>
            <strong>
              Junior Java Developer at Marased (July 2017 - March 2018):
            </strong>
            I maintained and developed new features to support the projects I am
            enrolled in at Marased. I mainly worked as a Junior Java Developer
            with JSF/PrimeFaces, Spring Core/MVC, Jersey, AngularJS and
            Hibernate to finish required tasks within specific timeframes.
          </p>
          <p>
            <strong> Trainee at HCI LAB (March 2016 - April 2016):</strong>
            Mainly Java (OpenCV) tasks, most notably the Automatic correction
            system. It scans and recognizes the answer sheet then calculates the
            grade.
          </p>
          <p>
            <strong> Intern at IBM (July 2015 - July 2015):</strong> Many
            IT-related problems. I choose it as I wanted to work with something
            different than programming to challenge myself with something new.
          </p>
          <p>
            <strong> Intern at IBM (July 2014 - August 2014): </strong> My first
            internship which was a great experience where I solved many
            programming tasks, it included Java and JavaScript.
          </p>
        </div>
      </template>

      <template v-slot:sidebar>
        <h3 class="subtitle is-4">
          Latest Posts
        </h3>
        <posts-grid :per-row="1" :number="2" />
      </template>
    </main-section>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `About | ${this.$siteConfig.siteName}`,
      htmlAttrs: {
        lang: 'en'
      }
    }
  }
}
</script>
