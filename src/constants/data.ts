export const nameDetails = {
  firstName: "Dummy",
  lastName: "User",
  fullName: "Dummy User",
  email: "sushan.shr10@gmail.com",
};

export const columns = [
  { label: "NAME", accessor: "username", sortByOrder: "asc", sortable: false },
  { label: "EMAIL", accessor: "email", sortByOrder: "asc", sortable: false },
  { label: "STATUS", accessor: "status", sortByOrder: "asc", sortable: false },
  { label: "ROLE TYPE", accessor: "role", sortByOrder: "asc", sortable: false },
  { label: "PIT", accessor: "pit", sortByOrder: "asc", sortable: false },
  { label: "PLANT", accessor: "plant", sortByOrder: "asc", sortable: false },
];

export const dataList = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      username: "niroj",
      email: "nirojdyola@gmail.com",
      status: "active",
      role: "user",
      pit: "Pit",
      plant: "Plant1",
    },
    {
      id: 2,
      username: "niroj1",
      email: "nirojdyola1@gmail.com",
      status: "active",
      role: "user",
      pit: "Pit1",
      plant: "Plant2",
    },
    {
      id: 3,
      username: "niroj2",
      email: "nirojdyola2@gmail.com",
      status: "deactive",
      role: "master",
      pit: "Pit2",
      plant: "Plant3",
    },
    {
      id: 4,
      username: "abc",
      email: "abc@gmail.com",
      status: "active",
      role: "normal user",
      pit: "Pit",
      plant: "Plant",
    },
    {
      id: 5,
      username: "cde",
      email: "cde@gmail.com",
      status: "active",
      role: "user",
      pit: "Pit",
      plant: "Plant",
    },
    {
      id: 6,
      username: "efg",
      email: "efg@gmail.com",
      status: "active",
      role: "user",
      pit: "Pit",
      plant: "Plant",
    },
  ],
};

export const afeData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      afe_number: "2022.17.1",
      job_name: `VR M137 1400 4" Minus 50K`,
      plant: "DA2",
      start_date: "9/7/22",
      end_date: "11/17/22",
      shift_hr: "12",
      shifts_week: "5",
      op_efficiency: "70.00%",
      op_hour: "1650",
      work_hour: "1650",
      op_hour_shift: "1650",
      total_shift: "1650",
    },
    {
      id: 2,
      afe_number: "2022.17.1",
      job_name: `VR M137 1400 4" Minus 50K`,
      plant: "DA2",
      start_date: "9/7/22",
      end_date: "11/17/22",
      shift_hr: "12",
      shifts_week: "5",
      op_efficiency: "70.00%",
      op_hour: "1650",
      work_hour: "1650",
      op_hour_shift: "1650",
      total_shift: "1650",
    },
  ],
};

export const saleData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      ticket_number: "12324523353",
      ticket_day: `Fri`,
      ticket_date: "30 - Jan -20",
      resource: "Midland South",
      loadout_qty: "1234.00",
      moh_qty: "1234.00",
      moh_sale: "1234.00",
      moh_loadout: "1234.00",
      normal_sale: "1234.00",
      total_sale: "1234.00",
      buy_qty: "$16.00",
    },
    {
      id: 2,
      ticket_number: "12324523353",
      ticket_day: `Fri`,
      ticket_date: "30 - Jan -20",
      resource: "Midland South",
      loadout_qty: "1234.00",
      moh_qty: "1234.00",
      moh_sale: "1234.00",
      moh_loadout: "1234.00",
      normal_sale: "1234.00",
      total_sale: "1234.00",
      buy_qty: "$16.00",
    },
  ],
};

export const productData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      name: '1 /4" Commercial Road Base',
      class_code: `10`,
      product_type: "Graded Rock",
      rack_price: "$124",
    },
    {
      id: 2,
      name: '1 /4" Commercial Road Base',
      class_code: `10`,
      product_type: "30 - Jan -20",
      rack_price: "$124",
    },
  ],
};

export const equipmentData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      description: "01-1101: Ford F150 (Charcoal)",
      equipment_class: `10 - Mechanic Body`,
      class_code: "10",
      op_non: "Non-Op",
      own_rent: "Own",
      plant: "HMA2",
      off_rent: "",
      subplant: "Cone",
      physical_location: "Glasscock 158",
      party: "Edmun",
    },
    {
      id: 2,
      description: "01-1101: Ford F150 (Charcoal)",
      equipment_class: `10 - Mechanic Body`,
      class_code: "10",
      op_non: "Non-Op",
      own_rent: "Own",
      plant: "HMA2",
      off_rent: "",
      subplant: "Cone",
      physical_location: "Glasscock 158",
      party: "Edmun",
    },
  ],
};

