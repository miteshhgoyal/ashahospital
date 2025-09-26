import React, { useState } from "react";
import {
  X,
  Phone,
  Calendar,
  User,
  MessageCircle,
  Stethoscope,
  Clock,
  FileText,
  MapPin,
} from "lucide-react";

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    contactNumber: "",
    selectedDoctor: "",
    appointmentDate: "",
    appointmentTime: "",
    appointmentMode: "physical",
    remarks: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const doctors = [
    {
      id: "mayank",
      name: "Dr. Mayank Kumar",
      specialty: "Brain & Spine Specialist",
      location: "Muzaffarpur, North Bihar",
      qualifications:
        "M.Ch. (Neurosurgery), MS (General Surgery – Gold Medalist)",
    },
    {
      id: "rashi",
      name: "Dr. Rashi",
      specialty: "Obstetrician, Gynaecologist & Infertility Specialist",
      location: "Muzaffarpur",
      qualifications:
        "MBBS, MS (Obs & Gynaec – AMU), DNB (Obs & Gynaec), MRCOG (UK)",
    },
    {
      id: "rakesh",
      name: "Dr. Rakesh Raushan",
      specialty: "Physician & Internal Medicine Specialist",
      location: "Muzaffarpur",
      qualifications: "MBBS, MD (Medicine)",
    },
    {
      id: "ankit",
      name: "Dr. Ankit Raj",
      specialty: "Orthopedic, Joint Replacement & Arthroscopic Surgeon",
      location: "Muzaffarpur",
      qualifications: "MBBS, D. Ortho",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Booking submitted:", formData);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Auto close after success
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({
          patientName: "",
          age: "",
          contactNumber: "",
          selectedDoctor: "",
          appointmentDate: "",
          appointmentTime: "",
          appointmentMode: "physical",
          remarks: "",
        });
      }, 2000);
    }, 1000);
  };

  const selectedDoctorInfo = doctors.find(
    (doc) => doc.id === formData.selectedDoctor
  );

  const isFormValid =
    formData.patientName &&
    formData.age &&
    formData.contactNumber &&
    formData.selectedDoctor &&
    formData.appointmentDate &&
    formData.appointmentTime;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className=" rounded-3xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-br from-medical to-health">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10  rounded-full flex items-center justify-center">
              <Stethoscope className="w-10 h-10 text-blue-100" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">
                Book Appointment
              </h2>
              <p className="text-sm text-neutral-100">
                Schedule with our specialists
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-neutral-100/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-neutral-100" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          {isSuccess ? (
            // Success State
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-gray-600 mb-4">
                Your appointment has been scheduled successfully
              </p>

              {selectedDoctorInfo && (
                <div className=" rounded-lg p-4 max-w-sm mx-auto">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Doctor:</span>
                      <span className="font-medium">
                        {selectedDoctorInfo.name}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {formData.appointmentDate}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">
                        {formData.appointmentTime}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-4">
                You will receive a confirmation call shortly
              </p>
            </div>
          ) : (
            // Form
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Patient Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-1" />
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    name="patientName"
                    value={formData.patientName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Age *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                    min="1"
                    max="120"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    placeholder="Enter age"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Doctor Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  <Stethoscope className="w-4 h-4 inline mr-1" />
                  Select Doctor *
                </label>
                <div className="grid grid-cols-1 gap-3">
                  {doctors.map((doctor) => (
                    <label
                      key={doctor.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        formData.selectedDoctor === doctor.id
                          ? "border-blue-500 "
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="selectedDoctor"
                        value={doctor.id}
                        checked={formData.selectedDoctor === doctor.id}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-900">
                            {doctor.name}
                          </h4>
                          <p className="text-sm text-blue-600 font-medium">
                            {doctor.specialty}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {doctor.location}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {doctor.qualifications}
                          </p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Appointment Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Preferred Time *
                  </label>
                  <input
                    type="time"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              {/* Consultation Mode */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "physical", icon: User, label: "In-Person" },
                    { value: "audio", icon: Phone, label: "Audio Call" },
                    {
                      value: "video",
                      icon: MessageCircle,
                      label: "Video Call",
                    },
                  ].map(({ value, icon: Icon, label }) => (
                    <label key={value} className="cursor-pointer">
                      <input
                        type="radio"
                        name="appointmentMode"
                        value={value}
                        checked={formData.appointmentMode === value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div
                        className={`p-3 border rounded-lg text-center transition-all ${
                          formData.appointmentMode === value
                            ? "border-blue-500 "
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <Icon className="w-5 h-5 mx-auto mb-2 text-blue-600" />
                        <span className="text-sm font-medium">{label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-1" />
                  Additional Notes
                </label>
                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  placeholder="Any symptoms, concerns, or special requests..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Booking...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4" />
                      <span>Book Appointment</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
