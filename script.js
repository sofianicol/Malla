/******************************************************************
 *  Malla de Obstetricia USS – datos + lógica de requisitos
 ******************************************************************/

const cursos = [
  /* ---------------- Primer Semestre ---------------- */
  {id:'OBMA_A001',nom:'Fundamentos de la Matronería',cod:'OBMA A001',sem:1,req:[]},
  {id:'OBMA_A002',nom:'Salud Mental en el Curso de la Vida',cod:'OBMA A002',sem:1,req:[]},
  {id:'DBIO_1091',nom:'Biología Celular',cod:'DBIO 1091',sem:1,req:[]},
  {id:'DMOR_003', nom:'Morfología Básica',cod:'DMOR 003',sem:1,req:[]},
  {id:'DQUI_1050',nom:'Química General y Orgánica',cod:'DQUI 1050',sem:1,req:[]},
  {id:'FORI_0001',nom:'Antropología',cod:'FORI 0001',sem:1,req:[]},

  /* ---------------- Segundo Semestre ---------------- */
  {id:'OBMA_B001',nom:'Anat. Aplicada a la Gineco‑Obstetricia',cod:'OBMA B001',sem:2,req:['DMOR_003']},
  {id:'OBMA_B002',nom:'Educación, Salud y Medio Ambiente',cod:'OBMA B002',sem:2,req:[]},
  {id:'DMOR_0022',nom:'Integrado Fisio‑Fisiopato I',cod:'DMOR 0022',sem:2,req:['DBIO_1091']},
  {id:'DMOR_0028',nom:'Histoembriología',cod:'DMOR 0028',sem:2,req:['DBIO_1091']},
  {id:'DBIO_1092',nom:'Bioquímica General',cod:'DBIO 1092',sem:2,req:['DQUI_1050']},
  {id:'FACU_0004',nom:'Salud Digital',cod:'FACU 0004',sem:2,req:[]},

  /* ---------------- Tercer Semestre ---------------- */
  {id:'OBMA_C001',nom:'Proceso de Atención en Matronería',cod:'OBMA C001',sem:3,req:['OBMA_B001']},
  {id:'DCEX_0015',nom:'Bioestadística y Salud',cod:'DCEX 0015',sem:3,req:[]},
  {id:'DMOR_0023',nom:'Integrado Fisio‑Fisiopato II',cod:'DMOR 0023',sem:3,req:['DMOR_0022']},
  {id:'DBIO_1093',nom:'Microbiología Médica',cod:'DBIO 1093',sem:3,req:['DBIO_1092']},
  {id:'DMOR_0027',nom:'Embriología y Genética',cod:'DMOR 0027',sem:3,req:['DMOR_0028']},

  /* ---------------- Cuarto Semestre ---------------- */
  {id:'OBMA_D001',nom:'Fisiología Obstétrica y Neonatal',cod:'OBMA D001',sem:4,
   req:['DMOR_0023','DMOR_0027']},
  {id:'OBMA_D002',nom:'Fisiología Ginecológica y Sexual',cod:'OBMA D002',sem:4,
   req:['DBIO_1093','DMOR_0022']},
  {id:'DSPU_0012',nom:'Salud Poblacional',cod:'DSPU 0012',sem:4,req:[]},
  {id:'DBIO_1098',nom:'Farmacología General',cod:'DBIO 1098',sem:4,req:['DMOR_0022']},
  {id:'FORI_0002',nom:'Ética',cod:'FORI 0002',sem:4,req:['FORI_0001']},
  {id:'OBMA_D003',nom:'Hito Evaluativo Integrativo',cod:'OBMA D003',sem:4,
   req:['OBMA_C001','DMOR_0023','DBIO_1093','DMOR_0027']},

  /* ---------------- Quinto Semestre ---------------- */
  {id:'OBMA_E001',nom:'PAM Médico Quirúrgico',cod:'OBMA E001',sem:5,req:['OBMA_C001','DBIO_1093']},
  {id:'OBMA_E002',nom:'Patología Obstétrica y Neonatal',cod:'OBMA E002',sem:5,req:['OBMA_D001','DBIO_1098']},
  {id:'OBMA_E003',nom:'Patología Ginecológica',cod:'OBMA E003',sem:5,req:['OBMA_D002','DBIO_1098']},
  {id:'DSPU_0014',nom:'Epidemiología',cod:'DSPU 0014',sem:5,req:['DSPU_0012']},
  {id:'FORI_0003',nom:'Persona y Sociedad',cod:'FORI 0003',sem:5,req:['FORI_0002']},

  /* ---------------- Sexto Semestre ---------------- */
  {id:'OBMA_F001',nom:'Salud Familiar y Comunitaria',cod:'OBMA F001',sem:6,req:[]},
  {id:'OBMA_F002',nom:'Gestión y Calidad en Salud',cod:'OBMA F002',sem:6,req:[]},
  {id:'OBMA_F003',nom:'Consejería Salud Sexual',cod:'OBMA F003',sem:6,req:['OBMA_E003']},
  {id:'OBMA_F004',nom:'Salud Reprod. y Gerontológica',cod:'OBMA F004',sem:6,req:['OBMA_E003']},
  {id:'DSPU_0011',nom:'Metodología de la Investigación',cod:'DSPU 0011',sem:6,req:[]},
  {id:'ELECFORI01',nom:'Electivo I – Formación Integral',cod:'ELECFORI01',sem:6,req:[]},

  /* ---------------- Séptimo Semestre ---------------- */
  {id:'OBMA_G001',nom:'Matronería en Atención Primaria',cod:'OBMA G001',sem:7,
   req:['OBMA_F004','OBMA_E002']},
  {id:'OBMA_G002',nom:'Integrado Perinatal y Ginecológico',cod:'OBMA G002',sem:7,
   req:['OBMA_E002','OBMA_F003']},
  {id:'OBMA_G003',nom:'Medicina Legal y Matronería',cod:'OBMA G003',sem:7,req:[]},
  {id:'FACU_0005',nom:'Salud Basada en la Evidencia',cod:'FACU 0005',sem:7,req:[]},
  {id:'DEBI_0001',nom:'Bioética',cod:'DEBI 0001',sem:7,req:[]},
  {id:'ELECFORI02',nom:'Electivo II – Formación Integral',cod:'ELECFORI02',sem:7,req:[]},

  /* ---------------- Octavo Semestre ---------------- */
  {id:'OBMA_H001',nom:'Gestión Clínica y Atención Comunitaria',cod:'OBMA H001',sem:8,req:['OBMA_G001']},
  {id:'OBMA_H002',nom:'Gestión Clínica Obstétrica y Neonatal',cod:'OBMA H002',sem:8,req:['OBMA_G002']},
  {id:'OBMA_H003',nom:'Gestión Clínica Perinatal y Ginecológica',cod:'OBMA H003',sem:8,req:['OBMA_G002']},
  {id:'OBMA_H004',nom:'Proyecto Investigación Interdisciplinaria',cod:'OBMA H004',sem:8,req:['FACU_0005']},
  {id:'ELECFORI03',nom:'Electivo III – Formación Integral',cod:'ELECFORI03',sem:8,req:[]},
  {id:'OBMA_H005',nom:'Hito Eval. Integrativo Interprofesional',cod:'OBMA H005',sem:8,
   req:['OBMA_F001','OBMA_G002']},

  /* ---------------- Noveno Semestre ---------------- */
  {id:'OBMA_I001',nom:'Internado de Especialidades',cod:'OBMA I001',sem:9,
   req:['OBMA_G002','OBMA_H003']},
  {id:'OBMA_I002',nom:'Internado Salud Familiar/Comunitaria',cod:'OBMA I002',sem:9,
   req:['OBMA_G002','OBMA_H001']},
  {id:'ELCDGEE03',nom:'Gestión de Carrera y Desarrollo Profesional',cod:'ELCDGEE03',sem:9,req:[]},

  /* ---------------- Décimo Semestre ---------------- */
  {id:'OBMA_J001',nom:'Internado Intrahospitalario',cod:'OBMA J001',sem:10,
   req:['OBMA_G002','OBMA_H002']},
  {id:'ELECOBMA01',nom:'Electivo I (Décimo)',cod:'ELECOBMA01',sem:10,req:[]},
  {id:'ELECOBMA02',nom:'Electivo II (Décimo)',cod:'ELECOBMA02',sem:10,req:[]},
];