export const peopleData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      name: "Justin Smith",
      type: `Employee`,
      ein_ssn: "123456789",
      address: "123 S Washington Rd. Magna, UT 84044",
      phone: "123456789",
      role: "Foreman",
      hourly: "$25.65",
      overtime: "$25.65",
      salary: "",
      add_pay: "$25.65",
      start: "12/12/2016",
      end: "12/12/2022",
      plant: "HMA2 Cone, HMA2 Pre-Screen, HMA2 VSI",
    },
    {
      id: 2,
      name: "Justin Smith",
      type: `Employee`,
      ein_ssn: "123456789",
      address: "123 S Washington Rd. Magna, UT 84044",
      phone: "123456789",
      role: "Foreman",
      hourly: "$25.65",
      overtime: "$25.65",
      salary: "",
      add_pay: "$25.65",
      start: "12/12/2016",
      end: "12/12/2022",
      plant: "HMA2 Cone, HMA2 Pre-Screen, HMA2 VSI",
    },
  ],
};

export const plantData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      plant: "DA2",
      pit: `Amarillio`,
      business_unit:
        "Aggregate, Asphalt, Construction, Pit Development,(T&M), Site Clean Up, (T&M)",
      operation:
        "Crushing, Loadout, Major Repair, MOB/Setup/Teardown, Pit Development, Precoating, Remote Loadout, Stripping, Pit",
      shift: "Day, Night, Swing",
    },
    {
      id: 2,
      plant: "DA2",
      pit: `Amarillio`,
      business_unit:
        "Aggregate, Asphalt, Construction, Pit Development,(T&M), Site Clean Up, (T&M)",
      operation:
        "Crushing, Loadout, Major Repair, MOB/Setup/Teardown, Pit Development, Precoating, Remote Loadout, Stripping, Pit",
      shift: "Day, Night, Swing",
    },
  ],
};

export const inventoryData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      product: "Product Name here",
      category: "Adjustment to Survey;",
      inventory_date: "1/11/21;",
      product_type: "Graded Rock",
      pit: "Martin 137",
      plant: "CC1",
      shift: "Day",
      pay: "Pay",
      reported_production: "17,000",
      prod_adj: "17,000",
      adjusted_production: "-80%",
      normal_sales_tons: "17,000",
      inv_transfer: "17,000",
      purchases: "17,000",
      prod_pur: "17,000",
      name_adjustment: "17,000",
      survery_balance_adjustment: "17,000",
      net_vr_inv_change: "17,000",
      moh_sales_tons: "17,000",
      moh_deliveries: "17,000",
      moh_inventory_adjustment: "(56,000)",
      net_moh_inv_change: "(56,000)",
      yard_db: "1.7",
      weight_db: "1.7",
      muck_face_plus: "(56,000)",
      muck_face_minus: "(56,000)",
      mf_inv_adj: "",
      net_vr_muck_face: "(56,000)",
      notes: "This is an example of a long note",
      job: "APM Hot Plant",
      moh_customer: "APM Hot Plant",
    },
    {
      id: 2,
      product: "Product Name here",
      category: "Adjustment to Survey;",
      inventory_date: "1/11/21;",
      product_type: "Graded Rock",
      pit: "Martin 137",
      plant: "CC1",
      shift: "Day",
      pay: "Pay",
      reported_production: "17,000",
      prod_adj: "17,000",
      adjusted_production: "-80%",
      normal_sales_tons: "17,000",
      inv_transfer: "17,000",
      purchases: "17,000",
      prod_pur: "17,000",
      name_adjustment: "17,000",
      survery_balance_adjustment: "17,000",
      net_vr_inv_change: "17,000",
      moh_sales_tons: "17,000",
      moh_deliveries: "17,000",
      moh_inventory_adjustment: "(56,000)",
      net_moh_inv_change: "(56,000)",
      yard_db: "1.7",
      weight_db: "1.7",
      muck_face_plus: "(56,000)",
      muck_face_minus: "(56,000)",
      mf_inv_adj: "",
      net_vr_muck_face: "(56,000)",
      notes: "This is an example of a long note",
      job: "APM Hot Plant",
      moh_customer: "APM Hot Plant",
    },
  ],
};

export const pitData = {
  meta: {
    current_page: 1,
    from: 1,
    last_page: 1,
    per_page: 15,
    to: 9,
    total: 9,
  },
  results: [
    {
      id: 1,
      name: "DA2",
      region: `Amarillio`,
    },
    {
      id: 2,
      name: "DA2",
      region: `Amarillio`,
    },
  ],
};
