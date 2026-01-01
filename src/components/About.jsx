import React from 'react';

const About = () => {
  return (
    <section id="project-intro" className="section-padding" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">项目介绍</h2>
        <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--text-light)' }}>
          <p className="mb-2">
            本项目“经济大数据分析的理论、方法及应用研究”旨在面向国家重大需求，利用大数据技术深入挖掘经济运行规律。
            通过构建多维度的经济大数据分析框架，本项目致力于解决当前经济分析中面临的数据异构性、高维性和时变性挑战。
          </p>
          <p>
            我们在理论创新方面，提出了XXX方法；在应用层面，构建了XXX预测模型，为宏观经济决策提供了有力支撑。
            项目不仅关注学术前沿，更注重将研究成果转化为实际生产力，服务于国家经济建设。
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