/* ---------- Estado runtime ---------- */
const estado = {};  // id -> {approved:boolean, element:HTMLElement, req:string[]}
const grid = document.getElementById('grid');

/* ---------- Render ---------- */
let semestre = 0;
cursos.forEach(c=>{

  /* título de semestre */
  if(c.sem!==semestre){
    semestre=c.sem;
    const h=document.createElement('div');
    h.className='semester';
    h.textContent=`Semestre ${semestre}`;
    grid.appendChild(h);
  }

  const div=document.createElement('div');
  div.className='course';
  div.innerHTML=`<span class="nombre">${c.nom}</span>
                 <span class="code">${c.cod}</span>
                 <span class="tick">✓</span>`;
  grid.appendChild(div);

  estado[c.id]={approved:false,element:div,req:c.req};

  if(c.req.length) div.classList.add('disabled');

  div.addEventListener('click',()=>toggle(c.id));
});

recalcula();

/* ---------- Funciones ---------- */
function toggle(id){
  const cur=estado[id];
  if(cur.element.classList.contains('disabled')) return;        // aún bloqueado
  cur.approved=!cur.approved;                                   // cambia estado
  cur.element.classList.toggle('approved',cur.approved);
  recalcula();
}

function recalcula(){
  Object.entries(estado).forEach(([id,info])=>{
    if(info.approved) return;                                   // si ya aprobado no se bloquea
    const ok=info.req.every(r=>estado[r].approved);             // todos cumplidos?
    info.element.classList.toggle('disabled',!ok);
  });
}
