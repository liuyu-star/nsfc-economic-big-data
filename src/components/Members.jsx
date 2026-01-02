import React from 'react';
import '../styles/Members.css';

const Members = () => {
  const team = [
    { 
      name: "Guodong Li", 
      role: "项目成员", 
      title: "Professor, University of Hong Kong", 
      img: "https://ui-avatars.com/api/?name=Guodong+Li&background=0D8ABC&color=fff&size=200",
      link: "https://saasweb.hku.hk/people/gdli.php"
    },
    { 
      name: "Degui Li", 
      role: "项目成员", 
      title: "Distinguished Professor, University of Macau", 
      img: "https://ui-avatars.com/api/?name=Degui+Li&background=0D8ABC&color=fff&size=200",
      link: "https://fba.um.edu.mo/staff/degui-li/"
    },
    { 
      name: "Zhonglei Wang", 
      role: "项目成员", 
      title: "Associate Professor, Xiamen University", 
      img: "https://ui-avatars.com/api/?name=Zhonglei+Wang&background=0D8ABC&color=fff&size=200",
      link: "https://wise.xmu.edu.cn/people/faculty/0e/6f/c16743a164506/page.htm"
    },
    { 
      name: "Weixuan Zhu", 
      role: "项目成员", 
      title: "Assistant Professor, Xiamen University", 
      img: "https://ui-avatars.com/api/?name=Weixuan+Zhu&background=0D8ABC&color=fff&size=200",
      link: "https://wise.xmu.edu.cn/people/faculty/23/5d/c16743a180370/page.htm"
    },
    { 
      name: "Ye He", 
      role: "项目成员", 
      title: "School of Mathematics Science, Sichuan Normal University", 
      img: "https://ui-avatars.com/api/?name=Ye+He&background=0D8ABC&color=fff&size=200",
      link: "http://math.sicnu.edu.cn/"
    },
    { 
      name: "Yingcun Xia", 
      role: "项目成员", 
      title: "Professor, National University of Singapore", 
      img: "https://ui-avatars.com/api/?name=Yingcun+Xia&background=0D8ABC&color=fff&size=200",
      link: "https://www.stat.nus.edu.sg/people/faculty-members/xia-yingcun/"
    },
    { 
      name: "Chen Wang", 
      role: "项目成员", 
      title: "Assistant Professor, University of Hong Kong", 
      img: "https://ui-avatars.com/api/?name=Chen+Wang&background=0D8ABC&color=fff&size=200",
      link: "https://saasweb.hku.hk/people/cw.php"
    },
    { 
      name: "Xu Qin", 
      role: "项目成员", 
      title: "Associate Professor, UESTC", 
      img: "https://ui-avatars.com/api/?name=Xu+Qin&background=0D8ABC&color=fff&size=200",
      link: "https://www.math.uestc.edu.cn/"
    },
  ];

  return (
    <section id="members" className="section-padding" style={{ background: 'var(--section-bg-odd)', padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">项目组成员</h2>
        <div className="members-grid">
          {team.map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-img">
                <a href={member.link} target="_blank" rel="noopener noreferrer">
                  <img src={member.img} alt={member.name} />
                </a>
              </div>
              <div className="member-info">
                <h3>
                  <a href={member.link} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    {member.name}
                  </a>
                </h3>
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
