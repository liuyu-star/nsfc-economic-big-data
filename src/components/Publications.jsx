import React from 'react';
import { getLinkedText } from '../utils/memberMap.jsx';

const Publications = () => {
  // Define categories and their corresponding papers
  const publicationsData = {
    "2026": [
      {
        title: "High-dimensional functional time series: A selective review (in Chinese)",
        authors: "Li, D. G., Qiao X H.",
        journal: "《中国科学:数学》",
        year: "2026",
        link: "https://doi.org/10.1360/SSM-2024-0052"
      },
      {
        title: "Likelihood-free Gibbs Sequential Monte Carlo Sampling",
        authors: "Weixuan Zhu, Wei Li, and Weining Shen",
        journal: "Statistica Sinica",
        year: "2026",
        link: "https://doi.org/10.5705/ss.202023.0332"
      },
      {
        title: "Consistency of the oblique decision tree and its boosting and random forest",
        authors: "Zhan, H., Y. Liu and Y. Xia",
        journal: "Bernoulli",
        year: "2026",
        link: "https://scholar.google.com/scholar?q=Consistency+of+the+oblique+decision+tree+and+its+boosting+and+random+forest"
      }
    ],
    "2025+ / In Press / Accepted": [
      {
        title: "Balanced Active Inference",
        authors: "Chen, B., Zhou, Z., Peng, L., and Wang, Z.",
        journal: "NeurIPS 2025",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Balanced+Active+Inference"
      },
      {
        title: "On Bekker's Many Instrument Asymptotic Framework",
        authors: "Huang, Z., C. Wang and J. Yao",
        journal: "Econometrics and Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=On+Bekker's+Many+Instrument+Asymptotic+Framework"
      },
      {
        title: "Trace Test for High-Dimensional Cointegration",
        authors: "Onatski, A. and C. Wang",
        journal: "Annals of Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Trace+Test+for+High-Dimensional+Cointegration"
      },
      {
        title: "An improved SNE with its applications in classification and visualization",
        authors: "Peilin Sun, Xu Qin",
        journal: "Advances in Computational Mathematics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=An+improved+SNE+with+its+applications+in+classification+and+visualization"
      },
      {
        title: "Selection Bias Adjustment by Functional Transfer Learning via Reproducing Kernel Hilbert Space",
        authors: "Wang, Z., Mao, X., Kim, J.K. and Wang, H.",
        journal: "Journal of Business & Economic Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Selection+Bias+Adjustment+by+Functional+Transfer+Learning"
      },
      {
        title: "DAG Trend Filtering for Genomic Denoising via Higher-Order Bayesian Networks and DAG Shrinkage Processes",
        authors: "Weixuan Zhu, Fan Liao, and Yang Ni",
        journal: "Biometrics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=DAG+Trend+Filtering+for+Genomic+Denoising"
      },
      {
        title: "Bayesian Latent Ising Model for Joint Microbial and Metabolomic Network Inference",
        authors: "Yang Ni and Weixuan Zhu",
        journal: "Journal of Applied Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Bayesian+Latent+Ising+Model+for+Joint+Microbial"
      },
      {
        title: "Quantile index regression",
        authors: "Zhang, Y., Zhu, Q., Si, Y. and Li, G.",
        journal: "Statistica Sinica",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Quantile+index+regression"
      },
      {
        title: "Panel Quantile GARCH Models under Homogeneity",
        authors: "Zhu, Q., Li, W., Zhang, W. & Li, G.",
        journal: "Journal of Business & Economic Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Panel+Quantile+GARCH+Models+under+Homogeneity"
      },
      {
        title: "Estimation of Grouped Time-Varying Network Vector Autoregression Models",
        authors: "Li, D., Peng B, Tang S, & Wu, W. B.",
        journal: "Annals of Statistics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Estimation+of+Grouped+Time-Varying+Network+Vector+Autoregression+Models"
      }
    ],
    "2025": [
      {
        title: "Nonparametric estimation of large spot volatility matrices for high-frequency financial data",
        authors: "Bu, R., D. Li, O., Linton and H. Wang",
        journal: "Econometric Theory",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Nonparametric+estimation+of+large+spot+volatility+matrices"
      },
      {
        title: "Towards Long-Range ENSO Prediction with an Explainable Deep Learning Model",
        authors: "Chen, Q., Cui, Y., Guobin Hong, Karumuri Ashok, Yuchun Pu, Xiaogu Zheng, Xuanze Zhang, Wei Zhong, Peng Zhan and Zhonglei Wang",
        journal: "npj Climate and Atmospheric Science",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Towards+Long-Range+ENSO+Prediction+with+an+Explainable+Deep+Learning+Model"
      },
      {
        title: "Online Robust Estimation and Bootstrap Inference for Robust Function-on-scalar Regression",
        authors: "Cheng, G., W. Hu, R. Lin and C. Wang",
        journal: "Statistics and Computing",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Online+Robust+Estimation+and+Bootstrap+Inference"
      },
      {
        title: "Supervised Factor Modeling for High-Dimensional Linear Time Series",
        authors: "Huang, F., Lu, K., Zheng, Y. and Li, G.",
        journal: "Journal of Econometrics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Supervised+Factor+Modeling+for+High-Dimensional+Linear+Time+Series"
      },
      {
        title: "Volatility Analysis with High-frequency and Low-frequency Historical Data, and Options-Implied Information",
        authors: "Huiling Yuan, Kexin Lu and Guodong Li",
        journal: "Statistica Sinica",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Volatility+Analysis+with+High-frequency+and+Low-frequency"
      },
      {
        title: "High-dimensional Partial Correlation Coeffcients: A Survey Study of Estimation Methods",
        authors: "Jingying Yang, Guishu Bai and Xu Qin",
        journal: "Communications in Statistics - Theory and Methods",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=High-dimensional+Partial+Correlation+Coeffcients"
      },
      {
        title: "Power boosting: fusion of multiple test statistics via resampling",
        authors: "Kong, E., Y. Liu, Y. Xia",
        journal: "Statistica Sinica",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Power+boosting+fusion+of+multiple+test+statistics"
      },
      {
        title: "A tree approach for variable selection and its random forest",
        authors: "Liu Y., Qin X., Cai Z.B.",
        journal: "Computational Statistics & Data Analysis",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=A+tree+approach+for+variable+selection+and+its+random+forest"
      },
      {
        title: "Spurious Factors in Data with Local- to-unit Roots",
        authors: "Onatski, A. and C. Wang",
        journal: "Econometric Theory",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Spurious+Factors+in+Data+with+Local-+to-unit+Roots"
      },
      {
        title: "Examining Chinese volume–volatility nexus: A regime-switching perspective",
        authors: "Wang, Z., S Wang, Y Yan and Y Xia",
        journal: "Economic Modelling",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Examining+Chinese+volume–volatility+nexus"
      },
      {
        title: "Tucker tensor factor models: Matricization and mode-wise PCA estimation",
        authors: "Xu Zhang, Guodong Li, Catherine C. Liu; Jianhua Guo",
        journal: "Science of China (Mathematics)",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Tucker+tensor+factor+models"
      },
      {
        title: "Identification of Latent Subgroups for Time-varying Panel Data Models",
        authors: "Ye He, Qing Luo, Liu Liu, Shengzhi Mao, Ling Zhou",
        journal: "Journal of Business & Economic Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Identification+of+Latent+Subgroups+for+Time-varying+Panel+Data+Models"
      },
      {
        title: "Ensemble projection pursuit for general nonparametric regression",
        authors: "Zhan, H., M Zhang and Y. Xia",
        journal: "The Annals of Statistics",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Ensemble+projection+pursuit+for+general+nonparametric+regression"
      }
    ],
    "2024": [
      {
        title: "High-Frequency-Based Volatility Model with Network Structure",
        authors: "Huiling Yuan, Kexin Lu, Guodong Li and Junhui Wang",
        journal: "Journal of Time Series Analysis",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=High-Frequency-Based+Volatility+Model+with+Network+Structure"
      },
      {
        title: "Hypotheses Testing from Complex Survey Data Using Bootstrap Weights: A Unified Approach",
        authors: "Jae Kwang Kima, J. N. K. Rao and Zhonglei Wang",
        journal: "Journal of the American Statistical Association",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Hypotheses+Testing+from+Complex+Survey+Data+Using+Bootstrap+Weights"
      },
      {
        title: "A dynamic count process",
        authors: "Kim, Namhyun, Pipat Wongsa-art and Yingcun Xia",
        journal: "Journal of Statistical Planning and Inference",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=A+dynamic+count+process"
      },
      {
        title: "Detection and Estimation of Structural Breaks in High-Dimensional Functional Time Series",
        authors: "Li, D., R. Li, H. Shang",
        journal: "Annals of Statistics",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Detection+and+Estimation+of+Structural+Breaks+in+High-Dimensional+Functional+Time+Series"
      },
      {
        title: "Functional-Coefficient Quantile Regression for Panel Data with Latent Group Structure",
        authors: "Li, R., X. Yang, J. Chen, D. Li",
        journal: "Journal of Business and Economic Statistics",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Functional-Coefficient+Quantile+Regression+for+Panel+Data+with+Latent+Group+Structure"
      },
      {
        title: "Many-sample Tests for the Equality and the Proportionality Hypotheses Between Large Covariance Matrices",
        authors: "Mei, T., C. Wang and J. Yao",
        journal: "Electronic Journal of Statistics",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Many-sample+Tests+for+the+Equality+and+the+Proportionality+Hypotheses"
      },
      {
        title: "Probability-weighted clustered coefficient regression models in complex survey sampling",
        authors: "Mingjun Gang, Xin Wang, Zhonglei Wang and Wei Zhong",
        journal: "Electronic Journal of Statistics",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Probability-weighted+clustered+coefficient+regression+models"
      },
      {
        title: "A statistical test of phase difference via wavelet method and its application to the spread of air pollution",
        authors: "Wan, Z., K Wei and Y. Xia",
        journal: "Stochastic Environmental Research and Risk Assessment",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=A+statistical+test+of+phase+difference+via+wavelet+method"
      },
      {
        title: "Testing serial dependence or cross dependence for time series with underreporting",
        authors: "Wei, K., L. Wang and Y. Xia",
        journal: "Biometrika",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Testing+serial+dependence+or+cross+dependence+for+time+series"
      },
      {
        title: "Varying coefficient panel data models and methods under correlated error components: Application to disparities in mental health services in England",
        authors: "Wongsa-art, P., N. Kim, Y. Xia and F. Moscone",
        journal: "Regional Science and Urban Economics",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Varying+coefficient+panel+data+models+and+methods+under+correlated+error+components"
      },
      {
        title: "Nonparametric augmented probability weighting with sparsity",
        authors: "Xin He, Xiaojun Mao and Zhonglei Wang",
        journal: "Computational Statistics & Data Analysis",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Nonparametric+augmented+probability+weighting+with+sparsity"
      },
      {
        title: "Nonparametric Binary Regression Models With Spherical Predictors Based on the Random Forests Kernel",
        authors: "Xu Qin and Huiqun Gao",
        journal: "Computational Statistics",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Nonparametric+Binary+Regression+Models+With+Spherical+Predictors"
      },
      {
        title: "An RIHT Statistic for Testing the Equality of Several High-dimensional Mean Vectors Under Homoscedasticity",
        authors: "Zhang, Q., C. Wang, B. Zhang and H. Yang",
        journal: "Computational Statistics and Data Analysis",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=An+RIHT+Statistic+for+Testing+the+Equality+of+Several+High-dimensional+Mean+Vectors"
      },
      {
        title: "Resampling Method for Generalized One-per-Stratum Sampling Designs",
        authors: "Zhonglei Wang and Zhengyuan Zhu",
        journal: "Statistica Sinica",
        year: "2024",
        link: "https://scholar.google.com/scholar?q=Resampling+Method+for+Generalized+One-per-Stratum+Sampling+Designs"
      }
    ],
    "2023": [
      {
        title: "An outer-product-of-gradient approach to dimension reduction and its application to classification in high dimensional space",
        authors: "Cai, Z., Y. Xia and W. Hang",
        journal: "Journal of the American Statistical Association",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=An+outer-product-of-gradient+approach+to+dimension+reduction"
      },
      {
        title: "Center-augmented L2 -type regularization for subgroup learning",
        authors: "He, Y, L, Zhou, Y. Xia and H. Lin",
        journal: "Biometrics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Center-augmented+L2+-type+regularization+for+subgroup+learning"
      },
      {
        title: "Nonstationary Fractionally Integrated Functional Time Series",
        authors: "Li, D., Peter M., Shang, H.",
        journal: "Bernoulli",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Nonstationary+Fractionally+Integrated+Functional+Time+Series"
      },
      {
        title: "Dimension Reduction and MARS",
        authors: "Liu, Y., D. Li and Y. Xia",
        journal: "Journal of Machine Learning Research",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Dimension+Reduction+and+MARS"
      },
      {
        title: "Matrix completion under complex survey sampling",
        authors: "Mao, X. Wang, Z., Yang, S",
        journal: "Annals of the Institute of Statistical Mathematics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Matrix+completion+under+complex+survey+sampling"
      },
      {
        title: "On Singular Values of Data Matrices with General Independent Columns",
        authors: "Mei, T., C. Wang and J. Yao",
        journal: "Annals of Statistics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=On+Singular+Values+of+Data+Matrices+with+General+Independent+Columns"
      },
      {
        title: "Dimensionality Reduction and Classification of Hyperspectral Images by Spatial-Spectral Similarity Measure Using Distance Correlation Coefficient",
        authors: "Peilin Sun and Xu Qin",
        journal: "AICIT2023",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Dimensionality+Reduction+and+Classification+of+Hyperspectral+Images"
      },
      {
        title: "Quantile autoregressive conditional heteroscedasticity",
        authors: "Qianqian Zhu, Songhua Tan, Yao Zheng and Guodong Li",
        journal: "Journal of the Royal Statistical Society, Series B",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Quantile+autoregressive+conditional+heteroscedasticity"
      },
      {
        title: "Choosing shape parameters for regression in reproducing kernel Hilbert space and variable selection",
        authors: "Tan, X., Y,. Xia and E. Kong",
        journal: "Journal of Nonparametric Statistics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Choosing+shape+parameters+for+regression+in+reproducing+kernel+Hilbert+space"
      },
      {
        title: "Survey data integration for regression analysis using model calibration",
        authors: "Wang, Z., Kim, H.J. and Kim, J.K.",
        journal: "Survey Methodology",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Survey+data+integration+for+regression+analysis+using+model+calibration"
      },
      {
        title: "Approximate Bayesian computation with semiparametric density ratio model",
        authors: "Weixuan Zhu, Tiantian Zuo and Chunlin Wang",
        journal: "Journal of Nonparametric Statistics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Approximate+Bayesian+computation+with+semiparametric+density+ratio+model"
      },
      {
        title: "Estimation of projection pursuit regression via alternating linearization",
        authors: "Xin Tan, Haoran Zhan and Xu Qin",
        journal: "Computational Statistics & Data Analysis",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Estimation+of+projection+pursuit+regression+via+alternating+linearization"
      },
      {
        title: "Nonparametric quantile regression for homogeneity pursuit in panel data models",
        authors: "Zhang, X, Wang, D, Lian, H. and Li, G",
        journal: "Journal of Business & Economic Statistics",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Nonparametric+quantile+regression+for+homogeneity+pursuit+in+panel+data+models"
      },
      {
        title: "Least absolute deviations estimation for nonstationary vector autoregressive time series models with pure unit roots",
        authors: "Zheng, Y., Wu, J., Li, W.K. and G. Li",
        journal: "Statistics and Its Interface",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Least+absolute+deviations+estimation+for+nonstationary+vector+autoregressive"
      }
    ],
    "2022": [
      {
        title: "MR-Corr2: a two-sample Mendelian randomization method that accounts for correlated horizontal pleiotropy using correlated instrumental variants",
        authors: "Cheng, Q., T. Qiu, X., Chai, B. Sun, Y., Xia, X., Shi and J. Liu",
        journal: "Bioinformatics",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=MR-Corr2+a+two-sample+Mendelian+randomization+method"
      },
      {
        title: "Nonparametric regression with right‐censored covariate via conditional density function",
        authors: "Jiang, H., and L., Huang and Y. Xia",
        journal: "Statistics in Medicine",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Nonparametric+regression+with+right‐censored+covariate"
      },
      {
        title: "A permutation test for two-sample means and signal identification of high-dimensional data",
        authors: "Kong, E., L. Wang, Y. Xia and J. Liu",
        journal: "Statistica Sinica",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=A+permutation+test+for+two-sample+means"
      },
      {
        title: "Nonparametric Feature Selection by Random Forests and Deep Neural Networks",
        authors: "Mao, X, Peng, L. and Z. Wang",
        journal: "Computational Statistics & Data Analysis",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Nonparametric+Feature+Selection+by+Random+Forests"
      },
      {
        title: "Functional time series approach to analyzing asset returns co-movements",
        authors: "Saart, P.W. and Y. Xia",
        journal: "Journal of Econometrics",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Functional+time+series+approach+to+analyzing+asset+returns"
      },
      {
        title: "High-dimensional vector autoregressive time series modeling via tensor decomposition",
        authors: "Wang, D, Zheng, Y, Lian, H and Li, G",
        journal: "Journal of the American Statistical Association",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=High-dimensional+vector+autoregressive+time+series+modeling"
      },
      {
        title: "Bootstrap tests for high-dimensional white-noise",
        authors: "Wang, L., E. Kong and Y. Xia",
        journal: "Journal of Business & Economic Statistics",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Bootstrap+tests+for+high-dimensional+white-noise"
      },
      {
        title: "Quantile double autoregression",
        authors: "Zhu, Q. and Li, G.",
        journal: "Econometric Theory",
        year: "2022",
        link: "https://scholar.google.com/scholar?q=Quantile+double+autoregression"
      }
    ],
    "2021": [
      {
        title: "Robust nonlinear regression estimation in null recurrent time series",
        authors: "Bravo, F., Li, D. and Tjostheim, D",
        journal: "Journal of Econometrics",
        year: "2021",
        link: "https://scholar.google.com/scholar?q=Robust+nonlinear+regression+estimation+in+null+recurrent+time+series"
      },
      {
        title: "Local Whittle estimation of long-range dependence for functional time series",
        authors: "Li, D. Robinson, P; Shang, H",
        journal: "Journal of Time Series Analysis",
        year: "2021",
        link: "https://scholar.google.com/scholar?q=Local+Whittle+estimation+of+long-range+dependence+for+functional+time+series"
      },
      {
        title: "Non parametric covariance model with circular condition and its application",
        authors: "Xu Qin and Y. Q. Zhang",
        journal: "Communications in Statistics - Theory and Methods",
        year: "2021",
        link: "https://scholar.google.com/scholar?q=Non+parametric+covariance+model+with+circular+condition"
      }
    ],
    "Conference Papers": [
      {
        title: "Balanced Active Inference",
        authors: "Chen, B.; Zhou, Z.; Peng, L. and Wang,Z.",
        journal: "NeurIPS 2025",
        year: "2025",
        link: "https://scholar.google.com/scholar?q=Balanced+Active+Inference"
      },
      {
        title: "Dimensionality Reduction and Classification of Hyperspectral Images by Spatial-Spectral Similarity Measure Using Distance Correlation Coefficient",
        authors: "Sun Peilin and Qin Xu",
        journal: "2023 2nd International Conference on Artificial Intelligence and Computer Information Technology (AICIT)",
        year: "2023",
        link: "https://scholar.google.com/scholar?q=Dimensionality+Reduction+and+Classification+of+Hyperspectral+Images"
      }
    ]
  };

  return (
    <section id="publications" className="section-padding" style={{ padding: '5rem 0' }}>
      <div className="container">
        <h2 className="text-center mb-4">论文成果</h2>
        
        {Object.entries(publicationsData).map(([category, papers]) => (
          <div key={category} className="publication-category mb-5">
            <h3 className="category-title mb-4" style={{ 
              borderBottom: '2px solid var(--primary-color)',
              paddingBottom: '0.5rem',
              color: 'var(--secondary-color)',
              maxWidth: '900px',
              margin: '0 auto 1.5rem auto'
            }}>
              {category}
            </h3>
            
            <div className="publications-list" style={{ maxWidth: '900px', margin: '0 auto' }}>
              {papers.map((paper, index) => (
                <div key={index} className="paper-item" style={{ 
                  background: 'white', 
                  padding: '1.5rem', 
                  marginBottom: '1rem', 
                  borderRadius: '6px', 
                  borderLeft: '4px solid var(--primary-color)',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s ease'
                }}>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                    <a 
                      href={paper.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ color: 'var(--text-color)', textDecoration: 'none' }}
                      onMouseOver={e => e.target.style.color = 'var(--primary-color)'}
                      onMouseOut={e => e.target.style.color = 'var(--text-color)'}
                    >
                      {paper.title}
                    </a>
                  </h3>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.95rem', marginBottom: 0 }}>
                    <strong>{getLinkedText(paper.authors)}</strong> | <em>{paper.journal}</em>, {paper.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Publications;
