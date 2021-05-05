const consultsData = [
    {id_client: 0, name_client: 'John Doe', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'John Doe', id_consultant: 0, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 1, name_client: 'Samppa Nori', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'Samppa Nori', id_consultant: 1, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 2, name_client: 'Estavan Lykos', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Estavan Lykos', id_consultant: 2, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 3, name_client: 'Chetan Mohamed', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Chetan Mohamed', id_consultant: 3, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 4, name_client: 'Derick Maximinus', search: 'Sector y Profesión', date: '2018/03/01', name_consultant: 'Derick Maximinus', id_consultant: 4, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 5, name_client: 'Friderik Dávid', search: 'Sector y Profesión', date: '2018/01/21', name_consultant: 'Friderik Dávid', id_consultant: 5, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 6, name_client: 'Yiorgos Avraamu', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'Yiorgos Avraamu', id_consultant: 6, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 7, name_client: 'Avram Tarasios', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Avram Tarasios', id_consultant: 7, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 8, name_client: 'Quintin Ed', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Quintin Ed', id_consultant: 8, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 9, name_client: 'Enéas Kwadwo', search: 'Sector y Profesión', date: '2018/03/01', name_consultant: 'Enéas Kwadwo', id_consultant: 9, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 10, name_client: 'Agapetus Tadeáš', search: 'Sector y Profesión', date: '2018/01/21', name_consultant: 'Agapetus Tadeáš', id_consultant: 10, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 11, name_client: 'Carwyn Fachtna', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'Carwyn Fachtna', id_consultant: 11, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 12, name_client: 'Nehemiah Tatius', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Nehemiah Tatius', id_consultant: 12, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 13, name_client: 'Ebbe Gemariah', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Ebbe Gemariah', id_consultant: 13, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 14, name_client: 'Eustorgios Amulius', search: 'Sector y Profesión', date: '2018/03/01', name_consultant: 'Eustorgios Amulius', id_consultant: 14, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 15, name_client: 'Leopold Gáspár', search: 'Sector y Profesión', date: '2018/01/21', name_consultant: 'Leopold Gáspár', id_consultant: 15, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 16, name_client: 'Pompeius René', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'Pompeius René', id_consultant: 16, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 17, name_client: 'Paĉjo Jadon', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Paĉjo Jadon', id_consultant: 17, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 18, name_client: 'Micheal Mercurius', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Micheal Mercurius', id_consultant: 18, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 19, name_client: 'Ganesha Dubhghall', search: 'Sector y Profesión', date: '2018/03/01', name_consultant: 'Ganesha Dubhghall', id_consultant: 19, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 20, name_client: 'Hiroto Šimun', search: 'Sector y Profesión', date: '2018/01/21', name_consultant: 'Hiroto Šimun', id_consultant: 20, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 21, name_client: 'Vishnu Serghei', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'Vishnu Serghei', id_consultant: 21, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 22, name_client: 'Zbyněk Phoibos', search: 'Sector y Profesión', date: '2018/02/01', name_consultant: 'Zbyněk Phoibos', id_consultant: 22, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 23, name_client: 'Aulus Agmundr', search: 'Sector y Profesión', date: '2018/01/01', name_consultant: 'Aulus Agmundr', id_consultant: 23, duration: '00:32:14', amount: 'COP 31.145'},
    {id_client: 42, name_client: 'Ford Prefect', search: 'Sector y Profesión', date: '2001/05/25', name_consultant: 'Ford Prefect', id_consultant: 24, duration: '00:32:14', amount: 'COP 31.145'}
  ]
  
  export default consultsData;
  