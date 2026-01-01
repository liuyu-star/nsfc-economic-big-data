import React from 'react';
import '../styles/Members.css';

const Members = () => {
  const team = [
    { name: "张三", role: "项目负责人", title: "教授", img: "https://ui-avatars.com/api/?name=Zhang+San&background=0D8ABC&color=fff" },
    { name: "李四", role: "核心成员", title: "副教授", img: "https://ui-avatars.com/api/?name=Li+Si&background=0D8ABC&color=fff" },
    { name: "王五", role: "核心成员", title: "讲师", img: "https://ui-avatars.com/api/?name=Wang+Wu&background=0D8ABC&color=fff" },
    { name: "赵六", role: "博士研究生", title: "科研助理", img: "https://ui-avatars.com/api/?name=Zhao+Liu&background=0D8ABC&color=fff" },
  ];

  return (
    <section id="members" className="section-padding" style={{ background: 'var(--section-bg-odd)', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">项目组成员</h2>
        <div className="members-grid">
          {team.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-img">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <span className="role">{member.role}</span>
                <p className="title">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;
