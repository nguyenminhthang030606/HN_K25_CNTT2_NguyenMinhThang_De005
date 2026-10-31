let employees = [
    {
        employeeCode: "EMP-001",
        fullName: "Ngô Thanh Tùng",
        department: "Phòng Kỹ Thuật",
        age: 28,
        experienceYears: 5
    },
    {
        employeeCode: "EMP-002",
        fullName: "Hồ Thị Thu",
        department: "Phòng Nhân Sự",
        age: 35,
        experienceYears: 10
    },
    {
        employeeCode: "EMP-003",
        fullName: "Mai Quốc Việt",
        department: "Phòng Kỹ Thuật",
        age: 24,
        experienceYears: 1
    }
];
let choice;
function formatText(text) {
    return text
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
function disPlayEmployee() {
    if (employees.length === 0) {
        console.log("Danh sách trống");
        return;
    }
    console.log("===== DANH SÁCH NHÂN VIÊN =====");
    for (let i = 0; i < employees.length; i++) {
        let emp = employees[i];
        console.log(`${emp.employeeCode} - ${emp.fullName} - ${emp.department} - ${emp.age} tuổi - ${emp.experienceYears} năm kinh nghiệm`);
    }
    console.log("Tổng số nhân viên:", employees.length);
}
function addEmployee() {
    let employeeCode = prompt("Nhập mã nhân viên:");
    if (employeeCode === null) {
        console.log("Đã hủy thao tác");
        return;
    }if (employeeCode.trim() === "") {
        console.log("Lỗi: Mã nhân viên không được để trống");
        return;
    }if (employeeCode.length < 6) {
        console.log("Lỗi: Mã nhân viên phải có ít nhất 6 ký tự");
        return;
    }if (!employeeCode.startsWith("EMP-")) {
        console.log('Lỗi: Mã nhân viên phải bắt đầu bằng "EMP-"');
        return;
    }if (employeeCode.includes(" ")) {
        console.log("Lỗi: Mã nhân viên không được chứa khoảng trắng");
        return;
    }
    let exist = employees.some(emp => emp.employeeCode === employeeCode);
    if (exist) {
        console.log("Lỗi: Mã nhân viên đã tồn tại");
        return;
    }
    let fullName;
    do {
        fullName = prompt("Nhập họ tên:");
        if (fullName === null) {
            console.log("Đã hủy thao tác");
            return;
        }if (fullName.trim() === "") {
            console.log("Họ tên không được để trống");
        }
    } while (fullName.trim() === "");
    fullName = formatText(fullName);
    let department;
    do {
        department = prompt("Nhập phòng ban:");
        if (department === null) {
            console.log("Đã hủy thao tác");
            return;
        }if (department.trim() === "") {
            console.log("Phòng ban không được để trống");
        }
    } while (department.trim() === "");
    department = formatText(department);
    let age;
    do {
        age = +prompt("Nhập tuổi (18-60):");
        if (isNaN(age) || age < 18 || age > 60) {
            console.log("Lỗi: Tuổi phải từ 18 đến 60");
        }
    } while (isNaN(age) || age < 18 || age > 60);
    let experienceYears;
    do {
        experienceYears = +prompt("Nhập số năm kinh nghiệm (0-40):");

        if (
            isNaN(experienceYears) ||experienceYears < 0 ||experienceYears > 40) {
            console.log("Lỗi: Số năm kinh nghiệm phải từ 0 đến 40");
        }
    } while (
        isNaN(experienceYears) ||experienceYears < 0 ||experienceYears > 40);
    let newEmployee = {
        employeeCode,
        fullName,
        department,
        age,
        experienceYears
    };
    employees.push(newEmployee);
    console.log("THÊM NHÂN VIÊN THÀNH CÔNG");
    console.log(
        `${newEmployee.employeeCode} - ${newEmployee.fullName} - ${newEmployee.department} - ${newEmployee.age} tuổi - ${newEmployee.experienceYears} năm kinh nghiệm`
    );
}
function updateEmployee() {
    let employeeCodeUpdate = prompt("Nhập mã nhân viên cần cập nhật:");
    if (employeeCodeUpdate === null) {
        console.log("Đã hủy thao tác");
        return;
    }
    let employee = employees.find(emp => emp.employeeCode === employeeCodeUpdate);
    if (!employee) {
        console.log(
            `Không tìm thấy nhân viên có mã ${employeeCodeUpdate}`
        );
        return;
    }
    let oldAge = employee.age;
    let oldExperience = employee.experienceYears;
    let newAge;
    do {
        let inputAge = prompt("Nhập tuổi mới (18 - 60):");
        if (inputAge === null) {
            console.log("Đã hủy thao tác, dữ liệu giữ nguyên");
            return;
        }
        newAge = +inputAge;
        if (isNaN(newAge) || newAge < 18 || newAge > 60) {
            console.log("Lỗi: Tuổi phải từ 18 đến 60");
        }
    } while (isNaN(newAge) || newAge < 18 || newAge > 60);
    let newExperience;
    do {
        let inputExperience = prompt(
            "Nhập số năm kinh nghiệm mới (0 - 40):"
        );
        if (inputExperience === null) {
            console.log("Đã hủy thao tác, dữ liệu giữ nguyên");
            return;
        }
        newExperience = +inputExperience;
        if (isNaN(newExperience) || newExperience < 0 || newExperience > 40) {
            console.log("Lỗi: Số năm kinh nghiệm phải từ 0 đến 40");
        }
    } while (
        isNaN(newExperience) || newExperience < 0 || newExperience > 40
    );
    employee.age = newAge;
    employee.experienceYears = newExperience;
    console.log(" CẬP NHẬT THÀNH CÔNG ");
    console.log(`Tuổi: ${oldAge} -> ${employee.age}`);
    console.log(
        `Số năm kinh nghiệm: ${oldExperience} -> ${employee.experienceYears}`
    );
}
function deleteEmployee() {
    let employeeCodeDelete = prompt("Nhập mã nhân viên cần xóa:");
    if (employeeCodeDelete === null) {
        console.log("Đã hủy thao tác xóa");
        return;
    }
    let index = employees.findIndex(emp => emp.employeeCode === employeeCodeDelete);
    if (index === -1) {
        console.log(`Không tìm thấy nhân viên có mã ${employeeCodeDelete}`);
        return;
    }
    let confirmDelete = prompt("Xác nhận xóa nhân viên (Y/N)");
    if (confirmDelete === "Y" || confirmDelete === "y") {
        employees.splice(index, 1);
        console.log(`Xóa thành công. Số nhân viên còn lại: ${employees.length}`);
    } else {
        console.log("Đã hủy thao tác xóa");
    }
}
do {
    choice = +prompt(`HỆ THỐNG QUẢN LÝ NHÂN VIÊN CÔNG TY SKYTECH
1. Hiển thị danh sách nhân viên
2. Thêm nhân viên mới
3. Cập nhật thông tin nhân viên
4. Xóa nhân viên
5. Tìm kiếm nhân viên theo phòng ban
0. Thoát chương trình

Vui lòng nhập lựa chọn của bạn (0 - 5):`);

    switch (choice) {
        case 1:
            disPlayEmployee();
            break;
        case 2:
            addEmployee();
            break;
        case 3:
            updateEmployee();
            break;
        case 4:
            deleteEmployee();
            break;
        case 5:

            break;
        case 0:
            console.log("Thoát chương trình");
            break;

        default:
            console.log("Lựa chọn không hợp lệ");
    }
} while (choice !== 0);